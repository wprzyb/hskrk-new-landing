jQuery(function ($) {
    cheet('up up down down left right left right b a', function () {
        jQuery('#middle .container').addClass('makapakad');
	console.log('Makapaka!!')
        window.setTimeout(function() {
            jQuery('#middle .container').removeClass('makapakad');
        }, 3000);
    });
});
