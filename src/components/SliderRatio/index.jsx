import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Wrapper } from './styled'

export const SliderRatio = () =>{
    return(
        <Wrapper>
            
            <div className="big-title">
                <h1>Reviewed by the community. Trusted by professionals</h1>
            </div>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={3}
                isPlaying={true}
                infinite={true}
            >
                <Slider>
                    <Slide index={0}><div className="item-slide"></div></Slide>
                    <Slide index={1}>I am the second Slide.</Slide>
                    <Slide index={2}>I am the third Slide.</Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>

            
        </Wrapper>
    )
}