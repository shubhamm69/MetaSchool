export default function Modal(props) {
    return (
        <div className="modal" style={{...props.style}}>
            <div>
                <div className="modalHeader">
                    {props.title}
                </div>
                {props.children}
            </div>
        </div>
    )
}