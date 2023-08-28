import { useState } from "react"
import { AiOutlineClose } from "react-icons/ai"

export default function ModuleOverview(props) {
    return (
        <div className="moduleoverview" style={{ position: "absolute", width: props.width, top: 180, left: 20 }}>
            <div class="container">
                <div class="container-left">
                    <div class="title title-left">Your Result</div>
                    <div class="circle">
                        <div class="circle-score">76</div>
                        <div class="circle-out-of">of 100</div>
                    </div>
                    <div class="container-left-bottom">
                        <div class="container-left-bottom-compliment">Great</div>
                        <div class="container-left-bottom-description">
                            <p>
                                You scored higher than 65% of the people who have taken these
                                tests.
                            </p>
                            
                        </div>
                    </div>
                </div>

                <div class="container-right-box"></div>
                <div class="container-right">
                    <div class="title title-right">
                        <p>{props.module} Summary</p>
                    </div>
                    <div class="stat-box">
                        <div class="stat stat-reaction">
                            <div class="stat-part-left red">Reaction
                            </div>
                            <div class="stat-part-right">
                                <span class="blue">80</span> / 100
                            </div>
                        </div>
                        <div class="stat stat-memory">
                            <div class="stat-part-left yellow">Memory
                            </div>
                            <div class="stat-part-right">
                                <span class="blue">92</span> / 100
                            </div>
                        </div>
                        <div class="stat stat-verbal">
                            <div class="stat-part-left green">Verbal
                            </div>
                            <div class="stat-part-right">
                                <span class="blue">61</span> / 100
                            </div>
                        </div>
                        <div class="stat stat-visual">
                            <div class="stat-part-left purple">Visual
                            </div>
                            <div class="stat-part-right">
                                <span class="blue">72</span> / 100
                            </div>
                        </div>
                    </div>
                    <button class="btn">Open Module</button>
                    <button onClick={()=>props.setWidth(0)} class="btn">Close</button>
                </div>
            </div>
        </div>
    )
}