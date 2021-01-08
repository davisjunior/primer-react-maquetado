import React from 'react'
import { Wrapper } from './styled'
import Cv from '../../img/cv.jpg'

export const CvItemthree = () =>{
    return(
        <Wrapper>
        
            
            <div className="boton-flash">
                <a href="/" className="boton">Use This Template</a>
            </div>
            <div className="container-cv">
                <div className="cv">
                    <a href="/"><img src={Cv} alt=""/></a>
                </div>
                <div className="down-cv">
                    <div className="circle-container">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>
                    <div className="option-cv-doc">
                        <a href="/">PDF</a>
                        <a href="/">DOCX</a>

                    </div>
                </div>
            </div>
            <div className="container-description-cv">
                <h1 className="title-black">Stockholm</h1>
                <span className="text-span">Perfect balance of fresh design and functional sections.</span>
            </div>

        
        </Wrapper>
    )
}