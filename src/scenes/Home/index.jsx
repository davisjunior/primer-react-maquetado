import React from 'react'
import { Header } from '../../components/Header'
import { Wrapper } from './styled'
import { CvList } from '../../components/CvList'
import { CvItem } from '../../components/CvList/components/CvItem'
import { Titles } from '../../components/Titles'
import { SliderRatio } from '../../components/SliderRatio'
import { TextualContent } from '../../components/TextualContent'
import { SliderPurple } from '../../components/SliderPurple'
import { AboveFooter } from '../../components/AboveFooter'
import { Footer } from '../../components/Footer'


export const Home = () => {
    return (
        <Wrapper>
            <Header />
            <Titles/>
            <CvList/>
            <SliderRatio/>
            <TextualContent/>
            <SliderPurple/>
            <AboveFooter/>
            <Footer/>
                
            
            
            
        </Wrapper>
    )
}