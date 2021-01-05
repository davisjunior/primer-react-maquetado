import React from 'react'
import { Wrapper } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeather } from '@fortawesome/free-solid-svg-icons'
import { faCopy} from '@fortawesome/free-solid-svg-icons'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'


export const ItemMaker = () => {
    return(
        <Wrapper>
            <div className="main-maker">
                <a href="#">
                    <div className="cv"></div>
                </a>
                <div className="publisher">
                    <div className="title">
                        <div className="subtitle">
                            <a href="#">Untitled <FontAwesomeIcon icon={faFeather} /></a>
                        </div>
                        <div className="texto">    
                            <p>Updated 33 December, 27:38</p>
                        </div>
                    </div>
                    <div className="options">
                        <div className="option">
                            <a href="#"><FontAwesomeIcon icon={faFeather} /> Edit</a>
                        </div>
                        <div className="option">
                            <a href="#"><FontAwesomeIcon icon={faCopy} /> Make a copy</a>
                        </div>
                        <div className="option">
                            <a href="#"><FontAwesomeIcon icon={faFileDownload} /> Download PDF</a>
                        </div>
                        <div className="option">
                            <a href="#"><FontAwesomeIcon icon={faEllipsisH} /> More</a>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}