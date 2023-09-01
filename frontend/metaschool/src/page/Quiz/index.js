import ProgressBar from '@ramonak/react-progress-bar'
import { useEffect, useState } from 'react'
import { AiOutlineClockCircle, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import Lottie from 'react-lottie';
import Modal from '../../components/Modal';
import * as congo from './congo.json'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: congo,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};


export default function Quiz(props) {
    const [progress, setProgress] = useState(10);
    const [question, setQuestion] = useState(3);
    const [modal, setModal] = useState(false);
    useEffect(() => {
        const counter = setTimeout(() => {
            setProgress(progress - 0.1);
        }, 100);
        if(question > 3){
            setProgress(0);
            setQuestion(3);
            setModal(true);
        }
        if(progress <= 0){
            setQuestion(question+1);
            setProgress(100);
        }

        return () => {
            clearTimeout(counter);
        }
    })
    return (
        <div className="quiz" style={{minHeight:"100vh", width: "100%", background: "#222" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginRight: 20, marginLeft: 20, alignItems: "center" }}>
                <h1>Quiz</h1>
                <div style={{ display: "flex", alignItems: "center", background: "#109f34", width: 120, paddingLeft: 20, paddingRight: 20, borderRadius: 15 }}>
                    <AiOutlineClockCircle color='white' fontSize={50} />
                    <h2>{Math.floor(progress) + " s"}</h2>
                </div>
            </div>
            <div className='quizcontainer'>
                <ProgressBar isLabelVisible={false} bgColor='#109f34' completed={progress} maxCompleted={100} />
                <h3>Question {question} of 3: Hello Mister how do you do?</h3>
                <McqChoice />
                <McqChoice />
                <McqChoice />
                <McqChoice />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div className='quizbutton'>
                        <AiOutlineLeft color="white" style={{ marginRight: 20, alignSelf: "center" }} fontSize={20} />
                        Back
                    </div>
                    <div className='quizbutton' style={{ background: "#109f34" }}>
                        Next
                        <AiOutlineRight color="white" style={{ marginLeft: 20, alignSelf: "center" }} fontSize={20} />
                    </div>
                </div>
            </div>
            {modal && <Modal title="Congratulations 🎉🎉🎉" style={{background: "#33333380"}}>
                <p>Quiz 1 completed</p>
            <Lottie options={defaultOptions}
              height={400}
              width={300}/>
                <p>Great Job! You correctly answered 6 out of 10 question, <br/>which beats upto 80% of students. <br/> <strong>You have successfully earned The Quiz Master Badge.</strong></p>
                    <div className='quizbutton' style={{ background: "#109f34", width:"90%" }}>
                        Go to Course
                        <AiOutlineRight color="white" style={{ marginLeft: 5, alignSelf: "center" }} fontSize={20} />
                    </div>
            </Modal>}

        </div>
    )
}

function McqChoice(props) {
    return (
        <div className='mcqchoice'>
            <div className='circleindicator'></div>
            <p>Teri Maa</p>
        </div>
    )
}
