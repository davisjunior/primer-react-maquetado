
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
            width: 160px;
            height:auto;
            transition:0.5s ease;
            &:hover{
                transform:scale(1.05);
                transition:0.2s ease;
            }
        }
    }

    .png{
        margin: 25px 10px 30px 25px;
        box-sizing:border-box;
        width:45%;
        background:url(${Group6}) no-repeat center right / contain;
    }

}

`