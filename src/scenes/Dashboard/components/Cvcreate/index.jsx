import React from 'react'
import { Wrapper } from './styled'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { ItemMaker } from '../ItemMaker'


export const CvCreate = () => {
    return(
        <Wrapper>
            <div className="title">
                <h1>Dashboard</h1>
            </div>
            <div className="main">
                <div className="container-option">
                    <div className="resume">
                        <div>
                            <a href="#">Resumes</a>
                        </div>    
                    </div>
                    <div className="cover">
                        <div>
                            <a href="#">Cover Letters</a>
                        </div>
                    </div>
                    
                </div>
                <div className="create">
                    <a href="#" className="boton"><FontAwesomeIcon icon={faPlus} />Create New</a>
                </div>
            </div>
            <div className="maker">
                
                <div className="cv-maker"> <ItemMaker/></div>
                <div className="cv-maker"> <ItemMaker/></div>
                <div className="cv-maker"> <ItemMaker/></div>
                <div className="cv-maker"> <ItemMaker/></div>
                <div className="cv-maker"> <ItemMaker/></div>
                <div className="cv-maker"> <ItemMaker/></div>
                <div className="cv-maker"> <ItemMaker/></div>
                <div className="cv-maker"> <ItemMaker/></div>
                
            </div>
        </Wrapper>
    )
}