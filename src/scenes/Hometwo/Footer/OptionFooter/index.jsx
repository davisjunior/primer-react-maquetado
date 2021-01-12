import React from 'react'
import { Wrapper } from './styled'
import face from './img/facebook.png'
import Insta from './img/instagram.png'
import Twitt from './img/twitter.png'
import Pints from './img/pinterest.png'


export const OptionFooter = () => {
    return (
        <Wrapper>
            <div className="main">
                <div className="part-left">
                    <div className="logo-footer">
                        <h1>Cv Creator</h1>
                    </div>
                    <div className="derechos">
                        <h1>Copyright 2021</h1>
                    </div>
                    <div className="handling">
                        <h1>Powered by Flora Tech</h1>
                    </div>
                </div>
                <div className="part-middle">
                    <div className="contact">
                        <di className="option">
                            <a href="#">Contact Us</a>
                        </di>
                        <di className="option">
                            <a href="#">How It works</a>
                        </di>
                    </div>
                    <div className="politic">
                        <div className="option">
                            <a href="#">FAQs</a>
                        </div>
                        <div className="option">
                            <a href="#">Privacy Policy</a>
                        </div>
                    </div>
                    <div className="user">
                        <di className="log">
                            <a href="#">My Account</a>
                        </di>
                    </div>
                </div>
                <div className="red-social">
                    <div className="icon">
                        <a href="#"><img src={face} alt="" /></a>
                    </div>
                    <div className="icon">
                    <a href="#"><img src={Insta} alt="" /></a>
                    </div>
                    <div className="icon">
                    <a href="#"><img src={Twitt} alt="" /></a>
                    </div>
                    <div className="icon">
                    <a href="#"><img src={Pints} alt="" /></a>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}