import React from 'react'
import CvOne from './img/cvcarousel5.png'
import CvTwo from './img/cvcarousel1.png'
import CvThre from './img/cvcarousel3.png'


import { Wrapper } from './styled'

export const AboveFooter =( ) =>{
    return(
        <Wrapper>
            
            
                <div class="img-cv-pre-footer">
                    <div class="img-cv-one">
                        <img src={CvOne} alt=""/>
                    </div>
                <div class="img-cv-two">
                    <img src={CvTwo} alt=""/>
                </div>
                <div class="img-cv-three"> 
                    <img src={CvThre} alt=""/> </div>
                </div>
                <div class="text-right-img-cv">
                    <h1>Effortlessly build a job-worthy resume</h1>
                    <p>Save time with our easy 3-step resume builder. No more writer’s block or formatting difficulties in Word. Rapidly make a perfect resume employers love.</p>
                    <a href="#" class="boton">Create My Resume</a>
                </div>
            
               
        </Wrapper>
    )
}