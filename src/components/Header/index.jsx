import React from 'react'
import { Wrapper } from './styled'
import { useIsLarge } from '../../hooks/responsive'
import logo from './img/logo.png'
import background from './img/backgroun.png'
import mail from './img/mail.png'
import lefttxt from './img/lefttxt.png'
import airplane from './img/airplane.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faHandRock } from '@fortawesome/free-solid-svg-icons'
import { faHorseHead } from '@fortawesome/free-solid-svg-icons'
import { HeaderMobile } from './components/HeaderMobile'

export const Header = () => {
    const isMobileHeader = useIsLarge()
    return (
        <Wrapper>
            {!isMobileHeader ? (
                <header>
                <nav className="desktop">
                    
                    <div className="logo">
                        <a href="/"><img src={logo} alt="" /></a>
                    </div>
                    
                    <ul>
                        
                        <li><a href="/" >Resume <FontAwesomeIcon icon={faAngleDown} /> </a>
                            <div className="container-submenu">
                                
                                <div className="part-left">
                                    <div className="part-left-title">
                                        <span><a href="/" className="title-black">Resume Templates</a></span>
                                        <span><a href="/" className="title-blue">View all</a></span>
                                    </div>
                                    <div className="content-top-part-left">
                                        <div className="content ">
                                            <div className="block-title">
                                                <a href="/"> <FontAwesomeIcon icon={faStar} /> Simple </a>
                                                <a href="/"><FontAwesomeIcon icon={faAngleRight} /></a>
                                            </div>
                                            <div className="text-span">
                                                <a href="/">Clean, timeless templates with a classic balanced structure. A perfect basic canvas</a>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="block-title">
                                                <a href="/"><FontAwesomeIcon icon={faBriefcase} />Profesional</a>
                                                <a href="/"><FontAwesomeIcon icon={faAngleRight} /></a>
                                            </div>
                                            <div className="text-span">
                                                <a href="/">Job-winning templates to showcase professionalism, dependability and expertise</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-buttom-part-left">
                                        <div className="content ">
                                            <div className="block-title">
                                                <a href="/"><FontAwesomeIcon icon={faHandRock} />Modern </a>
                                                <a href="/"><FontAwesomeIcon icon={faAngleRight} /></a>
                                            </div>
                                            <div className="text-span">
                                                <a href="/">A current and stylish feel for forward-thinking candidates in innovative fields</a>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="block-title">
                                                <a href="/"><FontAwesomeIcon icon={faHorseHead} />Creative</a>
                                                <a href="/"><FontAwesomeIcon icon={faAngleRight} /></a>
                                            </div>
                                            <div className="text-span">
                                                <a href="/">A bold, original feel perfect for artistic fields and contemporary companies</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="part-middle">
                                    <div className="part-middle-title">
                                        <span><a href="/" className="title-black">Resume Examples</a></span>
                                    </div>
                                    <div className="list-middle">
                                        <div className="list">
                                            <div className="information">
                                                <a href="/">Accounting & Finance</a>
                                            </div>
                                            <div className="number-list">
                                                <a href="/">11</a>
                                            </div>
                                        </div>
                                        <div className="list">
                                            <div className="information">
                                                <a href="/">Administrative</a>
                                            </div>
                                            <div className="number-list">
                                                <a href="/">9</a>
                                            </div>
                                        </div>
                                        <div className="list">
                                            <div className="information">
                                                <a href="/">Beauty & Wellness</a>
                                            </div>
                                            <div className="number-list">
                                                <a href="/">7</a>
                                            </div>
                                        </div>
                                        <div className="list">
                                            <div className="information">
                                                <a href="/">Business & Management</a>
                                            </div>
                                            <div className="number-list">
                                                <a href="/">13</a>
                                            </div>
                                        </div>
                                        <div className="list">
                                            <div className="information">
                                                <a href="/">Construction</a>
                                            </div>
                                            <div className="number-list">
                                                <a href="/">3</a>
                                            </div>
                                        </div>
                                        <div className="list">
                                            <div className="information">
                                                <a href="/">All Examples<FontAwesomeIcon icon={faAngleRight} /></a>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="part-right">
                                    <div className="img-part-right">
                                        <a href="/"><img src={background} alt="" /></a>
                                    </div>
                                    <div className="part-right-title">
                                        <a href="/" className="title-black">Resume Builder</a>
                                        <div className="text-part-right">
                                            <span><a href="/">Build powerful resumes in only 5 minutes with our easy to use Resume Builder and get hired faster.</a></span>
                                        </div>    
                                        <a href="/" className="title-blue">Get Started Now<FontAwesomeIcon icon={faAngleRight} /></a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><a href="/">Cover Letter<FontAwesomeIcon icon={faAngleDown} /></a>
                            <div className="container-submenu">
                                
                                <div className="part-left">
                                    <div className="part-left-title">
                                        <span><a href="/" className="title-black">Resume Templates</a></span>
                                        <span><a href="/" className="title-blue">View all</a></span>
                                    </div>
                                    <div className="content-top-part-left">
                                        <div className="content ">
                                            <div className="block-title">
                                                <a href="/"><FontAwesomeIcon icon={faStar} />Simple </a>
                                                <a href="/"><FontAwesomeIcon icon={faAngleRight} /></a>
                                            </div>
                                            <div className="text-span">
                                                <a href="/">Clean, timeless templates with a classic balanced structure. A perfect basic canvas</a>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="block-title">
                                                <a href="/"><FontAwesomeIcon icon={faBriefcase} />Profesional</a>
                                                <a href="/"><FontAwesomeIcon icon={faAngleRight} /></a>
                                            </div>
                                            <div className="text-span">
                                                <a href="/">Job-winning templates to showcase professionalism, dependability and expertise</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-buttom-part-left">
                                        <div className="content ">
                                            <div className="block-title">
                                                <a href="/"><FontAwesomeIcon icon={faHandRock} />Modern </a>
                                                <a href="/"><FontAwesomeIcon icon={faAngleRight} /></a>
                                            </div>
                                            <div className="text-span">
                                                <a href="/">A current and stylish feel for forward-thinking candidates in innovative fields</a>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="block-title">
                                                <a href="/"><FontAwesomeIcon icon={faHorseHead} />Creative</a>
                                                <a href="/"><FontAwesomeIcon icon={faAngleRight} /></a>
                                            </div>
                                            <div className="text-span">
                                                <a href="/">A bold, original feel perfect for artistic fields and contemporary companies</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="part-middle">
                                    <div className="part-middle-title">
                                        <span><a href="/" className="title-black">Resume Examples</a></span>
                                    </div>
                                    <div className="list-middle">
                                        <div className="list">
                                            <div className="information">
                                                <a href="/">Accounting & Finance</a>
                                            </div>
                                            <div className="number-list">
                                                <a href="/">11</a>
                                            </div>
                                        </div>
                                        <div className="list">
                                            <div className="information">
                                                <a href="/">Administrative</a>
                                            </div>
                                            <div className="number-list">
                                                <a href="/">9</a>
                                            </div>
                                        </div>
                                        <div className="list">
                                            <div className="information">
                                                <a href="/">Beauty & Wellness</a>
                                            </div>
                                            <div className="number-list">
                                                <a href="/">7</a>
                                            </div>
                                        </div>
                                        <div className="list">
                                            <div className="information">
                                                <a href="/">Business & Management</a>
                                            </div>
                                            <div className="number-list">
                                                <a href="/">13</a>
                                            </div>
                                        </div>
                                        <div className="list">
                                            <div className="information">
                                                <a href="/">Construction</a>
                                            </div>
                                            <div className="number-list">
                                                <a href="/">3</a>
                                            </div>
                                        </div>
                                        <div className="list">
                                            <div className="information">
                                                <a href="/">All Examples<FontAwesomeIcon icon={faAngleRight} /></a>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="part-right">
                                    <div className="img-part-right">
                                        <a href="/"><img src={mail} alt=""/></a>
                                    </div>
                                    <div className="part-right-title">
                                        <a href="/" className="title-black">Cover Letter Builder</a>
                                        <div className="text-part-right">
                                            <span><a href="/">Build professional cover letters in a few simple steps by using our free Cover Letter builder.</a></span>
                                        </div>    
                                        <a href="/" className="title-blue">Get Started Now<FontAwesomeIcon icon={faAngleRight} /></a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
                        <li><a href="/">Resume writing<FontAwesomeIcon icon={faAngleDown} /></a>
                            <div className="container-submenu-3">
                                <div className="submenu-3-left">
                                    <div className="submenu-3-top">
                                        <div className="title-submenu">
                                            <span><a href="/" className="Title-black">Resume Writing</a></span>
                                        </div>
                                        <div className="img-and-content">
                                            <div className="img-left-text">
                                                <img src={lefttxt} alt=""/>
                                            </div>
                                            <div className="title-text">
                                                <div className="block-title">
                                                    <a href="/">How to write a resume <FontAwesomeIcon icon={faAngleRight} /></a>
                                                </div>
                                                <div className="text-span">
                                                    <a href="/">A complete guide with step by step expert tips. Writing your job-winning resume has never been this easy!</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="submenu-3-buttom">
                                        <div className="list">
                                            <div className="information">
                                                <a href="/">Resume formats</a>
                                            </div>
                                            <div className="information">
                                                <a href="/">Chronological resume</a>
                                            </div>
                                            <div className="information">
                                                <a href="/">Functional resume</a>
                                            </div>
                                            <div className="information">
                                                <a href="/">Summary, objective</a>
                                            </div>
                                        </div>
                                        <div className="list">
                                            <div className="information">
                                                <a href="/">Employment history</a>
                                            </div>
                                            <div className="information">
                                                <a href="/">Skills</a>
                                            </div>
                                            <div className="information">
                                                <a href="/">Education</a>
                                            </div>
                                            <div className="information">
                                                <a href="/">Hobbies</a>
                                            </div>
                                        </div>
                                        <div className="list">
                                            <div className="information">
                                                <a href="/">References</a>
                                            </div>
                                            <div className="information">
                                                <a href="/">Languages</a>
                                            </div>
                                            <div className="information">
                                                <a href="/">Proofreading</a>
                                            </div>
                                            <div className="information">
                                                <a href="/">International resumes</a>
                                            </div>
                                            <div className="information">
                                                <a href="/">Read full guide</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="submenu-3-right">
                                    <div className="img-part-right">
                                        <a href="/"><img src={airplane} alt=""/></a>
                                    </div>
                                    <div className="part-right-title">
                                        <a href="/" className="title-black">Get started now</a>
                                    </div>
                                    <div className="text-span">
                                        <a href="/">Make your job-winning resume easy and fast with our top resume builder.</a>
                                    </div>
                                    <div className="blue-title">
                                        <a href="/" className="title-blue">Create my resume<FontAwesomeIcon icon={faAngleRight} /></a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
        
                        <li><a href="/">FAQ</a></li>
                        <li><a href="/">Log in</a></li>
                        <li><a href="/" className="boton">Sing up </a></li>
        
                    </ul>
                </nav>       
                    
                </header>
            ) : (
                <HeaderMobile />
            )}
        </Wrapper>
    )
}
