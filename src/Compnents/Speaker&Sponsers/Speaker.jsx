import React from 'react'
import './Speaker.css'
export default function Speaker() {
    return (
        <>
            <div className="body">
                <div class="speaker-sec">
                    <div class="speakers">
                        <div class="center">
                            <h1>Our Community Speakers</h1>
                            <h1 className='shd'>Our Community Speakers</h1>
                        </div>
                        <div class="comunity">
                            <div class="scrol">
                                <div class="expert">
                                    <img src="/pro1.webp" alt="profile" />
                                    <h3>Ema Irnik</h3>
                                    <p>Pyhton & ML Expert</p>
                                    <div class="media">
                                        <a href=""> <i class="fa-brands fa-facebook-f"></i> </a>
                                        <a href=""> <i class="fa-brands fa-instagram"></i> </a>
                                        <a href=""> <i class="fa-brands fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="scrol">
                                <div class="expert">
                                    <img src="/pro2.webp" alt="profile" />
                                    <h3>John</h3>
                                    <p>Data Analysis Experts</p>
                                    <div class="media">
                                        <a href=""> <i class="fa-brands fa-facebook-f"></i> </a>
                                        <a href=""> <i class="fa-brands fa-instagram"></i> </a>
                                        <a href=""> <i class="fa-brands fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="scrol">
                                <div class="expert">
                                    <img src="/pro3.webp" alt="profile" />
                                    <h3>Aman</h3>
                                    <p>Full Stack Expert</p>
                                    <div class="media">
                                        <a href=""> <i class="fa-brands fa-facebook-f"></i> </a>
                                        <a href=""> <i class="fa-brands fa-instagram"></i> </a>
                                        <a href=""> <i class="fa-brands fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="scrol">
                                <div class="expert">
                                    <img src="/pro4.webp" alt="profile" />
                                    <h3>Jennifer</h3>
                                    <p>UI & Design Expert</p>
                                    <div class="media">
                                        <a href=""> <i class="fa-brands fa-facebook-f"></i> </a>
                                        <a href=""> <i class="fa-brands fa-instagram"></i> </a>
                                        <a href=""> <i class="fa-brands fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sponsers-sec">
                    <div class="center">
                        <h1>Featured Sponsers</h1>
                        <h1 className='shd'>Featured Sponsers</h1>
                    </div>
                    <div class="sponsers">
                        <img src='/trust (1).png' alt="sponsers" />
                        <img src="/trust (2).png" alt="sponsers" />

                        <img src="/trust (3).png" alt="sponsers" />
                        <img src="/trust (4).png" alt="sponsers" />
                        <img src="/trust (5).png" alt="sponsers" />
                    </div>
                </div>
            </div>
        </>
    )
}
