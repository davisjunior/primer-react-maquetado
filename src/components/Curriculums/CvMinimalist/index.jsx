import React from 'react'
import { Wrapper } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Perfil from './img/perfil.png'

export const CvMinimalist = () => {
    return (
        <Wrapper>
            <div className="main">
                <div className="left">
                    <div className="face">
                        <img src={Perfil} alt="" />
                    </div>
                    <div className="main-contact">
                        <div className="title-white">
                            <h1 className="mini-title-white">CONTACT</h1>
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
                                <li>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                    <div className="contact">
                                        <span>58 424 1071</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="main-education-reference">
                        <div className="title-white">
                            <h1 className="mini-title-white ">EDUCATION</h1>
                        </div>
                        <div className="info-education">
                            <div className="education">
                                <div>
                                    <span> <strong> BLACkk ADAM </strong></span>
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
                                    <span><strong> BLACkk ADAM </strong></span>
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
                            <h1 className="mini-title-white">EXPERTISE</h1>
                        </div>
                        <div className="info-education">
                            <div className="education">
                                
                                <div>
                                    <span>Lorem ipsum dolor sit.</span>
                                </div>
                                <div>
                                    <span>Lorem ipsum dolor sit.</span>
                                </div>
                            </div>
                            <div className="education">
                                <div>
                                    <span>Lorem ipsum dolor sit.</span>
                                </div>
                            </div>
                        </div>
                        <div className="info-education">
                            <div className="education">
                                <div>
                                    <span>Lorem ipsum dolor sit.</span>
                                </div>
                            </div>
                            <div className="education">

                                <div>
                                    <span>Lorem ipsum dolor sit. </span>
                                </div>
                            </div>
                        </div>
                        <div className="info-education">
                            <div className="education">
                                <div>
                                    <span>Lorem ipsum dolor sit.</span>
                                </div>
                            </div>
                            <div className="education">

                                <div>
                                    <span>Lorem ipsum dolor sit. </span>
                                </div>
                            </div>
                            
                        </div>
                        <div className="info-education">
                            <div className="education">
                                <div>
                                    <span>Lorem ipsum dolor sit.</span>
                                </div>
                            </div>
                            <div className="education">

                                <div>
                                    <span>Lorem ipsum dolor sit. </span>
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
                            <span>Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet. Lorem, ipsum dolor.lorem Lorem ipsum dolor sit amet consectetur. adipisicing elit. Tenetur vero quia corrupti nisi hic eos quasi eius labore Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur vero quia corrupti nisi hic eos quasi eius labore aspernatur neque consequatur vitae commodi odit accusantium, ipsa expedita aliquam possimus porro reiciendis itaque sunt exercitationem. Nesciunt sunt exercitationem. Nesciunt</span>
                        </div>
                    </div>
                    <div className="main-experience">
                        <div className="title-profile">
                            <h1 className="mini-title">WORK EXPERIENCE</h1>
                        </div>
                        <div className="experience">
                            <div className="subtitle">
                                <strong>Adipisicing elit Lorem, ipsum..</strong>
                            </div>
                            <div className="text-experience">
                                <span>Lorem ipsum dolor sit, amet consectetur  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, natus? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit labore soluta id debitis placeat cumque, asperiores nemo consequuntur distinctio dignissimos. adipisicing elit. Optio officia alias quod? Voluptates incidunt eaque et, veniam vitae quasi fugiat ut ab, inventore possimus magni ipsam aperiam eligendi similique nam!</span>
                            </div>
                        </div>
                        <div className="experience">
                            <div className="subtitle">
                                <strong>Adipisicing elit. Lorem ipsum dolor sit.</strong>
                            </div>
                            <div className="text-experience">
                                <span>Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia dolores odio voluptates eius quidem quia aliquid minima temporibus similique officia quasi nostrum corporis ea unde magni distinctio, dolor possimus laudantium cupiditate! Fuga optio sint ducimus voluptatem accusamus officiis animi vero? adipisicing elit. Optio officia alias quod? Voluptates incidunt eaque et, veniam vitae quasi fugiat ut ab, inventore possimus magni ipsam aperiam eligendi similique nam!</span>
                            </div>
                        </div>
                        <div className="experience">
                            <div className="subtitle">
                                <strong>Adipisicing elit Lorem ipsum dolor sit.</strong>
                            </div>
                            <div className="text-experience">
                                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum tempora quo repudiandae rem harum eveniet dolores ad odio, ipsum, reiciendis tempore labore obcaecati veritatis. Aut vitae sint ullam maxime dignissimos delectus repellat nobis totam possimus. officia alias quod? Voluptates incidunt eaque et, veniam vitae quasi fugiat ut ab, inventore possimus magni ipsam aperiam eligendi similique nam!</span>
                            </div>
                        </div>
                    </div>
                    <div className="main-skills">
                        <div className="title-skill">
                            <h1 className="mini-title">SKILLS</h1>
                        </div>
                        <div className="container-list">    
                            <div className="list">
                                <ul>
                                    <li><span>Lorem, ipsum Lorem.</span></li>
                                    <li><span>Lorem ipsum, ipsum.</span></li>
                                </ul>
                            </div>
                            <div className="list">
                                <ul>
                                    <li><span>Lorem, ipsum Lorem.</span></li>
                                    <li><span>Lorem ipsum, ipsum.</span></li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}