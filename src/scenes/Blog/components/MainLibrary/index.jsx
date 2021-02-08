import React from 'react'
import { Wrapper } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Book from './img/book1.jpg'
import Book2 from './img/book2.jpg'
import Book3 from './img/nook3.jpg'
import BookR from './img/book-right2.jpg'
import BookR2 from './img/book-right3.jpg'



export const Library = () => {
    return (
        <Wrapper>
            <div class="container-library">
                <div class="library-left">
                    <div class="small-tirle">
                        <h5>LATEST</h5>
                    </div>
                    <div class="tall-title">
                        
                                                                    
                        <h1>Tutorials</h1>
                        <div class="button-right-title">
                            <a href="#">SEE ALL</a>
                        </div>
                    </div>
                    <div class="library-1">

                        <div class="book">
                            <div class="image-book">
                                <a href="#"><img src={Book} alt="" /></a>
                            </div>
                            <div class="text-book">
                                <h2><a href="#">Quadruped Anatomy for Animators</a></h2>
                                <p>Learn the ins and outs of rigging a variety of quadrupeds in After Effects and Cinema 4D!</p>
                            </div>
                        </div>
                        <div class="book">
                            <div class="image-book">
                                <a href="#"><img src={Book2} alt="" /></a>
                            </div>
                            <div class="text-book">
                                <h2><a href="#">How to Stretch and Smear Text</a></h2>
                                <p>Get ready to learn one of the industry's hottest new trends: Stretching and Smearing text!</p>
                            </div>
                        </div>
                        <div class="book">
                            <div class="image-book">
                                <a href="#"><img src={Book3} alt="" /></a>
                            </div>
                            <div class="text-book">
                                <h2><a href="#">Five After Effects Tools You Never Use...But You Should</a></h2>
                                <p>Learn about 5 tools native to After Effects that you really ought to use!</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="library-right">
                    <div class="small-tirle">
                        <h5>LATEST</h5>
                    </div>
                    <div class="tall-title">
                        
                        <h1>Podcasts</h1>
                        <div class="button-right-title">
                            <a href="#">SEE ALL</a>
                        </div>
                    </div>
                    <div class="library-2">
                        <div class="book-right">
                            <div class="img-book-right">
                                <a href="#"><img src={BookR} alt="" /></a>
                            </div>
                            <div class="text-book-right">
                                <h2><a href="#">Finding Your Voice: Cat Solen, <br/> Creator of Adult Swim's "Shivering Truth"</a></h2>
                            </div>
                        </div>
                        <div class="book-right">
                            <div class="img-book-right">
                                <a href="#"><img src={BookR} alt="" /></a>
                            </div>
                            <div class="text-book-right">
                                <h2><a href="#">A Wonderfully Grim Storyteller: JJ Villard's Fairy Tales on Adult Swim</a></h2>
                            </div>
                        </div>
                        <div class="book-right">
                            <div class="img-book-right">
                                <a href="#"><img src={BookR2} alt="" /></a>
                            </div>
                            <div class="text-book-right">
                                <h2><a href="#">Success and Speculative Design with Territory's Marti Romances</a></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}