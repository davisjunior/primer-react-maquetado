import React from 'react'
import { Wrapper } from './styled'

import { useIsLarge } from '../../../../../src/hooks/responsive'
import { HeroMobile } from '../HeroMobile'


export const Hero = () => {
    const isMobileHeader = useIsLarge()
    return(
        <Wrapper>
            {!isMobileHeader ? (
                <div className="main">
                    <div className="container-nav">
                        <div className="main-nav">
                            <div className="nav">
                                <div className="logo">
                                    <a href="#">Cv Creator</a>
                                </div>
                                <div className="nav-options">
                                    <div className="options">
                                        <a href="#">Master Resume Creation</a>
                                    </div>
                                    <div className="options">
                                        <a href="#">FAQ</a>
                                    </div>
                                    <div className="options">
                                        <a href="#">Login</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="main-title">
                            <div className="Title-important">
                                <h1>Create a resume <br></br> super fast</h1>
                            </div>
                        </div>
                        <div className="main-description">
                            <p>For free, create as many resume as you can image bla bla bla <br/> another line</p>
                        </div>
                        <div className="button-cute">
                            <a href="#" className="cute-click">Get started</a>
                        </div>
                    </div>
                    <div className="png">
                    
                    </div>
                    {/* PROBAR ACOMODAR LUEGO 
                    <div className="grid">
                        <div className="casilla"></div>
                        <div className="casilla"></div>
                        <div className="casilla"></div>
                        <div className="casilla"></div>
                        <div className="casilla"></div>
                        <div className="casilla"></div>
                        <div className="casilla"></div>
                        <div className="casilla"></div>
                        <div className="casilla"></div>
                        <div className="casilla"></div>
                        <div className="casilla"></div>
                        <div className="casilla"></div>
                        <div className="casilla"></div>
                        <div className="casilla"></div>
                        <div className="casilla"></div>
                        <div className="casilla"></div>
                        <div className="casilla"></div>
                        <div className="casilla"></div>
                        <div className="casilla"></div>
                        <div className="casilla"></div>
                    </div>
                    */}
                </div>

           ) : (
            <HeroMobile/>
           )}
                
        </Wrapper>
    )
}