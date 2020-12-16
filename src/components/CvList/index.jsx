import React from 'react'
import { Wrapper } from './styled'



import { Nav } from './components/Nav'
import { CvItem } from './components/CvItem'

export const CvList = () =>{
    return(
        <>
            <Nav/>
            <Wrapper>
                
                <CvItem/>
                <CvItem/>
                <CvItem/>
                <CvItem/>
                <CvItem/>
                <CvItem/>
                
            </Wrapper>
        </>
    )
}