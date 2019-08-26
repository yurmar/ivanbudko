$(function() {

    $('#my-menu').mmenu({
        extensions: [ 'widescreen', 'effect-menu-slide', 'pagedim-black' ],
        navbar: {
            title: '<img src="http://ivanbudko.yurmar.ru/wp-content/uploads/2019/08/logo-b@2x.png" alt="Иван Будько">'
        },
        offCanvas: {
            position  : 'left'
        }
    });

    $(".popup-content").magnificPopup({type:"inline", midClick: true});

    $(".team-sec-item").each(function(i) {
        $(this).find(".popup-content").attr("href", "#work_" + i);
        $(this).find(".team-sec-item-desc").attr("id", "work_" + i);

    });

    var api = $('#my-menu').data('mmenu');
    api.bind('opened', function () {
        $('.hamburger').addClass('is-active');
    }).bind('closed', function () {
        $('.hamburger').removeClass('is-active');
    });

    var mixer = mixitup('#category-items');

    $(".categories li").click(function () {
        $(".categories li").removeClass("active");
        $(this).addClass("active");
    });

    $(".category-item h3").equalHeights();
    $(".category-item p").equalHeights();
    $(".product-items p").equalHeights();

});
