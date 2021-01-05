import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Wrapper } from './styled'

import { useIsMobile } from '../../hooks/responsive'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

export const SliderRatio = () =>{
    const isMobile = useIsMobile()
    return(
        <Wrapper>
            
            <div className="big-title">
                <h1>Reviewed by the community. Trusted by professionals</h1>
            </div>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={105}
                totalSlides={8}
                visibleSlides={isMobile ? 1 : 3 }
                isPlaying={true}
                infinite={true}
            >
                <Slider>
                    <Slide index={0}>
                        <div className="item-slide-start">
                            <div className="one-floor-start">
                                <span>4.5 out of 5</span>
                            </div>
                            <div className="two-floor-start">
                                <span>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStarHalfAlt} />
                                </span>
                            </div>
                            <div className="thre-floor-start">
                                <span><FontAwesomeIcon icon={faStar} /> Trustpilot</span>
                            </div>
                            <div className="four-floor-start">
                                <span>based on 20,514 reviews</span>
                            </div>

                        </div>
                    </Slide>
                    <Slide index={1}>
                        <div className="item-slide">
                            <div className="one-floor">
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfAlt} />
                                </span>
                            </div>
                            <div className="two-floor">
                                <h3>Good and mistery</h3>
                            </div>
                            <div className="thre-floor">
                                <span>Excellent format for creating a resume. Missing some critical can phrase areas like IT HelpDesk, Business Owner, and Product Creator.</span>
                            </div>
                            <div className="four-floor">
                                <span>based on 20,514 reviews</span>
                            </div>
                        </div>
                    
                    </Slide>
                    <Slide index={2}>
                        <div className="item-slide">
                            <div className="one-floor">
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfAlt} />
                                </span>
                            </div>
                            <div className="two-floor">
                                <h3>Good and mistery</h3>
                            </div>
                            <div className="thre-floor">
                                <span>Excellent format for creating a resume. Missing some critical can phrase areas like IT HelpDesk, Business Owner, and Product Creator.</span>
                            </div>
                            <div className="four-floor">
                                <span>based on 20,514 reviews</span>
                            </div>
                        </div>    
                    </Slide>
                    <Slide index={3}>
                        <div className="item-slide">
                            <div className="one-floor">
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfAlt} />
                                </span>
                            </div>
                            <div className="two-floor">
                                <h3>Good and mistery</h3>
                            </div>
                            <div className="thre-floor">
                                <span>Excellent format for creating a resume. Missing some critical can phrase areas like IT HelpDesk, Business Owner, and Product Creator.</span>
                            </div>
                            <div className="four-floor">
                                <span>based on 20,514 reviews</span>
                            </div>
                        </div>
                    </Slide>
                    <Slide index={4}>
                        <div className="item-slide">
                            <div className="one-floor">
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfAlt} />
                                </span>
                            </div>
                            <div className="two-floor">
                                <h3>Good and mistery</h3>
                            </div>
                            <div className="thre-floor">
                                <span>Excellent format for creating a resume. Missing some critical can phrase areas like IT HelpDesk, Business Owner, and Product Creator.</span>
                            </div>
                            <div className="four-floor">
                                <span>based on 20,514 reviews</span>
                            </div>
                        </div>
                    </Slide>
                    <Slide index={5}>
                        <div className="item-slide">
                            <div className="one-floor">
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfAlt} />
                                </span>
                            </div>
                            <div className="two-floor">
                                <h3>Good and mistery</h3>
                            </div>
                            <div className="thre-floor">
                                <span>Excellent format for creating a resume. Missing some critical can phrase areas like IT HelpDesk, Business Owner, and Product Creator.</span>
                            </div>
                            <div className="four-floor">
                                <span>based on 20,514 reviews</span>
                            </div>
                        </div>
                    </Slide>
                    <Slide index={6}>
                        <div className="item-slide">
                            <div className="one-floor">
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfAlt} />
                                </span>
                            </div>
                            <div className="two-floor">
                                <h3>Good and mistery</h3>
                            </div>
                            <div className="thre-floor">
                                <span>Excellent format for creating a resume. Missing some critical can phrase areas like IT HelpDesk, Business Owner, and Product Creator.</span>
                            </div>
                            <div className="four-floor">
                                <span>based on 20,514 reviews</span>
                            </div>
                        </div>
                    </Slide>
                    <Slide index={7}>
                        <div className="item-slide">
                            <div className="one-floor">
                                <span>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStarHalfAlt} />
                                </span>
                            </div>
                            <div className="two-floor">
                                <h3>Good and mistery</h3>
                            </div>
                            <div className="thre-floor">
                                <span>Excellent format for creating a resume. Missing some critical can phrase areas like IT HelpDesk, Business Owner, and Product Creator.</span>
                            </div>
                            <div className="four-floor">
                                <span>based on 20,514 reviews</span>
                            </div>
                        </div>
                    </Slide>

                </Slider>
                <ButtonBack><FontAwesomeIcon icon={faAngleLeft} /></ButtonBack>
                <ButtonNext><FontAwesomeIcon icon={faAngleRight} /></ButtonNext>
            </CarouselProvider>

            
        </Wrapper>
    )
}