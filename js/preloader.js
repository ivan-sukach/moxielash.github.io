setTimeout(function () {
    $('#preloader-container').delay(500).fadeOut('slow');
    setTimeout(function () {
        $('body').css('overflow', 'auto');
    }, 300);
}, 300)
