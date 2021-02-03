import React from 'react'
import { Wrapper } from '../../Signup/StartMobile/styled'
import top from './img/Group6.png'
import back from './img/left.png'

export const StartLogMobile = () => {
    return(
        <Wrapper>
            <div className="main-main">
                <div className="top">
                    <div className="img">
                        <a href="#">
                            <img src={top} alt="" />
                        </a>     
                    </div>
                    <div className="back">
                        <a href="#">
                            <img src={back} alt="" />
                        </a>
                    </div>
                    <div className="title">
                        <h1>Log In </h1>
                    </div>
                </div>
                <div className="middle">
                    <div className="main-input">
                        <div className="name-mail-pass">
                            <h1>EMAIL</h1>
                        </div>
                        <div className="input">
                            <input type="text" placeholder="ibuprofeno@gmail.com"/>
                        </div>
                    </div>
                    <div className="main-input">
                        <div className="name-mail-pass">
                            <h1>PASSWORD</h1>
                        </div>
                        <div className="input">
                            <input type="text" placeholder="diosesmipastor"/>
                        </div>
                    </div>
                    <div className="main-button">
                        <div>
                            <a href="#">SIGN UP</a>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}