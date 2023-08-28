export default function NavbarItem(props){
    return(
        <div className="navbaritem">
            <div className="navbaritem__container">
                {props.icon}
                <a className="navbaritem__text">{props.name}</a>
            </div>
        </div>
    )
}