import React from 'react'
import Flag from './img/kisspng-flag-of-venezuela-vector-graphics-computer-icons-i-where-we-work-operation-smile-5c01de755e3872.5081417915436263573859.png'

import { Wrapper } from './styled'

export const Footer =( ) =>{
    return(
        <Wrapper>
            
            <footer>
        <div class="container-main-footer">
            <div class="container-footer-left">
                <div class="title-social-red">
                    <h1>Connect with us on social media</h1>
                </div>
                <div class="icon-red-social">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div class="center-right">
                <div class="list-one-footer">
                    <h5>JOB SEEKERS</h5>
                    <ul>
                        <li><a href="#">Build a Resume</a></li>
                        <li><a href="#">Resume Examples</a></li>
                        <li><a href="#">Resume Templates</a></li>
                        <li><a href="#">Cover Letter Templates</a></li>
                        <li><a href="#">Job Search</a></li>
    
                    </ul>
                </div>
                <div class="list-one-footer">
                    <h5>JOB SEEKERS</h5>
                    <ul>
                        <li><a href="#">Correction</a></li>
                        <li><a href="#">Resume Examples</a></li>
                        <li><a href="#">Resume Templates</a></li>
                        <li><a href="#">Cover Letter Templates</a></li>
                        <li><a href="#">Job Search</a></li>
                        <li><a href="#">Blog</a></li>
    
                    </ul>
                </div>
                <div class="list-one-footer">
                    <h5>JOB SEEKERS</h5>
                    <ul>
                        <li><a href="#"> Resume</a></li>
                        <li><a href="#">Resume Examples</a></li>
                        <li><a href="#">Resume Templates</a></li>
                        <li><a href="#">Cover Letter Templates</a></li>
                        <li><a href="#">Job Search</a></li>
                        <li><a href="#">Media Kit</a></li>
                        <li><a href="#">Affiliates</a></li>
    
                    </ul>
                </div>
                <div class="list-one-footer">
                    <h5>JOB SEEKERS</h5>
                    <ul>
                        <li><a href="#">Agua que me quemo</a></li>
                        <li><a href="#">Resume Examples</a></li>
                        <li><a href="#">Resume Templates</a></li>
                        <li><a href="#">Cover Letter Templates</a></li>
                        <li><a href="#">Privacy</a></li>
    
                    </ul>
                </div>
            </div>

            
            
            <div class="footer-mobile">
                <div class="menu-footer-mobile">
                    <div class="container-option-icon">
                        <p>Job Seekers</p>
                        <span><i class="fas fa-angle-down"></i></span>
                    </div>
                    <div class="submenu-footer-mobile">
                        <a href="#">Build a Resume</a>
                        <a href="#">Resume Examples</a>
                        <a href="#">Resume Templates</a>
                        <a href="#">Cover Letter Templates</a>
                        <a href="#">Job Search</a>
                    </div>
                </div>
                <div class="menu-footer-mobile">
                    <div class="container-option-icon">
                        <p>Career Resources</p>
                        <span><i class="fas fa-angle-down"></i></span>
                    </div>
                    <div class="submenu-footer-mobile">
                        <a href="#">Build a Resume</a>
                        <a href="#">Resume Examples</a>
                        <a href="#">Resume Templates</a>
                        <a href="#">Cover Letter Templates</a>
                        <a href="#">Job Search</a>
                    </div>
                </div>
                <div class="menu-footer-mobile">
                    <div class="container-option-icon">
                        <p>Our company</p>
                        <span><i class="fas fa-angle-down"></i></span>
                    </div>
                    <div class="submenu-footer-mobile">
                        <a href="#">Build a Resume</a>
                        <a href="#">Resume Examples</a>
                        <a href="#">Resume Templates</a>
                        <a href="#">Cover Letter Templates</a>
                        <a href="#">Job Search</a>
                    </div>
                </div>
                <div class="menu-footer-mobile">
                    <div class="container-option-icon">
                        <p>Support</p>
                        <span><i class="fas fa-angle-down"></i></span>
                    </div>
                    <div class="submenu-footer-mobile">
                        <a href="#">Build a Resume</a>
                        <a href="#">Resume Examples</a>
                        <a href="#">Resume Templates</a>
                        <a href="#">Cover Letter Templates</a>
                        <a href="#">Job Search</a>
                    </div>
                </div>
            </div>
            
           
            
            
        </div>
        <div class="derechos">
            <div class="flag">
                <a href="#"><img src={Flag} alt=""/>International</a>
            </div>
            <div class="copy">
                <span>Copyright 2020 - Resume.io</span>
            </div>
        </div>
    </footer>
               
        </Wrapper>
    )
}