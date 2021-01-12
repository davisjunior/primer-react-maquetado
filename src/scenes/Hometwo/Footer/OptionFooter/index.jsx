import React from 'react'
import { Wrapper } from './styled'
import { ReactComponent as FcSvg } from './img/facebook.svg'
import { ReactComponent as InSvg } from './img/instagram.svg'
import { ReactComponent as PtSvg } from './img/pinterest.svg'
import { ReactComponent as TwSvg } from './img/Twitter.svg'

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
                <div className="fc"><FcSvg/></div>
                <div className="tw"><InSvg/></div>
                <div className="ins"><TwSvg/></div>
                <div className="pnt"><PtSvg/></div>
            </div>
            </div>
        </Wrapper>
    )
}