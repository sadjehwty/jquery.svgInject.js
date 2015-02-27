// http://www.github.com/sadjehwty/jquery.svgInject.js
(function($) {
  $.fn.extend({
    svgInject: function(){
      var $this=$(this);
      var array=[];
      $this.each(function(){
        array.push($(this).data('src'));
      });
      array=array.filter(function(item, pos) { return array.indexOf(item) == pos;});
      for(var i=0;i<array.length;i++){
        var v=array[i];
        $.ajax({
          url: v,
          context: {url: v},
          dataType: 'text',
          success:function(data) {
            var v=this.url;
            $this.find("[data-src='"+v+"']").each(function(){
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
