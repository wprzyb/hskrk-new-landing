jQuery(function ($) {
    var przelewy24 = $('.przelewy24'),
        input = przelewy24.find('input'),
        link = przelewy24.find('a');

    function getFormattedMoney() {
        var value = input.val();
        if (value.indexOf('.') === -1) {
            return (value  ? value : '') + '00';
        } else {
            value = value.split('.');
            if (value[1].length > 2) {
                value[1] = value[1].substring(0, 2);
            }
            return value.join('');
        }
    }

    input.show()
        .one('click', function () {
            this.value = '';
        })
        .on('keyup', function () {
            var przelewyLink = [
                'https://sklep.przelewy24.pl/zakup.php?z24_id_sprzedawcy=23975',
                'z24_kwota=2000',
                'z24_currency=pln',
                'z24_nazwa=Darowizna',
                'z24_language=pl',
                'k24_kraj=PL',
                'z24_crc=839bf1c2'
            ];
            przelewyLink[1] = 'z24_kwota=' + getFormattedMoney();
            link.attr('href', przelewyLink.join('&'));
        });

        $('.money-input').inputBlocker({
            canPaste: true,
            allowedRe: /[\d.]/,
            trimOnPaste: true
        });
});