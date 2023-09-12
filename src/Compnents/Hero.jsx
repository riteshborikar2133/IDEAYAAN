import React, { useState, useEffect } from 'react'
import '../index.css'
export default function Hero() {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "September, 26, 2023";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="hero">
                <div className="blackscreen"></div>
                <div className="main">
                    <div className="cont">
                        <div className="text">
                            <p>Get Your Ideas ready for the most awaited event</p>
                            <h2>IDEAYAAN</h2>
                        <button className='regbtn'>Register Now </button>
                        </div>
                        <div className="img">
                            {/* <img src="https://drive.google.com/file/d/1GuwfdOADVN263un0d3hhgDa6ybjda40j/view?usp=drive_link" alt="rover" /> */}
                            {/* <img src="src\images\kisspng-rover-royalty-free-outer-space-space-rover-5b1000ee670ac6.3969716715277754704221.png"></img> */}
                            <div className="rover"></div>
                        </div>
                    </div>
                </div>
                <div className="timer">
                    <div className="content">
                        <h3> Event Count down </h3>

                        <div className="launch-time" style={{ textAlign: 'center' }}>
                            <div className='ddmmyy'>
                                <p id="hours">{days < 10 ? '0' + days : days} </p>
                                <span>days</span>
                            </div>
                            <div className='ddmmyy'>
                                <p id="hours">{hours < 10 ? '0' + hours : hours} </p>
                                <span>hours</span>
                            </div>
                            <div className='ddmmyy' >
                                <p id="minutes">{minutes < 10 ? '0' + minutes : minutes} </p>
                                <span>minutes</span>
                            </div>
                            <div className='ddmmyy'>
                                <p id="seconds">{seconds < 10 ? '0' + seconds : seconds} </p>
                                <span>Seconds</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
