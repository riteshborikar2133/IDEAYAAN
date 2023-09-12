import React from 'react'
// import './Timer.css'
export default function Timer() {


    var countDownDate = new Date("sept 27, 2023 00:00:00").getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        if (distance < 0) {
            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
        }
    }, 1000)

    return (
        <>
            <div className="container">

                <div className="content">

                    <h1> Event <span>Count </span>down </h1>

                    <div className="launch-time" style={{textAlign:'center'}}>
                        <div className='ddmmyy'>
                            <p id="days">00: </p>
                            <span>days</span>
                        </div>
                        <div className='ddmmyy'>
                            <p id="hours">00: </p>
                            <span>hours</span>
                        </div>
                        <div className='ddmmyy' >
                            <p id="minutes">00: </p>
                            <span>minutes</span>
                        </div>
                        <div className='ddmmyy'>
                            <p id="seconds">00 </p>
                            <span>Seconds</span>
                        </div>

                    </div>
                </div>

                <img src="src\Compnents\Timer\images\rocket.png" className="rocket" />
            </div>
        </>
    )
}
