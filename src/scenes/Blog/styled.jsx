
import styled from 'styled-components'
import Fondo from './img/fondo.png'
import FondoM from './img/fondomb.png'

export const Wrapper = styled.div`
    box-sizing:border-box;
    background:url(${Fondo}) no-repeat top center/ contain;
    background-repeat: no-repeat;
    background-size: 100%;
    width:100%;
    height:105vh;

    @media (max-width:1100px){
        background:url(${FondoM}) no-repeat top center/ contain;
    }
`
