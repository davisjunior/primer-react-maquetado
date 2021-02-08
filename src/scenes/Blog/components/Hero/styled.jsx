
import styled from 'styled-components'

export const Wrapper = styled.div`
    .fondo-mobile{
        display: none;
    }

    .container-down-header{
        width: 100%;
        display: block;
        margin-top: 30px;

        .text-1{
            
            h2{
                font-size: 60px;
                color: white;
                font-weight: 400;
                text-shadow: 0px 0px 2px rgb(0, 0, 0);
                text-align: center;
                margin-bottom: 0px;
                margin-left:0px;
                margin-right:0px;
            }
        }
        .text-2{
            margin-top: 19px;
            h5{
                margin:0px;
                font-size: 28px;
                color: white;
                font-weight: 100;
                text-align: center;
            }
        }
    }

    .container-main-info{
        width: 100%;
        height: auto;
        background: transparent;
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
        margin-top: 75px;
        

        .container-1-info{
            width: 56.5%;
            height: auto;
            border-radius: 30px;
            background: white;
            display: flex;
            padding: 20px;
            box-sizing:border-box;
            margin-right: 2%;
            box-shadow: 0px 21px 76px -18px #767676;

            .img-info{
                
                width: 100%;
                height: 271px;
                overflow: hidden;
                img{
                    width: auto;
                    height: auto;
                    border-radius: 15px;
                }
            }
            .text-info{
                margin-top: 25px;
                width: 100%;
                margin-left: 3%;
                h4{
                    font-size: 14px;
                    color: #4c43f5;
                    font-family: "Josefin Sans", sans-serif;
                    font-weight: 600;
                    margin:0px 0px 10px 0px;

                }
                h2{
                    margin:0px 0px 15px 0px;
                    a{
                        text-decoration: none;
                        font-size: 30px;
                        color: #070606;
                        line-height: 1.1;
                    }
                }
                span{
                    font-size:17px;
                    color:#070606;
                    font-weight: 100;
                    line-height: 1.12;
                }
            }
        }
        .container-2-info{
            width: 29.1%;
            height:auto;
            background: white;
            border-radius: 30px;
            padding: 20px;
            box-sizing:border-box;
            box-shadow: 0px 21px 76px -18px #767676;

            .container-block{
                display: flex;
                margin-bottom: 5%;
                //margin-top: 5%;
                
                .img-left{
                    margin-right: 20px;
                    width:100px;
                    height: 80px;
                    a{

                        img{
                            width: 100px;
                            height: 100%;
                            border-radius: 15px;
                        }
                    }
                }
                .orden{
                    h5{
                        font-size: 11px;
                        font-family: "Josefin Sans", sans-serif;
                        color: #4c43f5;
                        font-weight: 600;
                        margin:0px;
                    }
                    h4{
                        margin:5px 0px 0px 0px;
                        a{
                            text-decoration: none;
                            color: #070606;
                            font-size: 16px;
                            font-family: "Josefin Sans", sans-serif;
                            line-height: 1.2;
                            text-shadow: 0px 0px 0px white;
                        }
                    }
                }
            }
            //.container-block:nth-child(2){
                //margin-top: 5%;
                //margin-bottom: 5%;
            //}
            .container-block:nth-child(3){
                margin-bottom: 0%;
            }
        }
    }

    @media only screen and (min-width: 768px) and (max-width: 1080px) {
        .container-main-info{
        flex-direction: column;
            .container-1-info{
                //flex-wrap:wrap;
                min-width: 96%;
                margin-bottom: 20px;
                margin-left: 2%;
                .img-info{
                    
                    height: auto;
                }
            }
            .container-2-info{
                display: flex;
                min-width: 96%;
                min-height: auto;
                margin-left: 2%;
                .container-block{
                    flex-direction: column;
                    width:33% ;
                    
                    .img-left{
                        min-width: 100%;
                        min-height: 190px;
                        
                        a{
                            img{
                                min-width: 100%;
                                min-height: 100%;
                            }
                        }
                    }
                    .orden{
                        margin-top: 15px;
                        margin-left: 7%;
                        h5{
                            margin-bottom: 10px;
                        }
                    }
                }
                
                .container-block:nth-child(2){
                    width: 33%;
                    height: auto;
                    margin-right: 2%;
                    margin-left: 2%;
                    .img-left{
                        min-width: 100%;
                        height: 100%;
                        margin-right: 0px;
                        a{
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }
                .container-block:nth-child(3){
                    width: 33%;
                    .img-left{
                        margin-right: 0%; 
                        
                    }
                }
                
            }
        }
    }
    @media (max-width:767px){
        .fondo-mobile{
            display: flex;
            margin-top: 0px;
            width: 100%;
            height: 530px;

            h1{
                display: none;
                position: absolute;
                position: absolute;
                left: 25px;
                top: 116px;
                background: linear-gradient(to right,#051e4a,#462271,#4c43f5,#3DDC96 );
                border-radius: 10px;
                padding-bottom: 5px;
                padding-right: 10px;
                padding-left: 10px;
                a{
                    text-decoration: none;
                    color: #fcfcfc;
                    font-size: 20px;
                    font-weight: 400;
                }
            }
            img{
                border-radius: 15px;
                width: 100%;
                height: 560px;
                display: flex;
            }
            h2{
                position: absolute;
                color: #fcfcfc;
                top: 140px;
                left: 20px;
                font-size: 34px;
                font-family: "Josefin Sans", sans-serif;
                font-weight: 400;
            }
            
            span{
                position: absolute;
                color: #fcfcfc;
                top: 265px;
                left: 20px;
                font-size: 24px;
                font-weight: 300;
                font-family: "Josefin Sans", sans-serif;
                line-height: 1.2;
            }       
        }
        .container-down-header{
            display: none;
            
        }

        .container-main-info{
            position: absolute;
            margin-top: 0px;
            top: 440px;
            left: 6.5%;
            display: block;
            width: 87%;
            .container-1-info{
                width: 100%;
                height: auto;
                display: block;
                //margin-right: 0px;
                border-radius: 18px;
                .img-info{
                    height: auto;
                    img{
                        width: 100%;
                        height: auto;
                    }
                }
                .text-info{
                    h4{
                        display: none;
                    }
                    h2{
                        a{
                            font-size: 26px;
                        }
                    }
                }
            }
            .container-2-info{
                width: 100%;
                height: auto;
                margin-top: 20px;
                .container-block{
                    .img-left{
                        
                        a{
                            img{
                                width: 90px;
                                height: 70px;
                            }
                        }
                    }
                    .orden{
                        
                        h5{
                            font-size: 10px;
                        }
                        h4{
                            a{
                                font-size: 15px;
                            }
                        }
                    }
                }
            }
        }
    }
`