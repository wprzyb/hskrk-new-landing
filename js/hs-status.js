    jQuery(document).ready(function() {
                function generateTextStatus (count) {
                        var result = '';
                        if ( count != 0 ) {
                                result = ' i przebywa w nim '
                                if (count == 1) { result += '1 osoba'; }
                                if (count >= 2 && count <= 4) { result += '' + str(count) + ' osoby'; }
                                if (count >= 5 ) { result += '' + str(count) + ' osób'; }
                        }
                        return result;
                }

                function getPeoplePresent() {
                        jQuery.getJSON("https://hskrk-spacemon.herokuapp.com", function(data) {
                                var count = parseInt(data.sensors.people_now_present[0].value);
                                var isActive = data.open;
                                var people = data.sensors.people_now_present[0].names;
                                var statusTooltip = jQuery('.hs-status');
                                var statusLiText = jQuery('.hs-status-li');

                                textStatus = 'Według naszych obliczeń HS jest ';
                                if( isActive || count > 0 ) {
                                        textStatus += 'otwarty';
                                        statusTooltip.removeClass('hs-closed');
                                        statusTooltip.addClass('hs-open');
                                        statusLiText.html('HS otwarty');
                                        if (count > 0) {
                                                textStatus += generateTextStatus(count);
                                                peopleList = ': ' + people.join(', ');

                                        }
                                        else {peopleList = '';}
                                }
                                else {
                                        textStatus += 'zamknięty';
                                        statusTooltip.removeClass('hs-open');
                                        statusTooltip.addClass('hs-closed');
                                        statusLiText.html('HS zamkniety');
                                        peopleList = '';
                                }
                                textStatus += '.';
                                statusTooltip.attr('data-original-title', textStatus + peopleList).tooltip('fixTitle');
                        }
                );
}
getPeoplePresent();
setTimeout(getPeoplePresent, 60000);
});

