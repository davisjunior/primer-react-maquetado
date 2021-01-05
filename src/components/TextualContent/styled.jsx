import styled from 'styled-components'

export const Wrapper = styled.div`
    .container-texto-page{
        box-sizing: border-box;
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
                            box-sizing:border-box;
                            
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
                                padding:0;
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
                    
                    svg{
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
                    width: 43%;
                    height: auto;
                    background: #f2f5fa;
                    box-sizing:border-box;
                    
                    .do{
                        font-size: 22px;
                        color: #262b33;
                        font-weight: bold;
                        font-family: "Roboto", sans-serif;
                        margin-bottom: 20px;
                        svg{
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
                        svg{
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
                    svg{
                        margin-left: 2%;
                        font-size: 20px;
                    }
                }
            }
            .container-box-and-buttom{
                box-sizing: border-box;
                width: 100%;
                margin-top: 50px;
                border-radius: 15px 15px 0px 0px;
                a{
                    .box-and-buttom{
                        box-sizing: border-box;
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
                                height: 98.5%;
                                overflow: hidden;
                            }
                        }
                        .box-text{
                            box-sizing: border-box;
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
                        box-sizing: border-box;
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
                            svg{
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
        box-sizing: border-box;
        width: 100%;
        height: auto;
        background: white;
        padding: 70px 8% 0px 8%;
        img{
            width: 100%;
        }
    }
@media (max-width: 1100px){
    .container-texto-page{
        padding: 70px 6% 0px 6%;
        .text-info-left{
            width: 100%;
            p{
                font-size: 18px;
            }
            ol{
                li{
                    font-size: 18px;
                    p{
                        font-size: 18px;
                    }
                }
            }
            .box-green{
                padding: 20px 20px 20px 30px;
                box-sizing:border-box;
                p{
                    font-size: 12px;
                    i{
                        font-size: 14px;
                    }
                }
                span{
                    font-size: 17px;
                    color: #262b33;
                    margin-bottom: 10px;
                    line-height: 40px;
                    letter-spacing: 1.5px;
                    font-weight: 600;
                }
            }
        }
        .image-sticky{
            display: none;
        }
    }
}
@media (max-width: 768px){
    .container-texto-page{
        padding: 70px 6% 0px 6%;
        .text-info-left{
            width: 100%;
            p{
                font-size: 18px;
            }
            ol{
                li{
                    font-size: 18px;
                    p{
                        font-size: 18px;
                    }
                }
            }
            .container-list-horizontal{
                .do-dont{
                    width:39%;
                    box-sizing:border-box;
                }
            }
            .box-green{
                padding: 20px 20px 20px 30px;
                box-sizing:border-box;
                p{
                    font-size: 12px;
                    i{
                        font-size: 14px;
                    }
                }
                span{
                    font-size: 17px;
                    color: #262b33;
                    margin-bottom: 10px;
                    line-height: 40px;
                    letter-spacing: 1.5px;
                    font-weight: 600;
                }
            }
        }
        .image-sticky{
            display: none;
        }
    }
}
@media (max-width: 540px){
    .container-texto-page{
        padding: 70px 6% 0px 6%;
        .text-info-left{
            width: 100%;
            p{
                font-size: 18px;
            }
            .container-cake{
                a{
                    .cakes{
                        display: block;
                        img{
                            width: 100%;
                            height: auto;
                            border-radius: 15px 15px 0px 0px;
                        }
                    }
                }
            }
            ol{
                li{
                    font-size: 18px;
                    p{
                        font-size: 18px;
                    }
                }
            }
            .box-green{
                padding: 20px 20px 20px 30px;
                box-sizing:border-box;
                p{
                    font-size: 12px;
                    i{
                        font-size: 14px;
                    }
                }
                span{
                    font-size: 17px;
                    color: #262b33;
                    margin-bottom: 10px;
                    line-height: 40px;
                    letter-spacing: 1.5px;
                    font-weight: 600;
                }
            }
            .container-list-horizontal{
                display: block;
                .do-dont{
                    width: 100%;
                    box-sizing:border-box;
                }
            }
            .container-box-and-buttom{
                width: 80%;
                margin-top: 50px;
                left: 0;
                right: 0;
                margin: auto;
                a{
                    .box-and-buttom{
                        padding: 12px 7% 40px 6%;
                        display: block;
                        width: 100%;
                        background-color: #f2efea;
                        text-align: center;
                        .box-img{
                            margin-bottom: -5px;
                            width: 100%;
                        }
                        .box-text{
                            border-top: 1px solid black;
                            width: 100%;
                            span{
                                font-weight: 100;
                            }
                        }
                    }
                }
            }
        }
        .image-sticky{
            display: none;
        }
    }
}
@media (max-width: 420px){
    .container-texto-page{
        padding: 70px 6% 0px 6%;
        .text-info-left{
            width: 100%;
            p{
                font-size: 18px;
            }
            .container-cake{
                a{
                    .cakes{
                        display: block;
                        img{
                            width: 100%;
                            height: auto;
                            border-radius: 15px 15px 0px 0px;
                        }
                    }
                }
            }
            ol{
                li{
                    font-size: 18px;
                    p{
                        font-size: 18px;
                    }
                }
            }
            .box-green{
                padding: 20px 20px 20px 30px;
                box-sizing:border-box;
                p{
                    font-size: 12px;
                    i{
                        font-size: 14px;
                    }
                }
                span{
                    font-size: 17px;
                    color: #262b33;
                    margin-bottom: 10px;
                    line-height: 40px;
                    letter-spacing: 1.5px;
                    font-weight: 600;
                }
            }
            .container-list-horizontal{
                display: block;
                .do-dont{
                    width: 100%;
                    box-sizing:border-box;
                }
            }
            .container-box-and-buttom{
                width: 80%;
                margin-top: 50px;
                left: 0;
                right: 0;
                margin: auto;
                a{
                    .box-and-buttom{
                        padding: 12px 7% 40px 6%;
                        display: block;
                        width: 100%;
                        background-color: #f2efea;
                        text-align: center;
                        .box-img{
                            margin-bottom: -5px;
                            width: 100%;
                        }
                        .box-text{
                            border-top: 1px solid black;
                            width: 100%;
                            span{
                                font-weight: 100;
                            }
                        }
                    }
                }
            }
        }
        .image-sticky{
            display: none;
        }
    }
}
@media (max-width: 360px){
    .container-texto-page{
        padding: 70px 6% 0px 6%;
        .text-info-left{
            width: 100%;
            p{
                font-size: 18px;
            }
            .container-cake{
                a{
                    .cakes{
                        display: block;
                        img{
                            width: 100%;
                            height: auto;
                            border-radius: 15px 15px 0px 0px;
                        }
                    }
                }
            }
            ol{
                li{
                    font-size: 18px;
                    p{
                        font-size: 18px;
                    }
                }
            }
            .box-green{
                padding: 20px 20px 20px 30px;
                box-sizing:border-box;
                p{
                    font-size: 12px;
                    i{
                        font-size: 14px;
                    }
                }
                span{
                    font-size: 17px;
                    color: #262b33;
                    margin-bottom: 10px;
                    line-height: 40px;
                    letter-spacing: 1.5px;
                    font-weight: 600;
                }
            }
            .container-list-horizontal{
                display: block;
                .do-dont{
                    width: 100%;
                    box-sizing:border-box;
                }
            }
            .container-box-and-buttom{
                width: 80%;
                margin-top: 50px;
                left: 0;
                right: 0;
                margin: auto;
                a{
                    .box-and-buttom{
                        padding: 12px 7% 40px 6%;
                        display: block;
                        width: 100%;
                        background-color: #f2efea;
                        text-align: center;
                        .box-img{
                            margin-bottom: -5px;
                            width: 100%;
                        }
                        .box-text{
                            border-top: 1px solid black;
                            width: 100%;
                            span{
                                font-weight: 100;
                            }
                        }
                    }
                }
            }
        }
        .image-sticky{
            display: none;
        }
    }
}
@media (max-width: 280px){
    .container-texto-page{
        padding: 70px 6% 0px 6%;
        .text-info-left{
            width: 100%;
            p{
                font-size: 18px;
            }
            .container-cake{
                a{
                    .cakes{
                        display: block;
                        img{
                            width: 100%;
                            height: auto;
                            border-radius: 15px 15px 0px 0px;
                        }
                    }
                }
            }
            ol{
                li{
                    font-size: 18px;
                    p{
                        font-size: 18px;
                    }
                }
            }
            .box-green{
                padding: 20px 20px 20px 30px;
                box-sizing:border-box;
                p{
                    font-size: 12px;
                    i{
                        font-size: 14px;
                    }
                }
                span{
                    font-size: 17px;
                    color: #262b33;
                    margin-bottom: 10px;
                    line-height: 40px;
                    letter-spacing: 1.5px;
                    font-weight: 600;
                }
            }
            .container-list-horizontal{
                display: block;
                .do-dont{
                    width: 100%;
                    box-sizing:border-box;
                }
            }
            .container-box-and-buttom{
                width: 80%;
                margin-top: 50px;
                left: 0;
                right: 0;
                margin: auto;
                a{
                    .box-and-buttom{
                        padding: 12px 7% 40px 6%;
                        display: block;
                        width: 100%;
                        background-color: #f2efea;
                        text-align: center;
                        .box-img{
                            margin-bottom: -5px;
                            width: 100%;
                        }
                        .box-text{
                            border-top: 1px solid black;
                            width: 100%;
                            span{
                                font-weight: 100;
                            }
                        }
                    }
                }
            }
        }
        .image-sticky{
            display: none;
        }
    }
}
`