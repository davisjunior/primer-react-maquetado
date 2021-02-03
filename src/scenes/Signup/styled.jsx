
import styled from 'styled-components'

import Group6 from './img/Group6.png'

export const Wrapper = styled.div`
.main{
    display:flex;
    height:100vh;
    width:100%;
    box-sizing:border-box;
    background:white;
    .left{
        width:55%;
        display:flex;
        flex-direction:column;
        background:white;
        padding:70px 10px 30px 25px;
        box-sizing: border-box;
        text-align:center;
        .title{
            margin-bottom:30px;
            h1{
                font-family: 'Mulish',sans-serif;
                font-size: 4vw;
                font-weight: 600;
                color: #707070;
                margin: 0;
            }
        }
        .redes{
            display:flex;
            padding: 0px 160px 0px 160px;
            justify-content: space-between;
            .icon{
                img{
                    width:20px;
                    border:1px solid gray;
                    border-radius:50%;
                    padding:10px;
                }
            }
        }
        .text{
            margin-top:40px;
            margin-bottom:20px;
            font-size: 16px;
            font-family: 'Mulish',sans-serif;
            color: #707070;
        }
        .main-input{
            div{
                input{
                    width: 80%;
                    height: 45px;
                    border-radius: 10px;
                    border: 2px solid #e2e1e1;
                    margin-bottom:15px;
                    padding-left:10px;
                    font-family: 'Mulish',sans-serif;
                    color:#707070;
                    outline: none;
                }
            }
        }
        .okay{
            display:flex;
            justify-content:center;
            margin-top:10px;
            .bt-ok{
                a{
                    background-color:#e2e1e1;
                    padding:6px 6px 3px 6px;
                    border-radius:10px;
                    margin-right:10px;
                    transition:1s ease;
                    img{
                        opacity:0;
                        width:15px;
                        
                    }
                    &:hover{
                        img{
                            opacity:1;
                            transition:1s ease;
                        }
                    }
                }
            }
            div{
                span{
                    font-size: 16px;
                    font-family: 'Mulish',sans-serif;
                    color: #707070;
                    a{
                        color: #1a535c;;
                        &:hover{
                            border-bottom:1px solid #1a535c;
                        }
                    }
                }
            }
        }
        .main-session{
            display:flex;
            justify-content:center;
            margin-top:40px;
            div{
                margin-right:30px;
                a{
                    padding:15px 60px 15px 60px;
                }
            }
            div:nth-child(2){
                margin-right:0px;
            }
        }
    }

    .png{
        margin: 25px 10px 30px 25px;
        box-sizing:border-box;
        width:45%;
        background:url(${Group6}) no-repeat top right / contain;
    }

}

`