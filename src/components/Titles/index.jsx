import React from 'react'

import { Wrapper } from './styled'



export const Titles = () =>{
    return(
        <Wrapper>
            <div className="down-header">
                <div className="container-down-header">
                    <h1>Job-winning resume templates</h1>
                    <h2>Each template is expertly designed and follows the exact “resume rules” hiring managers look for. Stand out and get hired faster with field-tested resume templates.</h2>
                    <a href="/" className="boton">Create My Resume</a>
                </div>
            </div>
        </Wrapper>
    )
}