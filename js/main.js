// Fireflies
$.firefly({
    on: 'header',
    color: '#fff',
    minPixel: 1,
    maxPixel: 3,
    total: 65
});

// Smooth scrolling
$('a[href^="#"]').click(function () {
    var anchor = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $('[name="' + anchor.substr(1) + '"]').offset().top
    }, 750, "swing", function () {
        window.location.href = anchor;
    });

    return false;
});