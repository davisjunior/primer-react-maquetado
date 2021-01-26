import React from 'react'
import { Wrapper } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Perfil from './img/perfil.png'

export const CvModernOne = () => {
    return (
        <Wrapper>
            <div className="main-main">
                <div className="main-top">
                    <div className="main-img">
                        <div className="face">
                            <img src={Perfil} alt="" />
                        </div>
                        <div className="presentation">
                            <div className="name">
                                <h1>VANEROCK BAJN</h1>
                            </div>
                            <div className="job">
                                <h1>MUSCLE DESIGNER</h1>
                            </div>
                        </div>
                    </div>
                    <div className="main-profile">
                        <div className="info-profile">
                            <div className="title">
                                <h1 className="mini-title">PROFILE</h1>
                            </div>
                            <div className="border"></div>
                        </div>
                        <div className="text-profile">
                            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur vero quia corrupti nisi hic eos quasi eius labore Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur vero quia corrupti nisi hic eos quasi eius labore aspernatur neque consequatur vitae commodi odit accusantium, ipsa expedita aliquam possimus porro reiciendis itaque sunt exercitationem. Nesciunt sunt exercitationem. Nesciunt</span>
                        </div>
                    </div>
                    <div className="info-contact">
                        <div className="main-ul">
                            <ul>
                                <li>
                                    <div className="contact-icon">
                                        <div><FontAwesomeIcon icon={faGlobeAmericas} /></div>
                                        <div><span>+58 241-8241071</span></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="contact-icon">
                                        <div><FontAwesomeIcon icon={faEnvelope} /></div>
                                        <div><span>bonchon@gmail.com</span></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="contact-icon">
                                        <div><FontAwesomeIcon icon={faEnvelope} /></div>
                                        <div><span>bonchon@107.1@gmail.com</span></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="main-ul">
                            <ul>
                                <li>
                                    <div className="contact-icon">
                                        <div><FontAwesomeIcon icon={faHome} /></div>
                                        <div><span>Sun suite, mañongo</span></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="contact-icon">
                                        <div><FontAwesomeIcon icon={faUser} /></div>
                                        <div><span>Bonchonbonchon</span></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="main-middle">
                    <div className="left">
                        <div className="main-experience">
                            <div className="title-education">
                                <h1 className="mini-title">EXPERIENCE</h1>
                            </div>
                            <div className="date">
                                <ul>
                                    <li>
                                        <div className="subtitle">
                                            <div className="info">
                                                <span><strong>BLACK ADAM</strong></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="subtitle">
                                            <div className="info">
                                                <span> <strong>El Gran unico Hercules</strong> </span>
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
                                                <span><strong>Moana</strong></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="subtitle">
                                            <div className="info">
                                                <span><strong>this is the rock</strong></span>
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
                                <ul>
                                    <li>
                                        <div className="subtitle">
                                            <div className="info">
                                                <span><strong>BLACK ADAM</strong></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="subtitle">
                                            <div className="info">
                                                <span> <strong>El Gran unico Hercules</strong> </span>
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
                            </div>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="date-middle">
                            <div className="profile">
                                <div className="title-profile">
                                    <h1 className="mini-title">Acting the earthquake San Andreas</h1>
                                </div>
                                <div className="info-profile">
                                    <span>                            
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur vero quia corrupti nisi 
                                        hic eos quasi eius labore aspernatur neque consequatur vitae commodi odit accusantium, 
                                        
                                    </span>
                                </div>

                                <div className="title-profile">
                                    <h1 className="mini-title">Acting the earthquake San Andreas</h1>
                                </div>
                                <div className="info-profile">
                                    <span>                            
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur vero quia corrupti nisi 
                                        hic eos quasi eius labore aspernatur neque consequatur vitae commodi odit accusantium, 
                                        
                                    </span>
                                </div>
                                <div className="title-profile">
                                    <h1 className="mini-title">Acting the earthquake San Andreas</h1>
                                </div>
                                <div className="info-profile">
                                    <span>                            
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur vero quia corrupti nisi 
                                        hic eos quasi eius labore aspernatur neque consequatur vitae commodi odit accusantium, 
                                        
                                    </span>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="right">
                        <div className="main-experience">
                            <div className="title-education">
                                <h1 className="mini-title">PRO SKILLS</h1>
                            </div>
                            <div className="main-barra">
                                <ul>
                                    <li>
                                        <div className="main-skills">
                                            <div className="text">
                                                <label htmlFor="file">HTML5</label>
                                            </div>
                                            <div className="barra">
                                                <progress max="100" value="70">70%</progress>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="main-skills">
                                            <div className="text">
                                                <label htmlFor="file">Wordpress</label>
                                            </div>
                                            <div className="barra">
                                                <progress max="100" value="70">70%</progress>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="main-skills">
                                            <div className="text">
                                                <label htmlFor="file">CSS</label>
                                            </div>
                                            <div className="barra">
                                                <progress max="100" value="70">70%</progress>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="main-skills">
                                            <div className="text">
                                                <label htmlFor="file">PHP</label>
                                            </div>
                                            <div className="barra">
                                                <progress max="100" value="70">70%</progress>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="main-skills">
                                            <div className="text">
                                                <label htmlFor="file">javascript</label>
                                            </div>
                                            <div className="barra">
                                                <progress max="100" value="70">70%</progress>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="main-skills">
                                            <div className="text">
                                                <label htmlFor="file">c++</label>
                                            </div>
                                            <div className="barra">
                                                <progress max="100" value="70">70%</progress>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="main-skills">
                                            <div className="text">
                                                <label htmlFor="file">pothoshop</label>
                                            </div>
                                            <div className="barra">
                                                <progress max="100" value="70">70%</progress>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="main-skills">
                                            <div className="text">
                                                <label htmlFor="file">jQuery</label>
                                            </div>
                                            <div className="barra">
                                                <progress max="100" value="70">70%</progress>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-middle">
                <div className="left">
                        <div className="main-experience">
                            <div className="title-education">
                                <h1 className="mini-title">EDUCATION</h1>
                            </div>
                            <div className="date">
                                <ul>
                                    <li>
                                        <div className="subtitle">
                                            <div className="info">
                                                <span><strong>BLACK ADAM</strong></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="subtitle">
                                            <div className="info">
                                                <span> <strong>El Gran unico Hercules</strong> </span>
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
                                <ul className="ul-padding">
                                    <li>
                                        <div className="subtitle">
                                            <div className="info">
                                                <span><strong>Moana</strong></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="subtitle">
                                            <div className="info">
                                                <span><strong>this is the rock</strong></span>
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
                        </div>
                    </div>
                    <div className="middle">
                        <div className="date-middle">
                            <div className="profile">
                                <div className="title-profile">
                                    <h1 className="mini-title">Acting the earthquake San Andreas</h1>
                                </div>
                                <div className="info-profile">
                                    <span>                            
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur vero quia corrupti nisi 
                                        hic eos quasi eius labore aspernatur neque consequatur vitae commodi odit accusantium, 
                                        
                                    </span>
                                </div>

                                <div className="title-profile">
                                    <h1 className="mini-title">Acting the earthquake San Andreas</h1>
                                </div>
                                <div className="info-profile">
                                    <span>                            
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur vero quia corrupti nisi 
                                        hic eos quasi eius labore aspernatur neque consequatur vitae commodi odit accusantium, 
                                        
                                    </span>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="right">
                        <div className="main-experience">
                            <div className="title-education">
                                <h1 className="mini-title">PER SKILLS</h1>
                            </div>
                            <div className="main-barra">
                                <ul>
                                    <li>
                                        <div className="main-skills">
                                            <div className="text">
                                                <label htmlFor="file">HTML5</label>
                                            </div>
                                            <div className="barra">
                                                <progress max="100" value="70">70%</progress>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="main-skills">
                                            <div className="text">
                                                <label htmlFor="file">Wordpress</label>
                                            </div>
                                            <div className="barra">
                                                <progress max="100" value="70">70%</progress>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="main-skills">
                                            <div className="text">
                                                <label htmlFor="file">CSS</label>
                                            </div>
                                            <div className="barra">
                                                <progress max="100" value="70">70%</progress>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="main-skills">
                                            <div className="text">
                                                <label htmlFor="file">PHP</label>
                                            </div>
                                            <div className="barra">
                                                <progress max="100" value="70">70%</progress>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="main-skills">
                                            <div className="text">
                                                <label htmlFor="file">javascript</label>
                                            </div>
                                            <div className="barra">
                                                <progress max="100" value="70">70%</progress>
                                            </div>
                                        </div>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-middle">
                    <div className="left">
                        <div className="main-experience">
                            <div className="title-education">
                                <h1 className="mini-title">AWARDS</h1>
                            </div>
                            <div className="date">
                                <ul>
                                    <li>
                                        <div className="subtitle">
                                            <div className="info">
                                                <span><strong>BLACK ADAM</strong></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="subtitle">
                                            <div className="info">
                                                <span> <strong>El Gran unico Hercules</strong> </span>
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
                                <ul className="ul-padding">
                                    <li>
                                        <div className="subtitle">
                                            <div className="info">
                                                <span><strong>Moana</strong></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="subtitle">
                                            <div className="info">
                                                <span><strong>this is the rock</strong></span>
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
                        </div>
                    </div>
                    <div className="middle">
                        <div className="date-middle">
                            <div className="profile">
                                <div className="title-profile">
                                    <h1 className="mini-title">Acting the earthquake San Andreas</h1>
                                </div>
                                <div className="info-profile">
                                    <span>                            
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur vero quia corrupti nisi 
                                        hic eos quasi eius labore aspernatur neque consequatur vitae commodi odit accusantium, 
                                        
                                    </span>
                                </div>

                                <div className="title-profile">
                                    <h1 className="mini-title">Acting the earthquake San Andreas</h1>
                                </div>
                                <div className="info-profile">
                                    <span>                            
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur vero quia corrupti nisi 
                                        hic eos quasi eius labore aspernatur neque consequatur vitae commodi odit accusantium, 
                                        
                                    </span>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="right">
                        <div className="main-experience">
                            <div className="title-education">
                                <h1 className="mini-title">REFERENCES</h1>
                            </div>
                            <div className="date">
                                <ul>
                                    <li>
                                        <div className="subtitle">
                                            <div className="info">
                                                <span><strong>BLACK ADAM</strong></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="subtitle">
                                            <div className="info">
                                                <span>El Gran unico Hercules </span>
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
                                    <li>
                                        <div className="subtitle">
                                            <div className="info">
                                                <span>this is the rock</span>
                                            </div>                             
                                        </div>
                                    </li>  
                                </ul>
                                <ul className="ul-padding">
                                    <li>
                                        <div className="subtitle">
                                            <div className="info">
                                                <span><strong>Moana</strong></span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="subtitle">
                                            <div className="info">
                                                <span>this is the rock</span>
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
                                    <li>
                                        <div className="subtitle">
                                            <div className="info">
                                                <span>this is the rock</span>
                                            </div>                             
                                        </div>
                                    </li>   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}