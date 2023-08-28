import "./index.css";

export default function StudentCard(props){
    return(
        <div className="studentcard">
            <div>
                <p>Shivam12345</p>
                <p>Attendance: 50% (5 out of 10 class)</p>
            </div>
            <div>
                <p>Module: 4/5</p>
                <p>Progress: 55%</p>
            </div>
        </div>
    )
}