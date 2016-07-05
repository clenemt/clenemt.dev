(function () {
    'use strict';

    var url = location && location.pathname;
    if (url && url === '/') {
        var ie = document.addEventListener,
            addEvent = ie ? 'addEventListener' : 'attachEvent',
            prefix = ie ? '' : 'on';

        window[addEvent](prefix + 'touchstart', function (evt) {
            if (evt.target && event.target.className.indexOf('select-hide') !== -1) {
                evt.target.className = 'select-show';
            } else if (evt.target && event.target.className.indexOf('select-show') !== -1) {
                evt.target.className = 'select-hide';
            }
        });
    }
}());
