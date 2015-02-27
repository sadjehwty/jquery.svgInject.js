# http://www.github.com/sadjehwty/jquery.svgInject.js
(($) ->
  $.fn.extend svgInject: ->
    imgUrls = []
    $(this).each ->
      imgUrls.push $(this).attr('src')
      return
    imgUrls = imgUrls.filter((item, pos) ->
      imgUrls.indexOf(item) == pos
    )
    i = 0
    while i < imgUrls.length
      url = imgUrls[i]
      $.ajax
        url: url
        context: url: url
        dataType: 'text'
        success: (data) ->
          $('img[src=\'' + @url + '\']').each ->
            $img = $(this)
            imgID = $img.attr('id')
            imgClass = $img.attr('class')
            $svg = $(data)
            if typeof imgID != 'undefined'
              $svg = $svg.attr('id', imgID)
            if typeof imgClass != 'undefined'
              $svg = $svg.attr('class', imgClass + ' replaced-svg')
            $svg = $svg.removeAttr('xmlns:a')
            $img.replaceWith $svg
            return
          return
      i++
    return
  return
) jQuery

# ---
# generated by js2coffee 2.0.1

