import React, { useEffect, useState } from "react";
import {AiOutlineClose} from 'react-icons/ai'
import {BiCircle} from 'react-icons/bi';
import {CgHashtag} from 'react-icons/cg';
import {BsArrowDownRight} from 'react-icons/bs';

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(()=>{
        if(window.screen.width < 735) {
            setIsMobile(true)
        }
    }, [isMobile])

    return <header className= "header_container">
        <p className="header_title">PLAY NOW !</p>
        <section className="header_icons_container">
        <div className="grid_icon animate__backInLeft">
            <CgHashtag opacity={0.5} color="#EEEEEE" size={isMobile ? 80 : 200} />
            <AiOutlineClose className="x_icon" color="white" size={isMobile ? 14 : 26} />
            <AiOutlineClose className="x_icon" color="white" style={{top:isMobile ? '3.4rem' : '8.8em', left:isMobile ? '0.7rem' : '2.1rem'}} size={isMobile ? 14 : 26} />
            <BsArrowDownRight className="x_icon" style={{top:isMobile ? '0.5rem' : '1rem', left:isMobile ? '0.5rem' :'1rem'}} color="white" size={isMobile ? 30 : 80} />
            <BiCircle className="x_icon" color="white" style={{top:isMobile ? '2rem' : '5.4rem', left:isMobile ? '2.05rem' :'5.4rem'}} size={isMobile ? 14 : 26} />
        </div>
        <div className="grid_icon animate__bounceInUp" style={{left:isMobile ? '17rem' : '80rem', top:isMobile ? '2rem' : '-5rem'}}>
            <p className="win_text">WIN!</p>
            <CgHashtag opacity={0.5} color="#EEEEEE" size={isMobile ? 80 : 200}/>
            <AiOutlineClose className="x_icon" color="white" style={{top: isMobile ? '0.7rem' : ''}} size={isMobile ? 14 : 26} />
            <AiOutlineClose className="x_icon" color="white" style={{top:isMobile ? '2rem' : '8.8em', left:isMobile ? '2.05rem' : '2.1rem'}} size={isMobile ? 14 : 26} />
            <AiOutlineClose className="x_icon" color="white" style={{top: isMobile? '3.3rem' : '5.4rem', left:isMobile ? '0.8rem' : '5.4rem'}} size={isMobile ? 14 : 26} />
        </div>
            <div className="single_icon">
                <AiOutlineClose color="white" size={80} />
            </div>
            <div className="single_icon">
                <BiCircle color="white" size={80} />
            </div>
        </section>
    </header>
}


export default Header