import React, { useState } from 'react'
import './About.css'
export default function About() {
    return (
        <>
            <div className="body">
                <div className="head">
                    <div className="shwd">About us</div>
                    <h1>About Us</h1>
                </div>
                <div className="aboutus">
                    <h1>IDEAYAAN</h1>
                    <p>S.B Jain IEEE CSE Chapter present you the most awaited event for your ideas, for your creatvity, for your enterpreanuar mind...</p>
                    <h2>Ideathon</h2>
                </div>
                <br /><br />
                <section className="faq">
                <div className="head">
                    <div className="shwd">FAQ</div>
                    <h1>FAQ</h1>
                </div>
                    <div className="faq-box">
                        <h2>What is IEEE CS CHAPTER?</h2>
                        <div className="answer" >Computer Society (CS), is a technical and student chapter from IEEE,
                            it dedicates itself to make progress on the areas related to computing.</div>
                    </div>
                    <div className="faq-box">
                        <h2>Why go for IdeaYaan?</h2>
                        <div className="answer">Get to experience a near real-life feel of a corporate workplace.
                            Perform under the timeline, with a team, and apply skills.
                            Opportunity to learn new skills and tips from our mentors.
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
