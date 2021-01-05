import styled from 'styled-components'

export const Wrapper = styled.div`

    box-sizing: border-box;
    width: 100%;
    margin-top: 130px;
    height: auto;
    background: #151770;
    padding: 135px 70px 50px 70px;
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
            }
        }
        .text-box-purple{
            width: 46%;
            margin-left: 4%;
            p{
                font-size: 16px;
                color: #85898f;
                font-weight: 700;
            }
        }
    }

    .carousel{
        overflow:hidden;
        a{
            .mini-title{
                h6{
                    font-size: 25px;
                    color: #e4e4e4;
                    margin-bottom: 10px;
                }
            }
            .stars-point{
                h1{
                    font-size: 14px;
                    color: orange;
                    text-shadow: none;
                    margin-right: 10px;
                    p{
                        font-size: 12px;
                        color: #85898f;
                        font-family: "Roboto", sans-serif;
                        display: flex;
                        align-items: center;
                    }
                }
            }
            .container-image-slider-purple{
                margin-top: 20px;
                width:270px;
                height:445px;
                
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
@media (max-width: 768px){
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
@media (max-width: 540px){
    box-sizing:border-box;
    padding: 60px 30px 50px 30px;
    .part-top-purple{
        display: block;
        .title-box-purple{
            width: 52%;
            margin-left: 2%;
            h1{
                font-family: "Roboto", sans-serif;
                font-size: 24px;
                color: white;
                font-weight: bold;
                line-height: 42px;
            }
        }
        .text-box-purple{
            width: 95%;
            margin-left: 2%;
            p{
                font-weight: 100;
                font-size: 14px;
            }
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
@media (max-width: 420px){
    box-sizing:border-box;
    padding: 60px 30px 50px 30px;
    .part-top-purple{
        display: block;
        margin-bottom: 35px;
        .title-box-purple{
            width: 85%;
            margin-left: 2%;
            h1{
                font-family: "Roboto", sans-serif;
                font-size: 24px;
                color: white;
                font-weight: bold;
                line-height: 35px;
            }
        }
        .text-box-purple{
            width: 95%;
            margin-left: 2%;
            p{
                font-weight: 100;
                font-size: 14px;
            }
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
@media (max-width: 360px){
    box-sizing:border-box;
    padding: 60px 30px 50px 30px;
    .part-top-purple{
        display: block;
        margin-bottom: 35px;
        .title-box-purple{
            width: 85%;
            margin-left: 2%;
            h1{
                font-family: "Roboto", sans-serif;
                font-size: 24px;
                color: white;
                font-weight: bold;
                line-height: 35px;
            }
        }
        .text-box-purple{
            width: 95%;
            margin-left: 2%;
            p{
                font-weight: 100;
                font-size: 14px;
            }
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
@media (max-width: 280px){
    box-sizing:border-box;
    padding: 60px 30px 50px 30px;
    .part-top-purple{
        display: block;
        margin-bottom: 35px;
        .title-box-purple{
            width: 85%;
            margin-left: 2%;
            h1{
                font-family: "Roboto", sans-serif;
                font-size: 24px;
                color: white;
                font-weight: bold;
                line-height: 35px;
            }
        }
        .text-box-purple{
            width: 95%;
            margin-left: 2%;
            p{
                font-weight: 100;
                font-size: 14px;
            }
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

`