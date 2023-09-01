import { Outlet, NavLink } from "react-router-dom";

export default function NavbarItem(props){
    return(
        <div className="navbaritem">
            <div className="navbaritem__container">
                {props.icon}
                <NavLink className="navbaritem__text" to={"/" + props.name}>{props.name}</NavLink>
            </div>
        </div>
    )
}