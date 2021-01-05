import React from 'react'
import logo from '../../img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const HeaderMobile = () =>{
    return(
        <header className="mobile-header">
            <nav>
                <div className="logo">
                    <a href="#"><img src={logo} alt="" /></a>
                </div>
                <div className="menu">
                    <a href="#">
                    <FontAwesomeIcon icon={faBars} />
                        
                       
                    </a>
                    <div className="submenu-header-mobile">
                        <div className="part-header-mobile">
                            <p>RESUME</p>
                            <div className="sub-menu-container">
                                <a href="#">Resume Templates</a>
                            </div>
                            <div className="sub-menu-container"> 
                                <a href="#">Resume Examples</a>
                            </div>
                            <div className="sub-menu-container">
                                <a href="#">Resume Builder</a>
                            </div>
                            <div className="sub-menu-container">
                                <a href="#">Resume Writing</a>
                            </div>
                        </div>
                        <div className="part-header-mobile">
                            <div className="sub-menu-container">
                                <a href="#" className="title">COVER LETTER </a>
                            </div>
                            <div className="sub-menu-container">
                                <a href="#">Cover Letter Templates</a>
                            </div>
                            <div className="sub-menu-container">
                                <a href="#">Cover Letter Examples</a>
                            </div>
                            <div className="sub-menu-container">
                                <a href="#">Cover Letter Builder</a>
                            </div>
                            <div className="sub-menu-container">
                                <a href="#">Cover Letter Writing</a>
                            </div>
                            <div className="sub-menu-container">
                                <a href="#">My Account <FontAwesomeIcon icon={faAngleDown} /></a>
                            </div>
                            
                        </div>
                        <div className="part-header-mobile-down">
                            <div className="sub-menu-container">
                                <a href="#">About Us</a>
                            </div>
                            <div className="sub-menu-container">
                                <a href="#">FAQ</a>
                            </div>
                            <div className="sub-menu-container">
                                <a href="#">Blog</a>
                            </div>
                            <div className="sub-menu-container">
                                <a href="#">Affiliates</a>
                            </div>
                            <div className="sub-menu-container">
                                <a href="#">Contact Us</a>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}