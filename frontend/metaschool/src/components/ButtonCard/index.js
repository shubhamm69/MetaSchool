import "./index.css"

export default function ButtonCard(props){
    return(
        <div className='buttoncard'>
            {props.icon}
            <p>{props.title}</p>
        </div>
    )
}