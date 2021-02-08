import React from 'react'
import { Wrapper } from './styled'
import { Header } from '../../components/Header'
import { Hero } from './components/Hero'
import { Library } from './components/MainLibrary'
import { LibraryH } from './components/LibraryH'
import { Panels } from './components/Panels'
import { Footer } from '../Hometwo/Footer'


export const Blog = () => {
    return (
        <Wrapper>
           <Header/>
           <Hero/>
           <Library/>
           <LibraryH/>
           <Panels/>
           <Footer/>
        </Wrapper>
    )
}