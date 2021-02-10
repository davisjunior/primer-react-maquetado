import React from 'react'
import { Wrapper } from './styled'
import { Header } from '../../components/Header'
import { Hero } from './components/Hero'
import { Library } from './components/MainLibrary'
import { LibraryH } from './components/LibraryH'
import { Panels } from './components/Panels'
import { Footer } from '../Hometwo/Footer'
import { SliderPurple } from '../../components/SliderPurple'


export const Blog = () => {
    return (
        <Wrapper>
           <Header/>
           <Hero/>
           {/* Un comentario JSX
           <Library/>
           */}
           <LibraryH/>
           
           {/* Un comentario JSX
           <Panels/>
           */}
           <SliderPurple/>
           <Footer/>
        </Wrapper>
    )
}