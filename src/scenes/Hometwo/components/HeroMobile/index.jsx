import React from 'react'
import { Wrapper } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { useIsLarge } from '../../../../../src/hooks/responsive'
import fondo from './img/Group6.png'


export const HeroMobile = () => {
    return(
        <Wrapper>
            <div className="main-nav">
                <div className="nav">
                    <div className="logo">
                        <a href="#">Cv Creator</a>
                    </div>
                    <div className="nav-options">
                        <div className="burger">
                            <a href="#"><FontAwesomeIcon icon={faBars} /></a>
                        </div>
                    </div>
                </div>
                <div className="fondo">
                    <img src={fondo} alt="" />
                    <div className="presentation">
                        <div className="title">
                            <h1>Create a resume <br/> super fast</h1>
                        </div>
                        <div className="text">
                            <p>For free, create as many resumes as you can image bla bla bla bla another line</p>
                        </div>
                        <div className="container">
                            <a href="#" className="cute-click">Get started</a>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}