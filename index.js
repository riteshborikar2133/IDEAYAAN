var countDownDate = new Date("sept 25, 2023 00:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //   console.log(seconds.length())

    if (seconds.toString().length != 1) {
        document.getElementById("seconds").innerHTML = seconds;
    } else {
        document.getElementById("seconds").innerHTML = "0" + seconds;
    }

    if (minutes.toString().length != 1) {
        document.getElementById("minutes").innerHTML = minutes + ": ";
    } else {
        document.getElementById("minutes").innerHTML = "0" + minutes + ": ";
    }

    if (hours.toString().length != 1) {
        document.getElementById("hours").innerHTML = hours + ": ";
    } else {
        document.getElementById("hours").innerHTML = "0" + hours + ": ";
    }

    if (days.toString().length != 1) {
        document.getElementById("days").innerHTML = days + ": ";
    } else {
        document.getElementById("days").innerHTML = "0" + days + ": ";
    }


    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00:";
        document.getElementById("hours").innerHTML = "00:";
        document.getElementById("minutes").innerHTML = "00:";
        document.getElementById("seconds").innerHTML = "00:";
    }
}, 1000);

