import React from 'react'
import { Wrapper } from './styled'
import { OptionFooter } from './OptionFooter'

export const Footer = () => {
    return (
        <Wrapper>
            <div className="box-go">
                <div className="colors">
                    <div className="grid">
                        <div className="div1"></div>
                        <div className="div2"></div>
                        <div className="div3"></div>
                        <div className="div4"></div>
                        <div className="div5"></div>
                        <div className="div6"></div>
                        <div className="div7"></div>
                        <div className="div8"></div>
                    </div>
                </div>
                <div className="base-text"></div>
                <div className="title-absolute">
                    <h1>Create a resume now</h1>
                </div>
                <div className="go">
                    <a href="#" className="cute-click-go">Go</a>
                </div>
            </div>
            <OptionFooter/>
        </Wrapper>
    )
}