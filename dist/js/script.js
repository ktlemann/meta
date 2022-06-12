$(document).ready(function() {
    //tabs
    $('ul.story__tabs').on('click', 'li:not(.story__tab_active)', function () {
        $(this)
            .addClass('story__tab_active').siblings().removeClass('story__tab_active')
            .closest('section.story').find('div.story__wrapper').removeClass('story__wrapper_active').eq($(this).index()).addClass('story__wrapper_active');
    });

    //tabs for questions
    function toggleSlide(item) {
        $(item).each(function(i) {
          $(this).on('click', function(e){
            e.preventDefault ();
            $('.questions__cant-see').eq(i).toggleClass ('questions__cant-see_active');
            $('.questions__tab').eq(i).toggleClass ('questions__tab_active');
          })
        })
      };
      toggleSlide ('.questions__tab');

});