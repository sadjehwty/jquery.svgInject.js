// http://www.github.com/sadjehwty/jquery.svgInject.js
(function($) {
  $.fn.extend({
    svgInject: function(){
      var imgUrls=[];
      $(this).each(function(){
        imgUrls.push($(this).attr('src'));
      });
      imgUrls=imgUrls.filter(function(item, pos) { return imgUrls.indexOf(item) == pos;});
      for(var i=0;i<imgUrls.length;i++){
        var url=imgUrls[i];
        $.ajax({
          url: url,
          context: {url: url},
          dataType: 'text',
          success:function(data) {
            $("img[src='"+this.url+"']").each(function(){
              var $img = $(this);
              var imgID = $img.attr('id');
              var imgClass = $img.attr('class');
              var $svg = $(data);
              if(typeof imgID !== 'undefined')
                $svg = $svg.attr('id', imgID);
              if(typeof imgClass !== 'undefined')
                $svg = $svg.attr('class', imgClass+' replaced-svg');
              $svg = $svg.removeAttr('xmlns:a');
              $img.replaceWith($svg);
            });
          } 
        });
      }
    }
  });
})(jQuery);
