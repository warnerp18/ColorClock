window.onload = app;

function app() {
    "use strict";

    function count() {
        var d = new Date();
        var hh = d.getHours(),
            mm = d.getMinutes(),
            ss = d.getSeconds();

        var time = hh + ":" + mm + ":" + ss;
        document.write(time);

        span.textContent = time.join(":")
    }



    var spann = document.querySelector('span');
    var h1 = document.querySelector('h1')

    setInterval(count, 1000);
}
