import React from 'react'
import { Wrapper } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Perfil from './img/perfil.png'

export const CvModern = () => {
    return (
        <Wrapper>
            <div className="main">
                <div className="left">
                    <div className="face">
                        <img src={Perfil} alt="" />
                    </div>
                    <div className="main-contact">
                        <div className="title-white">
                            <h1>Contact</h1>
                        </div>
                        <div className="list-contact">
                            <ul>
                                <li>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faGlobeAmericas} />
                                    </div>
                                    <div className="contact">
                                        <span>Sun suite, mañongo</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                    <div className="contact">
                                        <span>58 424 1071</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faHome} />   
                                    </div>
                                    <div className="contact">
                                        <span>bonchon@gmail.com</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="main-education-reference">
                        <div className="title-white">
                            <h1>EDUCATION</h1>
                        </div>
                        <div className="info-education">
                            <div className="education">
                                <div>
                                    <span>BLACK ADAM</span>
                                </div>
                                <div>
                                    <span>El Gran unico Hercules</span>
                                </div>
                                <div>
                                    <span>sAN ANDREAS</span>
                                </div>
                            </div>
                            <div className="education">
                                <div>
                                    <span>BLACK ADAM</span>
                                </div>
                                <div>
                                    <span>El Gran unico Hercules</span>
                                </div>
                                <div>
                                    <span>sAN ANDREAS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-education-reference">
                        <div className="title-white">
                            <h1>REFERENCES</h1>
                        </div>
                        <div className="info-education">
                            <div className="education">
                                <div>
                                    <span>BLACK ADAM</span>
                                </div>
                                <div>
                                    <span>El Gran unico Hercules</span>
                                </div>
                                <div>
                                    <span>sAN ANDREAS</span>
                                </div>
                            </div>
                            <div className="education">
                                <div>
                                    <span>BLACK ADAM</span>
                                </div>
                                <div>
                                    <span>El Gran unico Hercules</span>
                                </div>
                                <div>
                                    <span>sAN ANDREAS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="top">
                        <div className="name">
                            <h1>MICHAEL ANDREW</h1>
                        </div>
                        <div className="borde"></div>
                        <div className="profession">
                            <h3>CREATIVE DIRECTOR</h3>
                        </div>
                    </div>
                    <div className="main-profile">
                        <div className="title-profile">
                            <h1 className="mini-title">PROFILE</h1>
                        </div>
                        <div className="text-profile">
                            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur vero quia corrupti nisi hic eos quasi eius labore Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur vero quia corrupti nisi hic eos quasi eius labore aspernatur neque consequatur vitae commodi odit accusantium, ipsa expedita aliquam possimus porro reiciendis itaque sunt exercitationem. Nesciunt sunt exercitationem. Nesciunt</span>
                        </div>
                    </div>
                    <div className="main-experience">
                        <div className="title-profile">
                            <h1 className="mini-title">WORK EXPERIENCE</h1>
                        </div>
                        <div className="experience">
                            <div className="subtitle">
                                <strong>Adipisicing elit.</strong>
                            </div>
                            <div className="text-experience">
                                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio officia alias quod? Voluptates incidunt eaque et, veniam vitae quasi fugiat ut ab, inventore possimus magni ipsam aperiam eligendi similique nam!</span>
                            </div>
                        </div>
                        <div className="experience">
                            <div className="subtitle">
                                <strong>Adipisicing elit.</strong>
                            </div>
                            <div className="text-experience">
                                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio officia alias quod? Voluptates incidunt eaque et, veniam vitae quasi fugiat ut ab, inventore possimus magni ipsam aperiam eligendi similique nam!</span>
                            </div>
                        </div>
                        <div className="experience">
                            <div className="subtitle">
                                <strong>Adipisicing elit.</strong>
                            </div>
                            <div className="text-experience">
                                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio officia alias quod? Voluptates incidunt eaque et, veniam vitae quasi fugiat ut ab, inventore possimus magni ipsam aperiam eligendi similique nam!</span>
                            </div>
                        </div>
                    </div>
                    <div className="main-skills">
                        <div className="list">
                            <ul>
                                <li><span>Lorem, ipsum.</span></li>
                                <li><span>Lorem, ipsum.</span></li>
                            </ul>
                        </div>
                        <div className="list">
                            <ul>
                                <li><span>Lorem, ipsum.</span></li>
                                <li><span>Lorem, ipsum.</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}