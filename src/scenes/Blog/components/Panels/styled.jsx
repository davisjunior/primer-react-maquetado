
import styled from 'styled-components'

export const Wrapper = styled.div`
    .container-panels-box{
        display: block;
        padding-right: 9%;
        padding-left: 9%;
        box-sizing:border-box;
        margin-bottom: 165px;
        margin-top: 220px;

        .title-and-button{
            display: flex;
            justify-content: space-between;
            margin-bottom: 40px;
            h1{
                font-size: 52px;
                color: #707070;
                font-family: 'Mulish',sans-serif;
                margin-right: 66%;
                margin-bottom:0px;
            }
            .boton-java{
                margin-top: 10px;
                a{
                    margin-right: 15px;
                    svg{
                        color: #1a535c;
                        font-size: 35px;
                    }
                }
            }
        }
        .panels{
            display: flex;
            

            .panels-content{
                width: 30%;
                display: flex;  ////
                flex-direction: column;
                justify-content: space-between;
                height: auto;
                background: white;
                box-shadow: 0px 0px 30px #d1d1d1;
                border-radius: 15px;
                box-sizing:border-box;
                padding: 45px 20px 45px 20px;
                margin-right: 20px;
                margin-left: 20px;
                ul{
                    padding:0px;
                    h3{
                        margin-bottom: 40px;
                        margin-top:0px;
                        font-size: 21px;
                        font-family: 'Mulish',sans-serif;
                        color: #707070;
                        text-align: center;
                    }
                    li{
                        list-style: none;
                        display: flex;
                        margin-bottom: 30px;
                        img{
                            width: 55px;
                            height: 40px;
                            border-radius: 15px 15px 0px 15px;
                            margin-right: 15px;
                        }
                        span{
                            font-weight: 300;
                            font-size: 16px;
                            font-family: 'Mulish',sans-serif;
                            color: #707070;
                        }
                    }
                }
                .Button-panels-1{
                    text-align: center;
                    margin-top: 0px;
                    
                    a{
                        font-weight:600;
                        font-size:16px;
                    }
                }
                .Button-panels-2{
                    text-align: center;
                    margin-top: 0px;
                    
                    a{
                        font-weight:600;
                        font-size:16px;
                    }
                }
                .Button-panels-3{
                    text-align: center;
                    margin-top: 0px;
                    
                    a{
                        font-weight:600;
                        font-size:16px;
                    }
                }
            }
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 1080px){
        .container-panels-box{
            width: 100% ;
            padding-right: 2% ;
            padding-left: 2% ;
            .title-and-button{
                h1{
                    margin-right: 57% ;
                }
            }
            .panels{
                min-width: 100%;
                
                .panels-content{
                    min-width: 46%;
                }
                .panels-content:nth-child(3){
                    display: none ;
                }
            }
        }
    }
    @media (max-width:767px){
        .container-panels-box{
                padding:0%;
                .title-and-button{
                    
                    h1{
                        font-size: 29px;
                        margin-right: 5%;
                        margin-top: 14px;
                        margin-left: 5%;
                    }
                }
                .panels{
                    width: 100%;
                    .panels-content{
                        width: 100%;
                        height: auto;
                        .Button-panels-1{
                            margin-bottom: 10px;
                        }
                    }
                    .panels-content:nth-child(2){
                        display: none;
                    }
                    .panels-content:nth-child(3){
                        display: none;
                    }
                    
                }
            }
    }
`
