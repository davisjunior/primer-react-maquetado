import React from 'react'
import { Wrapper } from '../../scenes/Signup/styled'

import { useIsTablet } from '../../hooks/responsive'
import { StartLogMobile } from './StartLogMobile'


export const Login = () => {
    const isMobileHeader = useIsTablet()
    return(
        <Wrapper>
            {!isMobileHeader ? (
                <div className="main">
                    <div className="left">
                        <div className="title">
                            <h1>Log In</h1>
                        </div>
                        <div className="main-input">
                            <div><input type="text" placeholder="Email"/></div>
                            <div><input type="text" placeholder="Password"/></div>
                        </div>
                        <div className="okay">
                            <div>
                                <span><a href="#">forgot my password ?</a></span>
                            </div>
                        </div>
                        <div className="main-session">
                            <div><a href="#" className="cute-click-go">Sign Up</a></div>
                            <div><a href="#" className="cute-click-go-re">Register</a></div>
                        </div>
                        
                    </div>

                    <div className="png">
                    
                    </div>
                </div>

           ) : (
            <StartLogMobile />
           )}
                
        </Wrapper>
    )
}