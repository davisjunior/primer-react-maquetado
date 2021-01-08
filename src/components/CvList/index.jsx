import React from 'react'
import { Wrapper } from './styled'




import { Nav } from './components/Nav'
import { CvItem } from './components/CvItem'
import { CvItemtwo } from './components/CvItemtwo'
import { CvItemthree } from './components/CvItemthree'

export const CvList = () =>{
    return(
        <>
        {/* LUEGO LO USAREMOS
            <Nav/>
            */}
            <Wrapper>
                
                <CvItem/>
                <CvItemtwo/>
                <CvItem/>
                
                
            </Wrapper>
        </>
    )
}