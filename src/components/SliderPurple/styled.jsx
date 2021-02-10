import styled from 'styled-components'

export const Wrapper = styled.div`

    box-sizing: border-box;
    width: 100%;
    margin-top: 300px;
    height: 1100px;
    background: #1a535c;
    margin-bottom:30px;
    padding: 110px 70px 50px 70px;
    .part-top-purple{
        display: flex;
        margin-bottom: 0px;
        height: auto;
        .title-box-purple{
            width: 30%;
            margin-left: 5%;
            h1{
                font-family: 'Roboto', sans-serif; 
                font-size: 45px;
                color: white;
                font-weight: bold;
                line-height: 50px;
                margin:0px;
            }
        }
        .text-box-purple{
            width: 46%;
            margin-left: 4%;
            p{
                font-size: 16px;
                color: #85898f;
                font-weight: 700;
                margin:0px;
            }
        }
    }

    .carousel{
        overflow:hidden;
        .carousel__slider{
            ul{
                li{
                    margin:0px 10px 0px 10px;
                }
            }
            
        }
        a{
            .mini-title{
                h6{
                    font-size: 16px;
                    color: #e4e4e4;
                    margin:20px 0px 10px 0px;
                    letter-spacing:2px;
                }
            }
            .stars-point{
                h1{
                    font-size: 14px;
                    color: orange;
                    text-shadow: none;
                    margin:0px 10px 0px 0px;
                    p{
                        font-size: 12px;
                        color: #85898f;
                        font-family: "Roboto", sans-serif;
                        display: flex;
                        align-items: center;
                        margin:0px;
                    }
                }
            }
            .container-image-slider-purple{
                margin-top: 20px;
                width:80%;
                height:auto;
                
                img{
                    width:100%;
                    border-radius: 10px;
                    
                }
            }
        }

        .carousel__back-button{
                outline: none;
                border: none;
                width: 56px;
                height: 55px;
                border-radius: 50%;
                font-size: 23px;
                background: #ffffffcf;
        }
        .carousel__next-button{
                outline: none;
                border: none;
                width: 56px;
                height: 55px;
                border-radius: 50%;
                font-size: 23px;
                background: #ffffffcf;
        }
    }
    @media (max-width: 1400px){
        height: 960px;
    }
@media (max-width: 1100px){
    box-sizing:border-box;
    padding: 60px 30px 50px 30px;
    .part-top-purple{
        display: block;
        .title-box-purple{
            width: 52%;
            margin-left: 2%;
            h1{
                font-family: "Roboto", sans-serif;
                font-size: 37px;
                color: white;
                font-weight: bold;
                line-height: 42px;
            }
        }
        .text-box-purple{
            width: 80%;
            margin-left: 2%;
        }
    }
    .main-carousel{
        padding-left: 20px;
        padding-right: 20px;
        .carousel-cell{
            width: 225px;
        }
    }
}
@media (max-width: 1200px){
    height:800px;
}
@media (max-width: 1100px){
    height: 700px;
    .part-top-purple{
        .text-box-purple{
            width: 80%;
        }
    }
}
@media (max-width: 768px ){
    height: 940px;
}
@media (max-width: 540px){
    margin-top: 70px;
    .part-top-purple{
        .title-box-purple{
            h1{
                font-family: "Roboto", sans-serif;
                font-size: 24px;
            }
        }
        .text-box-purple{
            width: 95%;
            p{
                font-weight: 100;
                font-size: 14px;
            }
        }
    }
}
@media (max-width: 420px){
    .part-top-purple{
        margin-bottom: 35px;
        .title-box-purple{
            width: 85%;
            h1{
                font-family: "Roboto", sans-serif;
                font-size: 24px;
                line-height: 35px;
            }
        }
        .text-box-purple{
            width: 95%;
        }
    }
}
@media (max-width: 360px){
    .part-top-purple{   
        .title-box-purple{
            width: 85%;
            h1{
                font-family: "Roboto", sans-serif;
                font-size: 24px;
                color: white;
                font-weight: bold;
                line-height: 35px;
            }
        }
    }
}
@media (max-width: 280px){
    margin-top: 160px;
    .part-top-purple{
        margin-bottom: 35px; 
        .text-box-purple{
            width: 95%;
        }
    }
}

`