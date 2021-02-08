
import styled from 'styled-components'

export const Wrapper = styled.div`
    .container-library{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-left: 7%;
        padding-right: 5%;
        box-sizing:border-box;
        margin-bottom: 80px;
        margin-top: 80px;

        .library-left{
            width: 60%;

            .small-tirle{
                margin-bottom: 25px;
                width: auto;
                h5{
                    font-size: 16px;
                    font-family: "Josefin Sans", sans-serif;
                    color: #4c43f5;
                }
            }
            .tall-title{
                width: auto;
                display: flex;
                margin-bottom: 50px;
                
                h1{
                    font-size: 52px;
                    color: #070606;
                }
                .button-right-title{
                    margin-left: 13%;
                    margin-top: 14px;
                    a{
                        font-size: 12px;
                        text-decoration: none;
                        color: #fcfcfc;
                        font-family: "Josefin Sans", sans-serif;
                        background: linear-gradient(to right,#4c43f5 ,#3ddc97);
                        padding: 12px 15px 9px 15px;
                        border-radius: 15px;
                        box-sizing:border-box;
                    }
                }
            }
            .library-1{
                width: 93%;
                .book{
                    width: 100%;
                    height: auto;
                    display: flex;
                    box-shadow: 0 0 15px #cbcaca;
                    border-radius: 17px;
                    padding: 20px;
                    box-sizing:border-box;
                    margin-bottom: 20px;

                    .image-book{
                        margin-right: 4%;
                        a{
                            img{
                                width: 248px;
                                height: 200px;
                                border-radius: 10px;
                            }
                        }
                    }
                    .text-book{
                        width: auto;
                        height: auto;
                        margin-top: 20px;
                        
                        h2{
                            a{
                                font-size: 21px;
                                text-decoration: none;
                                color: #070606;
                                font-family: "Josefin Sans", sans-serif;
                            }
                        }
                        p{
                            font-size: 17px;
                            color: #070606;
                            font-family: "Josefin Sans", sans-serif;
                            font-weight: 300;
                            margin-top:15px;
                            line-height: 22px;
                        }
                    }
                }
            }
        }
        .library-right{
            width: 35%;
            height: auto;
            margin-right: 2%;
            .small-tirle{
                width: auto;
                height: auto;
                margin-bottom: 25px;
                h5{
                    font-size: 16px;
                    font-family: "Josefin Sans", sans-serif;
                    color: #4c43f5;
                }
            }

            .tall-title{
                height: auto;
                height: auto;
                display: flex;
                margin-bottom: 50px;
                
                h1{
                    font-size: 52px;
                    color: #070606;
                }
                .button-right-title{
                    margin-left: 20px;
                    margin-top: 14px;
                    a{
                        font-size: 12px;
                        text-decoration: none;
                        color: #fcfcfc;
                        font-family: "Josefin Sans", sans-serif;
                        background: linear-gradient(to right,#4c43f5 ,#3ddc97);
                        padding: 12px 15px 9px 15px;
                        border-radius: 15px;
                        box-sizing:border-box;
                    }
                }
            }
            .library-2{
                width: 100%;
                height: auto;
                
                .book-right{
                    width: 100%;
                    height: auto;

                    .img-book-right{
                        width: 93%;
                        height: 186px;
                        overflow: hidden;
                        a{
                            img{
                                width: 100%;
                                height: 100%;
                                border-radius: 15px;
                            }
                        }
                    }
                    .text-book-right{
                        width: 93%;
                        margin-top: 10px;
                        margin-bottom: 20px;
                        h2{
                            a{
                                text-decoration: none;
                                color: #070606;
                                font-size: 21px;
                            }
                        }
                    }
                }
            }
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 1080px){
        .container-library{
            min-width: 100%;
            padding-left: 3%;
            padding-right: 2%;
            flex-direction: column;
        
            .library-left{
                min-width: 100%;
                .library-1{
                    min-width: 100%;
                }
            }
            .library-right{
                min-width: 100%;
                margin-top: 40px;
                .library-2{
                    display: flex;
                    margin-left: 0px;
                    .book-right{
                        
                        .img-book-right{
                            height:135px ;
                            a{
                                img{
                                    height: auto ;
                                }
                            }
                        }
                        .text-book-right{
                            h2{
                                a{
                                    font-size: 15px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    @media (max-width:767px){
        .container-library{
            margin-top: 800px;
            display: block;
            .library-left{
                width: 100%;
                margin-bottom: 60px;

                .tall-title{
                    display: flex;
                    justify-content: space-between;
                    h1{
                        font-size: 32px;
                        font-weight: 800;
                    }
                    .button-right-title{
                        margin-left: 0%;
                    }
                }
                
                .library-1{
                    width: 100%;
                    height: auto;
                    .book{
                        display: block;
                        .image-book{
                            width: 100%;
                            height: auto;
                            a{
                                img{
                                    width: 100%;
                                    height: auto;
                                }
                            }
                        }
                    }
                    .book:nth-child(2){
                        display: none;
                    }
                    .book:nth-child(3){
                        display: none;
                    }
                }
            }
            .library-right{
                width: 100%;
                .tall-title{
                    display: flex;
                    justify-content: space-between;
                    h1{
                        font-size: 32px;
                        font-weight: 800;
                    }
                    .button-right-title{
                        margin-left: 0%     ;
                    }
                }
                .library-2{
                    .book-right{
                        .img-book-right{
                            width:100%;
                        }
                    }
                    .book-right:nth-child(2){
                        display: none;
                    }
                    .book-right:nth-child(3){
                        display: none;
                    }
                }

            }
        }
    }
    @media (max-width:540px){
        .container-library{
            margin-top: 670px;
        }
    }
`