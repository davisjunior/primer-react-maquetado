import React from 'react'
import { Wrapper } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Fondo from './img/1.jpg'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'



export const Panels = () => {
    return (
        <Wrapper>
            <div class="container-panels-box">
                <div class="title-and-button">
                    <h1>Collections</h1>
                    <div class="boton-java"> 
                        <a href="#"><FontAwesomeIcon icon={faArrowCircleLeft} /></a>
                        <a href="#"><FontAwesomeIcon icon={faArrowCircleRight} /></a>
                    </div>
                </div>
                <div class="panels">
                    <div class="panels-content">
                        <ul>
                            <h3>30 Days of After <br/> Effects</h3>
                            <li><img src={Fondo} alt="" />
                                <span>Tutorial: Create a Write-On Effect in After Effects</span>
                            </li>
                            <li><img src={Fondo} alt="" />
                                <span>Tutorial: Using Polar Coordinates in After Effects</span>
                            </li>
                            <li><img src={Fondo} alt="" />
                                <span>Tutorial: Create a Gear Rig Using Expressions After Effects</span>
                            </li>
                            <li><img src={Fondo} alt="" />
                                <span>Tutorial: Create a 3D Scene from a Photo in After Effects</span>
                            </li>
                        </ul>
                        <div class="Button-panels-1">
                            <a href="#">30 TUTORIALES</a>
                        </div>
                    </div>
                    <div class="panels-content">
                        <ul>
                            <h3>Making Giants: How <br/> to Create a Motion <br/> Graphic Short Film</h3>
                            <li><img src={Fondo} alt="" />
                                <span>Tutorial: Making Giants Part 1 | The Idea</span>
                            </li>
                            <li><img src={Fondo} alt="" />
                                <span>Tutorial: Making Giants Part 2 | The Edit</span>
                            </li>
                            <li><img src={Fondo} alt="" />
                                <span>Tutorial: Making Giants Part 3 | The Scene</span>
                            </li>
                            <li><img src={Fondo} alt="" />
                                <span>Tutorial: Making Giants Part 4 | The Building</span>
                            </li>
                        </ul>
                        <div class="Button-panels-2">
                            <a href="#">20 TUTORIALES</a>
                        </div>
                    </div>
                    <div class="panels-content">
                        <ul>
                            <h3>Photoshop Animation <br/> Series</h3>
                            <li><img src={Fondo} alt="" />
                                <span>Tutorial: Photoshop Animation Series Part 1 | Basics</span>
                            </li>
                            <li><img src={Fondo} alt="" />
                                <span>Tutorial: Photoshop Animation Series Part 2 | Timing</span>
                            </li>
                            <li><img src={Fondo} alt="" />
                                <span>Tutorial: Photoshop Animation Series Part 3 | Eases</span>
                            </li>
                            <li><img src={Fondo} alt="" />
                                <span>Tutorial: Photoshop Animation Series Part 4 | Splash Animation</span>
                            </li>
                        </ul>
                        <div class="Button-panels-3">
                            <a href="#">10 TUTORIALES</a>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}