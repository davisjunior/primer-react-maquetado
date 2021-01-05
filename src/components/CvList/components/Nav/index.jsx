import React from 'react'
import { Wrapper } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faHorseHead } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faHandRock } from '@fortawesome/free-solid-svg-icons'
export const Nav = () =>{
    return(
        <Wrapper>

            <div className="content-options">
                <div className="options">
                    <a href="/"><FontAwesomeIcon icon={faCopy}/>All templates</a>
                </div>
                <div className="options">
                    <a href="/"><FontAwesomeIcon icon={faStar}/>Simple</a>
                </div>
                <div className="options">
                    <a href="/"><FontAwesomeIcon icon={faHorseHead}/>Creative</a>
                </div>
                <div className="options">
                    <a href="/"><FontAwesomeIcon icon={faBriefcase}/>Professional</a>
                </div>
                <div className="options">
                    <a href="/"><FontAwesomeIcon icon={faHandRock }/>Modern</a>
                </div>
        </div>
        </Wrapper>
    )
}