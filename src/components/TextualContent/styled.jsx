import styled from 'styled-components'

export const Wrapper = styled.div`
    .container-texto-page{
        width: 100%;
        height: auto;
        background: white  ;
        padding: 70px 8% 0px 8%;
        display: flex;
        justify-content: space-between;
        .text-info-left{
            width: 67%;
            background: white;
            h1{
                font-size: 29px;
                color: #262b33;
                font-weight: bold;
                font-family: "Roboto", sans-serif;
                margin-bottom: 17px;     
                
            }
            .top-list{
                font-size: 29px;
                color: #262b33;
                font-weight: bold;
                font-family: "Roboto", sans-serif;
                margin-bottom: 20px;
                margin-top: 70px;
            }
            p{
                font-size: 19px;
                color: #262b33;
                margin-bottom: 22px;
                line-height: 26px;
                letter-spacing: 1.5px;
                a{
                    text-decoration: none;
                    color:  #2196f3;
                    border-bottom: 1px solid #2195f379;
                    font-size: 18.5px;
                    text-shadow: none;
                    transition: 0.5s ease;
                    &:hover{
                        color:  #218fe9;
                        border-bottom: 1px solid #2196f3;
                        transition: 0.5s ease;
                    }
                }
            }
            
            .container-cake{
                width: 100%;
                background: #f2f5fa;
                height: auto;
                border-radius: 15px 0px 0px 15px;
                a{
                    .cakes{
                        display: flex;
                        margin-top: 70px;
                        margin-bottom: 70px;
                        img{
                            width: 275px;
                            height: 249px;
                            border-radius: 15px 0px 0px 15px; 
                        }
                        .right-img{
                            width: 100%;
                            height: auto;
                            padding: 40px 4% 40px 4%; 
                            
                            p{
                                color: #7a8599;
                                font-size: 15px;
                                font-weight: 700;
                                letter-spacing: 3px;
                                margin-bottom: 0;
                                line-height: 0;
                                text-shadow: none;
                            }
                            h1{
                                font-size: 18px;
                                color: #262b33;
                                font-weight: bold;
                                font-family: "Roboto", sans-serif;
                                margin-bottom: 10px;
                                margin-top: 20px;
                                line-height: 22px;
                                transition: 0.5s ease;
                            }
                            span{
                                font-size: 16px;
                                color: #262b33;
                                margin-bottom: 22px;
                            }
                        }
                    }
                    &:hover {
                        .cakes{
                            .right-img{
                                h1{
                                    color: #2196f3;
                                    transition: 0.5s ease;
                                }
                            }
                        }
                    }
                }
            }
            ol{
                margin-left: 40px;
                margin-bottom: 30px;
                li{
                    list-style: unset;
                    font-size: 19px;
                    font-weight: 600;
                    color: #2196f3;
                    p{
                        font-weight: 300;
                        font-size:19px;
                        color: #262b33;
                        margin-bottom: 22px;
                        
                        letter-spacing: 1.5px;
                    }
                }
            }
            .box-green{
                width: 100%;
                height: auto;
                padding: 25px 20px 30px 30px;
                background: #f2faf5;
                border-radius: 5px;
                margin-top: 70px;
                margin-bottom: 50px;
                p{
                    font-size: 15px;
                    color: #00a042;
                    font-weight: 600;
                    margin-bottom: 10px;
                    line-height: 40px;
                    letter-spacing: 3px;
                    text-shadow: none;
                    
                    i{
                        font-size: 18px;
                        margin-right: 18px;
                    }
                }
                span{
                    font-size: 19px;
                    color: #262b33;
                    margin-bottom: 10px;
                    line-height: 40px;
                    letter-spacing: 1.5px;
                }
            }
            .container-list-horizontal{
                width: 100%;
                height: auto;
                display: flex;
                justify-content: space-between;
                
                .do-dont{
                    margin-top: 50px;
                    margin-bottom: 10px;
                    border-radius: 10px;
                    padding: 30px;
                    width: 49%;
                    height: auto;
                    background: #f2f5fa;
                    
                    .do{
                        font-size: 22px;
                        color: #262b33;
                        font-weight: bold;
                        font-family: "Roboto", sans-serif;
                        margin-bottom: 20px;
                        i{
                            font-size: 22px;
                            background: rgb(0 128 0 / 20%);;
                            border-radius: 50%;
                            padding: 7px;
                            color: green;
                        }
                    }
                    .dont{
                        font-size: 22px;
                        color: #262b33;
                        font-weight: bold;
                        font-family: "Roboto", sans-serif;
                        margin-bottom: 20px;
                        i{
                            font-size: 22px;
                            background: rgb(255 0 0 / 16%);
                            border-radius: 50%;
                            padding: 7px;
                            color: red;
                        }
                    }
                    ul{
                        padding-left: 7%;
                        li{
                            margin-bottom: 20px;
                            list-style: unset;
                            font-size: 15px;
                            color: #5b5f66;
                            margin-bottom: 22px;
                            font-weight: 600;
                            
                        }
                    }
                }
            }
            .container-a{
                a{
                    color: #218fe9;
                    border-bottom: 1px solid #2195f381;
                    font-size: 19px;
                    font-weight: bold;
                    transition: 0.5s ease;
                    &:hover{
                        border-bottom: 1px solid #2196f3;
                        transition: 0.5s ease;
                    }
                    i{
                        margin-left: 2%;
                        font-size: 20px;
                    }
                }
            }
            .container-box-and-buttom{
                width: 100%;
                margin-top: 50px;
                border-radius: 15px 15px 0px 0px;
                a{
                    .box-and-buttom{
                        padding: 12px 7% 15px 6%;
                        display: flex;
                        width: 100%;
                        background-color: #f2efea;
                        .box-img{
                            
                            border: none;
                            width: 40%;
                            height: auto;
                            img{
                                width: 100%;
                                height: auto;
                                overflow: hidden;
                            }
                        }
                        .box-text{
                            padding-top: 10%;
                            width: 60%;
                            h1{
                                font-size: 22px;
                                color: #262b33;
                                margin-bottom: 17px;
                            }
                            span{
                                font-size: 16px;
                                color: #373b41;
                                font-weight: 700;
                            }
                            
                        }
                    }
                    .box-buttom{
                        text-align: center;
                        margin-top: -20px;
                        width: 100%;
                        height: auto;
                        background: #262b33;
                        padding-top: 26px;
                        padding-bottom: 7px;
                        padding-right: 35px;
                        padding-left: 35px;
                        border-radius: 0px 0px 5px 5px;
                        transition: 0.5s ease;
                        
                        p{
                            color: #ffffff;
                            font-size: 19px;
                            font-weight: 600;
                            text-shadow: none;
                            transition: 0.5s ease-in-out;
                            i{
                                margin-left: 2%;
                            }
                        }
                    }
                    &:hover{
                        .box-buttom{
                            background: rgb(24, 28, 32); 
                            transition: 0.5s ease;
                        }
                    }
                }
            }

            
        }
        .image-sticky{
            width: 22%;
            a{
                .container-img-sticky{
                    width: 100%;
                    img{
                        width: 100%;
                        border-radius: 10px 10px 0px 0px;
                    }
                }

            }
        }
    }
    .imagen-explicacion{
        width: 100%;
        height: auto;
        background: white;
        padding: 70px 8% 0px 8%;
        img{
            width: 100%;
        }
    }
`