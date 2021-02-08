import React from 'react'
import { Wrapper } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Rg from './img/Registration.jpg'
import Media from './img/media.jpg'
import Media1 from './img/media1.jpg'
import Media2 from './img/media2.jpg'
import Fondo from './img/fondo.jpg'



export const Hero = () => {
    return (
        <Wrapper>
            <div class="fondo-mobile">
                <h1><a href="#">Ira hurtado</a></h1>
                <img src={Fondo} alt="" />
                <h2>El centro de diseño <br/> de movimiento</h2>
                <span>Bienvenido al lugar numero 1 para  tutoriales en video de <br/> diseño de  movimiento,<br/> entrevistas de  podcast y <br/> articulos detallados.</span>
            </div>

            <div class="container-down-header">
                <div class="text-1">
                    <h2>The Hub of Motion Design</h2>
                </div>
                <div class="text-2">
                    <h5>Welcome to the #1 place for motion design video tutorials, <br/> podcast interviews, and in-depth articles.</h5>
                </div>
            </div>

            <div class="container-main-info">
                <div class="container-1-info">
                    <div class="img-info">
                        <img src={Rg} alt="" />
                    </div>
                    <div class="text-info">
                        <h4>VIEW COURSES</h4>
                        <h2><a href="#">Summer 2020 <br/> Registration is OPEN!</a></h2>
                        <span>Join a community to build your network, connect  with industry pros, and celebrate with your peers  this summer. Courses fill up quickly so grab your  spot now!</span>
                    </div>
                </div>
                <div class="container-2-info">
                    <div class="container-block" >
                        <div class="img-left">
                            <a href=""><img src={Media} alt="" /></a>
                        </div>
                        <div class="orden">
                            <h5>ARTICLE</h5>
                            <h4><a href="#">Freelance Advice with Leigh Williamson</a></h4>
                        </div>
                        
                    </div>
                    <div class="container-block" >
                        <div class="img-left">
                            <a href=""><img src={Media1} alt="" /></a>
                        </div>
                        <div class="orden">
                            <h5>ARTICLE</h5>
                            <h4><a href="#">Freelance Advice with Hayley Akins</a></h4>
                        </div>
                        
                    </div>
                    <div class="container-block">
                        <div class="img-left">
                            <a href=""><img src={Media2} alt="" /></a>
                        </div>
                        <div class="orden">
                            <h5>PODCAST</h5>
                            <h4><a href="#">Finding Your Voice: Cat Solen, Creator of Adult Swim's "Shivering Truth"</a></h4>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}