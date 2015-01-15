// ==UserScript==
// @id             addCommas@yak.army
// @name           addCommas
// @version        1.1
// @namespace      addCommas
// @author         Craig <craig@yak.army>
// @description    Adds commas to RS Adventure Log's XP activities, to increase readability.
// @include        http://services.runescape.com/m=adventurers-log/*
// @run-at         document-end
// ==/UserScript==

$('.activity__title,.activity__meta,.event__title').each(function () {

    var commas = addCommas($(this)[0].innerHTML);
    $(this).html(commas);

});

function addCommas(str) {
    str += '';
    x = str.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}