(function ($) {
  'use strict';

  var slides;
  var pymChild = new pym.Child();

  var addSlides = function(){
    $.each(slides, function(i, item){
        var $itemDiv = $('<div>')
            .addClass('item');

        // set the first slide as active    
        if( i === 0){
            $itemDiv.addClass('active');
        }   

        $itemDiv.append($('<img>')
            .prop('src',item.image));

        if(item.caption){
            $itemDiv.append($('<div>')
                .addClass('carousel-caption')
                .html(item.caption));
        }
        $('.carousel-inner').append($itemDiv);
    });

    pymChild.sendHeight();
  };

  $(document).ready(function () {
    slides = AUTOTUNE.slides;
    addSlides();

  });

})(jQuery);