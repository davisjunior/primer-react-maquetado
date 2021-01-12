import React from 'react'
import { Wrapper } from './styled'
import {  Hero } from '../Hometwo/components/Hero'
import { CvList } from '../../components/CvList'
import { Footer } from '../Hometwo/Footer'

export const Hometwo = () => {
    return (
        <Wrapper>
            <Hero />
            <CvList/>
            <Footer/>
            
            
            
        </Wrapper>
    )
}