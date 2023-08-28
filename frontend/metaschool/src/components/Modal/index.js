export default function Modal(props) {
    return (
        <div className="modal">
            <div>
                <div className="modalHeader">
                    {props.title}
                </div>
                {props.children}
            </div>
        </div>
    )
}