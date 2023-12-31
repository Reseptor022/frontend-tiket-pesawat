import React from 'react'

//imported Images===>
import Logo from'../../assets/logo.png'

//imported logo===>
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";


const Footer = () => {
  return (
    <div className='footer'>

      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className="logoDiv">
            <img src={Logo} className='Logo' />
          </div>
          <p>Pikiranmu harus lebih kuat dari perasaanmu, terbang!</p>
          <div className="socialIcon flex">
          <TiSocialFacebookCircular className='icon'/>
          <TiSocialInstagramCircular className='icon'/>
          <TiSocialTwitter className='icon'/>
          </div>
        </div>

      <div className="footerLinks">
        <span className="linkTitle">Information</span>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Explore</a>
        </li>
        <li>
          <a href="">Travel</a>
        </li>
      </div>

      <div className="footerLinks">
        <span className="linkTitle">Quick Guide</span>
        <li>
          <a href="">FAQ</a>
        </li>
        <li>
          <a href="">How To</a>
        </li>
        <li>
          <a href="">Route Map</a>
        </li>
      </div>

      </div>

      <div className="copyRightDiv flex">
        <p>Courtesy Design | Developed by <a href="https://
        emailto-isratech8@outlook.com" target='_blank'>IsraTech</a></p>
      </div>
      
    </div>
  )
}

export default Footer