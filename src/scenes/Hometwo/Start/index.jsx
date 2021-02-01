import React from 'react'
import { Wrapper } from './styled'

import { useIsLarge } from '../../../../src/hooks/responsive'
import { HeroMobile } from '../components/HeroMobile'
import fc from './img/fc.png'
import go from './img/go.png'
import lin from './img/lin.png'
import tw from './img/tw.png'
import acp from './img/acp.png'



export const Start = () => {
    const isMobileHeader = useIsLarge()
    return(
        <Wrapper>
            {!isMobileHeader ? (
                <div className="main">
                    <div className="left">
                        <div className="title">
                            <h1>Create Account</h1>
                        </div>
                        <div className="redes">
                            <div className="icon"><a href="#"> <img src={go} alt="" /></a> </div>
                            <div className="icon"><a href="#"> <img src={fc} alt="" /></a> </div>
                            <div className="icon"><a href="#"> <img src={tw} alt="" /></a> </div>
                            <div className="icon"><a href="#"> <img src={lin} alt="" /></a> </div>
                        </div>
                        <div className="text">
                            <span>or use your email for registration:</span>
                        </div>
                        <div className="main-input">
                            <div><input type="text" placeholder="Name"/></div>
                            <div><input type="text" placeholder="Email"/></div>
                            <div><input type="text" placeholder="Password"/></div>
                        </div>
                        <div className="okay">
                            <div className="bt-ok">
                                <a href="#"><img src={acp} alt="" /></a>
                            </div>
                            <div>
                                <span>I agree to the <a href="#">Terms</a> and <a href="#">Privacy policy</a></span>
                            </div>
                        </div>
                        <div className="main-session">
                            <div><a href="#" className="cute-click-go">Sign Up</a></div>
                            <div><a href="#" className="cute-click-go">Sign in</a></div>
                        </div>
                    </div>

                    <div className="png">
                    
                    </div>
                </div>

           ) : (
            <HeroMobile/>
           )}
                
        </Wrapper>
    )
}