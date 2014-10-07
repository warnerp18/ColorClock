window.onload = app;

function app() {
    "use strict";

    function handleSecond() { //'handleSecond' because this is what is going to be handle last/2nd after the code is all done
        try {
            count(); //this will try the function called 'count'
        } catch (e) { // e is the name we are giving for an error warning
            console.log("error:", e, e.stack); // if there is an error an "error" message will pop up and tell you what line the error is on
        }
    }

    function count() { //this function will have only one purpose: to show time on the websiite
        var d = new Date(); //this variable will show us date, time, and timezone
        var parts = ['getHours', 'getMinutes', 'getSeconds']; //this var uses an array that we will use to he hh mm ss
        var time = parts.map(function(getTime) { //var time will take each individual item from the array above (getHours, getMinutes, getSeconds) and put it in the var num below 
            var num = d[getTime](); // says to get the hours of the date, the minutes of the date, and seconds of the date 
            return num < 10 ? "0" + num : num; // if the hh, mm, ss is less than 10 (0-9) add a "0"; if not, leave as is.
        });

        div.textContent = time.join(":"); //span is a var listed @ bottom. Tells JS to join time with ':' in between each and put it into the span tags of my html.
        body.style['background-color'] =
            "rgb(" +
            convertTimeToRGB(time).join(',') + //telling html to associate background color to time. using hh:mm:ss and converting to rgb(Red, Blue, Green)
        ")";
    }

    function convertTimeToRGB(times) { //this function will convert the time to Red, Green, Blue (hh, mm, ss will become RGB so color coresponds with time)
        if (!(times instanceof Array) || times.length !== 3) { //if var times is not an array or if the lenght is not equal to 3...What is Times? Were is it defined?
            throw new Error("times should be an array of 3 numbers"); //if above is true then an error message will be displayed with string
        }
        var ranges = [24, 60, 60], //ranges will be used in function below. 24 represents 24 hours, 60 = 60 minutes and 60=60 seconds
            result = []; // not sure about this one.

        times.forEach(function(time, index) {
            result[index] = ~~ (time / ranges[index] * 255); //unsure about all these. where is index defined? what does result mean?
        });

        return result;
    }

    var div = document.querySelector('div');
    var body = document.querySelector('body');

    setInterval(handleSecond, 1000);


}
