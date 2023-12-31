import React, {useState} from 'react'

//imported icons========>
import {SiConsul} from 'react-icons/si'
import { BsPhoneVibrate } from "react-icons/bs"
import { AiOutlineGlobal } from "react-icons/ai"
import { CgMenuGridO } from "react-icons/cg"

//imported images========>
import logo from '../../assets/logo.png'

const Navbar = () => {

//Let us remove the NavBar in the small width screens ==>
const [active, setActive] = useState('navBarMenu')
const showNavBar = ()=>{
    setActive('navBarMenu showNavBar')
}

const removeNavBar = ()=>{
    setActive('navBarMenu')
}

//Let us add a background color to the second Navbar ==>
const [noBg, addBg] = useState('navBarTwo')

const addBgColor = ()=>{
    if(window.scrollY >= 10){
        addBg('navBarTwo navbar_With_Bg')
    }else{
        addBg('navBarTwo')
    }
}
window.addEventListener('scroll', addBgColor)


    return(
        <div className='navBar flex'>
        
            <div className={noBg}>
                
                <div className="logoDiv">
                    <img src={logo} className='Logo'/>
                    <h6>INDONESIA - JAPAN</h6>
                </div>

                <div className={active}>
                    <ul className="menu flex">
                        <li onClick={removeNavBar} className="listItem">Home</li>
                        <li onClick={removeNavBar} className="listItem">About</li>
                        <li onClick={removeNavBar} className="listItem">Offers</li>
                        <li onClick={removeNavBar} className="listItem">Seats</li>
                        <li onClick={removeNavBar} className="listItem">Destination</li>
                        <li>
                            <button onClick={removeNavBar} className='btn flex btnOne'>Contact</button>
                        </li>
                    </ul>
                </div>
                    
                <div onClick={showNavBar} className="toggleIcon">
                    <CgMenuGridO className='icoN'/>
                </div>

            </div>

        </div>
    )
}

export default Navbar