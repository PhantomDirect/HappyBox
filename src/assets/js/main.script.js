$(document).ready(function(){
  $('.slider-most-product').slick({
  	arrows: true,
  	dots: false,
  	slidesToShow: 4,
  });
});
$(document).ready(function(){
  $('.slider-main').slick({
  	arrows: true,
  	dots: true,
  	slidesToShow: 1,
  });
});
(function($){
        $(window).on('load', function(){
            $.instagramFeed({
                'username': 'happyboxomsk',
                'container': "#instagram-feed1",
                'display_profile': false,
                'display_biography': false,
                'display_gallery': true,
                'callback': null,
                'styling': true,
                'items': 3,
                'items_per_row': 3,
                'margin': 2.8,
                'lazy_load': false,
                'on_error': console.error
            });
        });
    })(jQuery);
new WOW().init();