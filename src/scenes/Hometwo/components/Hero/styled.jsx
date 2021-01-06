
import styled from 'styled-components'

import Group6 from './img/Group6.png'

export const Wrapper = styled.div`
.main{
    display:flex;
    height:100vh;
    width:100%;
    box-sizing:border-box;
    background:white;
    .container-nav{
        width:55%;
        display:flex;
        flex-direction:column;
        background:white;
        padding: 25px 10px 30px 25px;
        box-sizing: border-box;
        .main-nav{
            .nav{
                display:flex;
                justify-content:space-between;
                .logo{
                    margin-top:-2px;
                    a{
                        font-size:22px;
                        font-weight:bold;
                        font-family: 'Mulish', sans-serif;
                        text-decoration:none;

                    }
                }
                .nav-options{
                    display:flex;
                    .options{
                        font-size:16px;
                        font-family: 'Mulish', sans-serif;
                        
                        a{
                            text-decoration:none;
                            color:#707070;
                        }
                    }
                    .options:nth-child(2){
                        padding-right:60px;
                        padding-left:70px;
                        box-sizing:border-box;
                    }
                    .options:nth-child(3){
                        text-decoration:underline;
                    }
                }
            }
        }
        .main-title{
            margin-top:auto;
            box-sizing: border-box;
            background-color:white;
            width:auto;
            .Title-important{
                h1{
                    font-family: 'Mulish', sans-serif;
                    font-size:5vw;
                    font-weight:600;
                    color:#707070;
                    margin:0;
                    
                }
            }
        }
        .main-description{
            width:370px;
            height: auto;
            margin-bottom:40px;
            margin-top:30px;
            p{
                font-size:16px;
                font-family: 'Mulish', sans-serif;
                color:#707070;
            }
        }
        .button-cute{
            .cute-click{
                background-color:#4ECDC4;
            }
        }
    }

    .png{
        margin: 25px 10px 30px 25px;
        box-sizing:border-box;
        width:45%;
        background:url(${Group6}) no-repeat center right / contain;
    }
{/* Un comentario JSX 

    .grid{
        width:45%;
        gap:0;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows:repeat(5, 1fr);
        padding: 25px 10px 30px 25px;
        box-sizing: border-box;
        min-width: 750px;
        .casilla{
            padding:50%;
        }
        .casilla:nth-child(1){
            
            border-radius: 0px 70px 70px 70px;
            background: #4ECDC4;
            
        }
        .casilla:nth-child(2){
            
            background: #1A535C;
            border-radius: 0px 70px 0px 0px;
        }
        .casilla:nth-child(3){
            
            background: #FA6B6C;
            border-radius: 70px;
        }
        .casilla:nth-child(4){
            
            background: #FEE66E;
            border-radius: 0px 0px 70px 0px;
        }
        .casilla:nth-child(5){
            
            background: #FEE66E;
            border-radius: 70px 0px 0px 0px;
        }
        .casilla:nth-child(6){
            
            border-radius: 0px 0px 70px 0px;
            background: #4ECDC4;
        }
        .casilla:nth-child(7){
            
            border-radius: 70px 70px 0px 0px;
            background: #FDE56D;
        }
        .casilla:nth-child(8){
            
            background: #FA6B6C;
            border-radius: 0px 70px 70px 0px;
        }
        .casilla:nth-child(9){
            
            background: #000000;
            border-radius: 70px 0px 0px 0px;
        }
        .casilla:nth-child(10){
            
            background: #000000;
            border-radius: 0px 0px 70px 0px;
        }
        .casilla:nth-child(11){
            
            background: #4ECDC4;
        }
        .casilla:nth-child(12){
            
            border-radius: 70px 0px 0px 70px;
            background: #FDE56D;
        }
        .casilla:nth-child(13){
            
            background: #1A535C;
            border-radius: 70px 0px 0px 0px;
        }
        .casilla:nth-child(14){
            
            background: #FA6B6C;
            border-radius: 70px;
        }
        .casilla:nth-child(15){
            
            background: #000000;
            border-radius: 0px 0px 0px 70px;
        }
        .casilla:nth-child(16){
            
            background: #000000;
            
        }
        .casilla:nth-child(17){
            
            background: #FEE66E;
            border-radius: 70px 0px 70px 0px;
        }
        .casilla:nth-child(18){
            
            background: #FA6B6C;
            border-radius: 0px 0px 70px 70px;
        }
        .casilla:nth-child(19){
            
            background: #4ECDC4;
        }
        .casilla:nth-child(20){
            
            background: #1A535C;
            border-radius: 0px 70px 0px 70px;
        }
    }
    */}
}
`