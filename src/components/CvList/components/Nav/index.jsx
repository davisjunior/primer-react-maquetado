import React from 'react'
import { Wrapper } from './styled'

export const Nav = () =>{
    return(
        <Wrapper>

            <div className="content-options">
                <div className="options">
                    <a href="/"><i className="far fa-copy"/>All templates</a>
                </div>
                <div className="options">
                    <a href="/"><i className="far fa-star" aria-hidden="true"/>Simple</a>
                </div>
                <div className="options">
                    <a href="/"><i className="fas fa-horse-head" aria-hidden="true"/>Creative</a>
                </div>
                <div className="options">
                    <a href="/"><i className="fas fa-briefcase" aria-hidden="true"/>Professional</a>
                </div>
                <div className="options">
                    <a href="/"><i className="far fa-hand-rock" aria-hidden="true"/>Modern</a>
                </div>
        </div>
        </Wrapper>
    )
}