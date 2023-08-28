export default function NavbarBottom(props){
    return(
        <a className="navbaritem__bottom">
            {props.icon}
            {props.name}
        </a>
    )
}