$(function() {

    $('#my-menu').mmenu({
        extensions: [ 'widescreen', 'effect-menu-slide', 'pagedim-black' ],
        navbar: {
            title: '<img src="img/logo-b@2x.png" alt="Тонусный зал Lis">'
        },
        offCanvas: {
            position  : 'left'
        }
    });

    var api = $('#my-menu').data('mmenu');
    api.bind('opened', function () {
        $('.hamburger').addClass('is-active');
    }).bind('closed', function () {
        $('.hamburger').removeClass('is-active');
    });

});
