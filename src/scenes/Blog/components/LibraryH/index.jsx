import React from 'react'
import { Wrapper } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Clv from './img/clv.jpg'
import Akin from './img/akins.jpg'
import Form from './img/form.png'
import Rillo from './img/rillo.jpeg'
import Sil from './img/sil.jpg'
import Jord from './img/jord.jpg'



export const LibraryH = () => {
    return (
        <Wrapper>

            <div class="container-library-horizontal">

                <div class="title-and-button">
                    <div class="small-tirle">
                        <h5>LATEST</h5>
                    </div>
                    <div class="tall-title">                                            
                        <h1>Articles                    </h1>
                        <div class="button-right-title">
                            <a href="#">SEE ALL</a>
                        </div>
                    </div>    
                </div>

                <div class="library-horizontal">
                    <div class="container">
                        <div class="book-horizontal">
                            <div class="container-img-book">
                                <a href="#"><img src={Clv} alt="" /></a>
                            </div>
                            <h2><a href="#">Freelance Advice with Leigh Williamson</a></h2>
                            <span>Going freelance can be a nerve-wracking decision. That's why we're asking a panel of incredibly talented freelancers for their tips.</span>
                        </div>
                        <div class="book-horizontal">
                            <div class="container-img-book">
                                <a href="#"><img src={Akin} alt="" /></a>
                            </div>
                            <h2><a href="#">Freelance Advice with Hayley Akins</a></h2>
                            <span>Hear war stories from the world of freelance, and get ready for our big panel this week!</span>
                        </div>
                        <div class="book-horizontal">
                            <div class="container-img-book">
                                <a href="#"><img src={Form} alt="" /></a>
                            </div>
                            <h2><a href="#">Forward Motion: Our Commitment to the Community Never Ends</a></h2>
                            <span>Colorful shapes surround #forwardmotion hashtag</span>
                        </div>
                    </div>
                    
                    <div class="container">
                        <div class="book-horizontal">
                            <div class="container-img-book">
                                <a href="#"><img src={Rillo} alt="" /></a>
                            </div>    
                            <h2><a href="#">Which School of Motion Course is Right for You?</a></h2>
                            <span>Take This Quick Quiz to Determine Which som Course is Right for You</span>
                        </div>
                        <div class="book-horizontal">
                            <div class="container-img-book">
                                <a href="#"><img src={Sil} alt="" /></a>
                            </div>
                            <h2><a href="#">VFX for Motion Breakdowns with alumni Nic Dean</a></h2>
                            <span>We sat down with VFX for Motion alumni Nic Dean to talk about his breakdown reel, favorite compositing tips, and lessons learned from the co</span>
                        </div>
                        <div class="book-horizontal">
                            <div class="container-img-book">
                                <a href="#"><img src={Jord} alt="" /></a>
                            </div>
                            <h2><a href="#">Freelance Advice with Jordan Bergren</a></h2>
                            <span>What do you need to be a successful ? Ask Jordan Bergren!</span>
                        </div>
                    </div>              
                </div>
            </div>
        </Wrapper>
    )
}