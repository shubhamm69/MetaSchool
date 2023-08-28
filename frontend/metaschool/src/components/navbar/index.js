import NavbarBottom from "./NavbarBottom";
import NavbarIcon from "./NavbarIcon";
import NavbarItem from "./NavbarItem";

import { AiFillHome, AiFillRead, AiFillSchedule, AiFillSetting, AiOutlineLogout } from "react-icons/ai";

export default function Navbar(props) {
    return (
        <div className="navbar">
            <div>
                <NavbarIcon />
                <NavbarItem
                    name="Home" 
                    icon={<AiFillHome color="#444444" fontSize={20} />}/>
                <NavbarItem 
                    icon={<AiFillRead color="#444444" fontSize={20} />}
                    name="Courses" />
                <NavbarItem 
                    icon={<AiFillSchedule color="#444444" fontSize={20} />}
                    name="Assignment" />
                <NavbarItem 
                    icon={<AiFillHome color="#444444" fontSize={20} />}
                    name="Test" />
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