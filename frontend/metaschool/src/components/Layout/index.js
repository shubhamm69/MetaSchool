import Progress from "../Progressbar";

import { AiOutlineArrowRight } from 'react-icons/ai'

export default function Layout(props) {
    return (
        <div className="layout">
            <header className="header">
                <h1>{props.title}</h1>
            </header>
            {props.children}
            {/* <Progress />
            <section className="createclass">
<h3>Add course timing</h3> 

                Monday class timing:
                <input type="time" />
                Tuesday class timing:
                <input type="time" />
                Wednesday class timing:
                <input type="time" />
                Thursday class timing:
                <input type="time" />
                Friday class timing:
                <input type="time" /> */}
            {/* </section> */}
        </div>
    )
}


function Page1(props) {
    return (
        <section className="createclass">
            <h3>Add course name</h3> 
            <input type="text" placeholder="eg: Mathematics, Social Science, English" />
            <h3>Description</h3>
            <textarea rows={5} type="text" placeholder="Give a brief description about the course" />
            <h3>Contents</h3>
            <div>
                <div>

                    <h5>Enter number of Lessons: </h5>
                    <select >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                    </select>
                </div>
                <div>

                    <h5>End Date: </h5>
                    <input type="date" />
                </div>
                <div>
                    <h5>Minimum marks to pass: </h5>
                    <input type="number" placeholder="eg: 70" />
                </div>
                <div>
                    <h5>Classes will happen on: </h5>
                    <div style={{display:"flex"}}>

                    <ClickBox name="Mo" /> 
                    <ClickBox name="Tu" /> 
                    <ClickBox name="We" /> 
                    <ClickBox name="Th" /> 
                    <ClickBox name="Fr" /> 
                    <ClickBox name="Sa" /> 
                    <ClickBox name="Su" /> 
                    </div>
                </div>
                <a className="nextbutton">
                    <AiOutlineArrowRight fontSize={36} color="white" />
                </a>
            </div>
        </section>
    )
}

function Page2(props){
    return (
        <>
        <section className="createclass">
                <h3>Add Students</h3>
                <input placeholder="Enter comma separated emails, eg: abc@gmail.com, cdf@gmail.com" type="text" />
                <h3>Autodetect email from CSV file</h3>
                <div>
                    <input placeholder="Enter comma separated emails, eg: abc@gmail.com, cdf@gmail.com" type="file" />
                </div>
                <h3>Student list</h3>
                <div>
                    
                </div>
            </section>
            </>
    )
}

function ClickBox(props){
    return (
        <div className="clickbox">
            {props.name}
        </div>
    )
}