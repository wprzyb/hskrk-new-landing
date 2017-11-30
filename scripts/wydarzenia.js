jQuery(document).ready(function($) {
	
    var highest = -1;

    $('.hs-events').each(function() {
      highest = highest > $('.hs-events').height() ? highest : $('.hs-events').height();
    });

    $('.hs-events').each(function() {
      $('.hs-events').height(highest);
    });

});
