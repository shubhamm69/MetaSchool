export default function ModuleCard(props) {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{
                display: "flex", height: "100%",
                marginTop: 10, alignItems: "center", flexDirection: "column"
            }}>
                <div className="doublecircle">
                    <div></div>
                </div>
                <div className="greenline" />
            </div>
            <div className="moduledetails">
                <p className="modulecardtitle">{props.title }</p>
                <ul>
                    <li>Assignment: 4/5 </li>
                    <li>Practice Quiz: </li>
                    <ul>
                        <li>Easy : 5 times</li>
                        <li>Medium : 3 times</li>
                        <li>Hard : 1 times</li>
                    </ul>
                    <li>Graded Quiz: </li>
                    <ul>
                        <li>Assesment 1: 78%</li>
                        <li>Assesment 2: 75%</li>
                        <li>Assesment 3: 87%</li>
                        <li>Assesment 4: 97%</li>
                    </ul>
                </ul>
            </div>

        </div>
    )
}