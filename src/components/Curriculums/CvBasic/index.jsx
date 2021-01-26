import React from 'react'
import { Wrapper } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export const CvBasic = () => {
    return (
        <Wrapper>
            <div className="top">
                <div className="container-top">
                    <div className="title-name">
                        <h1>VANE VBBl</h1>
                    </div>
                    <div className="especialidad">
                        <h1>GRAPHIC DESIGNER</h1>
                    </div>
                </div>
                <div className="container-contact">
                    <ul>
                        <li>
                            <div className="line-contact">
                                <div className="icon"><p><FontAwesomeIcon icon={faGlobeAmericas} /></p></div>
                                <div className="info"><span>+58 241-8241071</span></div>
                            </div>
                        </li>
                        <li>
                            <div className="line-contact">
                                <div className="icon"><p><FontAwesomeIcon icon={faEnvelope} /></p></div>
                                <div className="info"><span>bonchon@107.1@gmail.com</span></div>
                            </div>
                        </li>
                        <li>
                            <div className="line-contact">
                                <div className="icon"><p><FontAwesomeIcon icon={faHome} /></p></div>
                                <div className="info"><span>Sun suite, mañongo</span></div>
                            </div>
                        </li>
                        <li>
                            <div className="line-contact">
                                <div className="icon"><p><FontAwesomeIcon icon={faUser} /></p></div>
                                <div className="info"><span>Bonchonbonchon</span></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container-info">
                <div className="container-education">
                    <div className="title-education">
                        <h1 className="mini-title">EDUCATION</h1>
                    </div>
                    <div className="date">
                        <ul>
                            <li>
                                <div className="subtitle">
                                    <div className="info">
                                        <span><strong>ENTER YOUT MAJOR</strong></span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="subtitle">
                                    <div className="info">
                                        <span> Name of University</span>
                                    </div>                             
                                </div>
                            </li>
                            <li>
                                <div className="subtitle">
                                    <div className="info">
                                        <span>2005 - 2007</span>
                                    </div>                                           
                                </div>
                            </li>   
                        </ul>
                        <ul>
                            <li>
                                <div className="subtitle">
                                    <div className="info">
                                        <span><strong>ENTER YOUR DEGREE</strong></span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="subtitle">
                                    <div className="info">
                                        <span>Name of University</span>
                                    </div>                             
                                </div>
                            </li>
                            <li>
                                <div className="subtitle">
                                    <div className="info">
                                        <span> 2005 - 2007</span>
                                    </div>                                           
                                </div>
                            </li>   
                        </ul>
                    </div>
                    <div className="borde"></div>
                    <div className="date">
                        <ul>
                            <li>
                                <div className="subtitle">
                                    <div className="info">
                                        <h1 className="mini-title">SKILLS</h1>
                                    </div>
                                </div>
                            </li>
                            <li><span> <strong> Lorem, ipsum.</strong></span></li>
                            <li><span>Lorem, ipsum.</span></li>
                            <li><span>Lorem, ipsum.</span></li>
                            <li><span>Lorem.</span></li>
                            <li><span>Lorem, ipsum.</span></li>
                            <li><span>Lorem, ipsum.</span></li>
                            <li><span>Lorem, ipsum.</span></li>
                            <li><span>Lorem.</span></li>
                            <li><span>Lorem, ipsum.</span></li>
                            <li><span>Lorem, ipsum.</span></li>
                            <li><span>Lorem, ipsum.</span></li>
                        </ul>
                        
                    </div>
                    <div className="borde"></div>

                    <div className="awards">
                        <h1 className="mini-title">AWARDS</h1>
                    </div>
                    <div className="date">
                        <ul>
                            <li>
                                <div className="subtitle">
                                    <div className="info">
                                        <span><strong>Award received</strong></span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="subtitle">
                                    <div className="info">
                                        <span> Organization</span>
                                    </div>                             
                                </div>
                            </li>
                            <li>
                                <div className="subtitle">
                                    <div className="info">
                                        <span>2015</span>
                                    </div>                                           
                                </div>
                            </li>   
                        </ul>
                    </div>
                </div>
            
                <div className="profile">
                    <div className="title-profile">
                        <h1 className="mini-title">PROFILE</h1>
                    </div>
                    <div className="info-profile">
                        <span>                            
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur vero quia corrupti nisi 
                            hic eos quasi eius labore aspernatur neque consequatur vitae commodi odit accusantium, 
                            ipsa expedita aliquam possimus porro reiciendis itaque sunt exercitationem. Nesciunt harum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, odit! Lorem ipsum dolor sit amet titi caca naka cuaca.
                        </span>
                    </div>

                    <div className="title-profile">
                        <h1 className="mini-title">WORK EXPERIENCE</h1>
                    </div>
                    <div className="info-profile">
                        <span>                            
                            <strong> Lorem ipsum dolor sit amet consectetur, adipisicing elit. </strong>
                        </span>
                        <span>Lorem ipsum dolor </span>
                        <span> Lorem ipsum Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugit ipsum vero, tempore labore facilis blanditiis excepturi cupiditate, sunt, impedit assumenda vel magnam at corrupti. adipisicing elit. Eligendi, debitis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quam minus aspernatur natus, pariatur ipsam?  dolor sit amet consectetur, adipisicing elit. Praesentium reiciendis odio eligendi laborum provident eveniet nam repudiandae nobis dolorem.</span>
                        <span>
                            <ul>
                                <li>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                                </li>
                                <li>
                                    <span>Lorem ipsum dolor sit amet consectetur </span>
                                </li>
                                <li>
                                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                                </li>
                            </ul>
                        </span>
                    </div>
                    
                    <div className="info-profile">
                        <span>                            
                            <strong> Lorem ipsum dolor sit amet consectetur, adipisicing elit. </strong>
                        </span>
                        <span>Lorem ipsum dolor </span>
                        <span> Lorem ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, debitis?Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente at deserunt debitis tempore voluptates, totam natus illo eos quaerat vel fuga distinctio est vero odit in modi sequi corrupti dignissimos! adipisicing elit. Provident, molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quam minus aspernatur natus, pariatur ipsam?  dolor sit amet consectetur, adipisicing elit. Praesentium reiciendis odio eligendi laborum provident eveniet nam repudiandae nobis dolorem.</span>
                        <span>
                            <ul>
                                <li>
                                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                                </li>
                                <li>
                                    <span>Lorem ipsum dolor sit amet consectetur </span>
                                </li>
                                <li>
                                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</span>
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>       
            </div>
        </Wrapper>
    )
}