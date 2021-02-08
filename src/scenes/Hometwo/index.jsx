import React from 'react'
import { Wrapper } from './styled'
import {  Hero } from '../Hometwo/components/Hero'

import { CvList } from '../../components/CvList'
import { Footer } from '../Hometwo/Footer'
import { Header } from '../../components/Header'



export const Hometwo = () => {
    return (
        <Wrapper>
            <Hero />
            
            <Header/>
            <CvList/>
            <Footer/>
            
            
            
        </Wrapper>
    )
}