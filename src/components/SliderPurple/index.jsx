import React from 'react'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import { useIsTablet, useIsMobile } from '../../hooks/responsive'
import CvCr1 from './img/cvcarousel1.png'
import CvCr2 from './img/cvcarousel2.png'
import CvCr3 from './img/cvcarousel3.png'
import CvCr4 from './img/cvcarousel4.png'
import CvCr5 from './img/cvcarousel5.png'
import CvCr6 from './img/cvcarousel6.png'



import { Wrapper } from './styled'

export const SliderPurple = () =>{
    const isTablet = useIsTablet()
    const isMobile = useIsMobile()
    let slidesVisibles

    if ( isMobile ) {
    slidesVisibles = 1
    } else if ( isTablet ) {
    slidesVisibles = 2
    } else {
    slidesVisibles = 4
    }

    return(
        <Wrapper>
            
                <div className="part-top-purple">
                    <div className="title-box-purple">
                        <h1>Save time with resume examples</h1>
                    </div>
                    <div className="text-box-purple">
                        <p>Check out our free resume samples for inspiration. Use these examples and our resume builder to create a beautiful resume in minutes. Our new and advanced Builder will guide you from start to finish.</p>
                    </div>

                </div>

                <CarouselProvider
                    naturalSlideWidth={110}
                    naturalSlideHeight={200}
                    totalSlides={11}
                    visibleSlides={slidesVisibles}
                    isPlaying={true}
                    infinite={true}
                >
                    <Slider>
                        <Slide index={0}>
                            <a href="#">
                                <div className="baul">
                                    <div className="mini-title">
                                        <h6>High School Student</h6>
                                    </div>
                                    <div className="stars-point">
                                        <h1>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <p>63 reviews</p>
                                        </h1>
                                    </div>
                                    <div className="container-image-slider-purple">
                                        <img src={CvCr1} alt="" />
                                    </div>
                                </div>
                            </a>
                        </Slide>
                        <Slide index={1}>
                            <a href="#">
                                <div className="baul">
                                    <div className="mini-title">
                                        <h6>High School Student</h6>
                                    </div>
                                    <div className="stars-point">
                                        <h1>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <p>63 reviews</p>
                                        </h1>
                                    </div>
                                    <div className="container-image-slider-purple">
                                        <img src={CvCr2} alt="" />
                                    </div>
                                </div>
                            </a>
                        </Slide>
                        <Slide index={2}>
                            <a href="#">
                                <div className="baul">
                                    <div className="mini-title">
                                        <h6>High School Student</h6>
                                    </div>
                                    <div className="stars-point">
                                        <h1>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <p>63 reviews</p>
                                        </h1>
                                    </div>
                                    <div className="container-image-slider-purple">
                                        <img src={CvCr3} alt="" />
                                    </div>
                                </div>
                            </a>
                        </Slide>
                        <Slide index={3}>
                            <a href="#">
                                <div className="baul">
                                    <div className="mini-title">
                                        <h6>High School Student</h6>
                                    </div>
                                    <div className="stars-point">
                                        <h1>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <p>63 reviews</p>
                                        </h1>
                                    </div>
                                    <div className="container-image-slider-purple">
                                        <img src={CvCr4} alt="" />
                                    </div>
                                </div>
                            </a>
                        </Slide>
                        <Slide index={4}>
                            <a href="#">
                                <div className="baul">    
                                    <div className="mini-title">
                                        <h6>High School Student</h6>
                                    </div>
                                    <div className="stars-point">
                                        <h1>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <p>63 reviews</p>
                                        </h1>
                                    </div>
                                    <div className="container-image-slider-purple">
                                        <img src={CvCr5} alt="" />
                                    </div>
                                </div>
                            </a>
                        </Slide>
                        <Slide index={5}>
                            <a href="#">
                                <div className="baul">    
                                    <div className="mini-title">
                                        <h6>High School Student</h6>
                                    </div>
                                    <div className="stars-point">
                                        <h1>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <p>63 reviews</p>
                                        </h1>
                                    </div>
                                    <div className="container-image-slider-purple">
                                        <img src={CvCr5} alt="" />
                                    </div>
                                </div>
                            </a>
                        </Slide>
                        <Slide index={6}>
                            <a href="#">
                                <div className="baul">    
                                    <div className="mini-title">
                                        <h6>High School Student</h6>
                                    </div>
                                    <div className="stars-point">
                                        <h1>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <p>63 reviews</p>
                                        </h1>
                                    </div>
                                    <div className="container-image-slider-purple">
                                        <img src={CvCr5} alt="" />
                                    </div>
                                </div>
                            </a>
                        </Slide>
                        <Slide index={7}>
                            <a href="#">
                                <div className="baul">    
                                    <div className="mini-title">
                                        <h6>High School Student</h6>
                                    </div>
                                    <div className="stars-point">
                                        <h1>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <p>63 reviews</p>
                                        </h1>
                                    </div>
                                    <div className="container-image-slider-purple">
                                        <img src={CvCr5} alt="" />
                                    </div>
                                </div>
                            </a>
                        </Slide>
                        <Slide index={8}>
                            <a href="#">
                                <div className="baul">    
                                    <div className="mini-title">
                                        <h6>High School Student</h6>
                                    </div>
                                    <div className="stars-point">
                                        <h1>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <FontAwesomeIcon icon={faStar}/>
                                            <p>63 reviews</p>
                                        </h1>
                                    </div>
                                    <div className="container-image-slider-purple">
                                        <img src={CvCr5} alt="" />
                                    </div>
                                </div>
                            </a>
                        </Slide>
                    </Slider>
                    <ButtonBack><FontAwesomeIcon icon={faAngleLeft} /></ButtonBack>
                    <ButtonNext><FontAwesomeIcon icon={faAngleRight} /></ButtonNext>

                </CarouselProvider>
        
            
               
        </Wrapper>
    )
}