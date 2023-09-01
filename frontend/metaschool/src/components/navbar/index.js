import NavbarBottom from "./NavbarBottom";
import NavbarIcon from "./NavbarIcon";
import NavbarItem from "./NavbarItem";
import { Outlet, Link } from "react-router-dom";

import { AiFillHome, AiFillRead, AiFillSchedule, AiFillSetting, AiOutlineLogout } from "react-icons/ai";

export default function Navbar(props) {
    return (
        <div className="navbar">
            <div>
                <NavbarIcon />
                <NavbarItem
                    name="Courses" 
                    icon={<AiFillHome color="#444444" fontSize={20} />}/>
                <NavbarItem 
                    icon={<AiFillRead color="#444444" fontSize={20} />}
                    name="Course" />
                <NavbarItem 
                    icon={<AiFillSchedule color="#444444" fontSize={20} />}
                    name="Profile" />
                <NavbarItem 
                    icon={<AiFillHome color="#444444" fontSize={20} />}
                    name="Teacher" />
            </div>

            <div>
                <NavbarBottom name="Settings" 
                icon={<AiFillSetting color="#888" fontSize={20} style={{padding: 5}}/>} />
                <NavbarBottom name="Logout" 
                icon={<AiOutlineLogout color="#888" fontSize={20} style={{padding: 5}}/>}/>
            </div>
        </div>
    )
}