import React from 'react'
import logo from '../../img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faRoad } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Wrapper } from './styled'

export const HeaderMobile = () =>{
    return(
        <Wrapper>
            <nav>
                <div className="logo">
                    <a href="#"><img src={logo} alt="" /></a>
                </div>
                <div className="menu">
                    <a href="#">
                    <FontAwesomeIcon icon={faBars} />
                        
                       
                    </a>
                    <div className="submenu-header-mobile">
                        <div className="part-top">
                            <div className="texto"><a href="#">Resume</a> </div>
                            <div className="texto"><a href="#">Resume Templates</a> </div>
                            <div className="texto"><a href="#">Resume Examples</a> </div>
                            <div className="texto"><a href="#">Resume Builder</a> </div>
                            <div className="texto"><a href="#">Resume Writing</a> </div>
                        </div>
                        <div className="part-middle">
                            <div className="texto"><a href="#">Cover Letter</a> </div>
                            <div className="texto"><a href="#">Cover Letter Templates</a> </div>
                            <div className="texto"><a href="#"> Cover Letter Examples</a></div>
                            <div className="texto"><a href="#">Cover Letter Builder</a> </div>
                            <div className="texto"><a href="#">Cover Letter Writing</a> </div>
                        </div>
                        <div className="action">
                            <div className="maker">
                                <a href="#">Create My Resume</a>
                            </div>
                            <div className="maker">
                                <a href="#">Log In</a>
                            </div>
                        </div>
                        <div className="part-bottom">
                            <div className="texto"><a href="#">About Us</a> </div>
                            <div className="texto"><a href="#">FAQ</a> </div>
                            <div className="texto"><a href="#">Blog</a> </div>
                            <div className="texto"><a href="#">Affiliates</a> </div>
                            <div className="texto"><a href="#">Contact Us</a> </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Wrapper>
    )
}