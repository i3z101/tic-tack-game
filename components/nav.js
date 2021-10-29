import React, { useEffect, useState } from "react";
import {FaGamepad} from 'react-icons/fa';
const Nav = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(()=>{
            if(window.screen.width < 735) {
                setIsMobile(true)
            }
        }, [isMobile])
    return <nav className="nav_container">
        <div className="slide_left" >
            <FaGamepad size={isMobile ? 40 : 50} color="yellow" />
        </div>
        <div className="wavy_line" style={{marginBottom: 0}}></div>
    </nav>
}

export default Nav;