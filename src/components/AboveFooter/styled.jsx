import styled from 'styled-components'

export const Wrapper = styled.div`

    box-sizing: border-box;
    width: 100%;
    height: auto;
    background: #f2f5fa;
    padding-bottom: 150px;
    display: flex;
    .img-cv-pre-footer{
        display: flex;
        width: 100%;
        position: relative;
        margin-top: 110px;
        .img-cv-one{
            box-shadow: 0px 0px 5px 0px rgb(197, 197, 197);
            border-radius: 10px;
            position: absolute;
            left: 16.3%;
            top: 7.3%;
            transform: rotate(-22.2deg);
            width: 300px;
            height: 380px;
            img{
                border-radius: 10px;
                width: 100%;
                height: 100%;
            }
        }
        .img-cv-two{
            box-shadow: 0px 0px 5px 0px rgb(197, 197, 197);
            border-radius: 10px;
            position: absolute;
            left: 28.3%;
            top: 4.5%;
            transform: rotate(-4.51deg);
            width: 300px;
            height: 380px;
            img{
                border-radius: 10px;
                width: 100%;
                height: 100%;
            }
        }
        .img-cv-three{
            box-shadow: 0px 0px 5px 0px rgb(197, 197, 197);
            border-radius: 10px;
            position: absolute;
            left: 40.9%;
            top: 15.9%;
            transform: rotate(9.87deg);
            width: 300px;
            height: 380px;
            img{
                border-radius: 10px;
                width: 100%;
                height: 100%;
            }
        }
    }
    .text-right-img-cv{
        box-sizing: border-box;
        width: 63%;
        padding-top: 290px;
        padding-right: 13%;
        h1{
            font-family: "Roboto", sans-serif;
            font-size: 40px;
            color: #262b33;
            font-weight: bold;
            margin-bottom: 20px;
        }
        p{
            font-size: 16px;
            color: #373b41;
            font-weight: 700;
            margin-bottom: 28px
        }
    }


@media (max-width: 1100px){
    
    padding-bottom: 90px;
    .img-cv-pre-footer{
        margin-top: 40px;
        .img-cv-one{
            width: 150px;
            height: 205px;
        }
        .img-cv-two{
            width: 150px;
            height: 205px;
        }
        .img-cv-three{
            width: 150px;
            height: 205px;
        }
    }
    .text-right-img-cv{
        padding-top: 40px;
        width: 100%;
        padding-right: 3%;
        h1{
            font-family: "Roboto", sans-serif;
            font-size: 35px;
            color: #262b33;
            font-weight: bold;
            margin-bottom: 15px;
        }
    }
    
}
@media (max-width: 768px){
    padding-bottom: 90px;
    .img-cv-pre-footer{
        margin-top: 40px;
        .img-cv-one{
            width: 150px;
            height: 205px;
        }
        .img-cv-two{
            width: 150px;
            height: 205px;
        }
        .img-cv-three{
            width: 150px;
            height: 205px;
        }
    }
    .text-right-img-cv{
        padding-top: 40px;
        width: 100%;
        padding-right: 3%;
        h1{
            font-family: "Roboto", sans-serif;
            font-size: 35px;
            color: #262b33;
            font-weight: bold;
            margin-bottom: 15px;
        }
    }
}
@media (max-width: 540px){
    padding-bottom: 90px;
    .img-cv-pre-footer{
        margin-top: 40px;
        .img-cv-one{
            width: 150px;
            height: 205px;
        }
        .img-cv-two{
            width: 150px;
            height: 205px;
        }
        .img-cv-three{
            width: 150px;
            height: 205px;
        }
    }
    .text-right-img-cv{
        padding-top: 40px;
        width: 70%;
        padding-right: 3%;
        h1{
            font-family: "Roboto", sans-serif;
            font-size: 23px;
            color: #262b33;
            font-weight: bold;
            margin-bottom: 15px;
        }
        p{
            font-size: 14px;
            font-weight: 100;
        }
    }
}
@media (max-width: 420px){
    display: block;
    padding-bottom: 90px;
    text-align: center;
    padding-top: 10px;
    .img-cv-pre-footer{
        margin-top: 40px;
        .img-cv-one{
            width: 150px;
            height: 205px;
        }
        .img-cv-two{
            width: 150px;
            height: 205px;
        }
        .img-cv-three{
            width: 150px;
            height: 205px;
        }
    }
    .text-right-img-cv{
        padding-top: 275px;
        width: 70%;
        left: 0;
        right: 0;
        margin: auto;
        h1{
            font-family: "Roboto", sans-serif;
            font-size: 23px;
            color: #262b33;
            font-weight: bold;
            margin-bottom: 15px;
                }
        p{
            font-size: 14px;
            font-weight: 100;
        }
    }
}
@media (max-width: 360px){
    display: block;
    padding-bottom: 90px;
    text-align: center;
    padding-top: 10px;
    .img-cv-pre-footer{
        margin-top: 40px;
        .img-cv-one{
            width: 150px;
            height: 205px;
        }
        .img-cv-two{
            width: 150px;
            height: 205px;
        }
        .img-cv-three{
            width: 150px;
            height: 205px;
        }
    }
    .text-right-img-cv{
        padding-top: 275px;
        width: 70%;
        left: 0;
        right: 0;
        margin: auto;
        h1{
            font-family: "Roboto", sans-serif;
            font-size: 23px;
            color: #262b33;
            font-weight: bold;
            margin-bottom: 15px;
        }
        p{
            font-size: 14px;
            font-weight: 100;
        }
    }
}
@media (max-width: 280px){
    display: block;
    padding-bottom: 90px;
    text-align: center;
    padding-top: 10px;
    .img-cv-pre-footer{
        margin-top: 40px;
        .img-cv-one{
            width: 150px;
            height: 205px;
        }
        .img-cv-two{
            width: 150px;
            height: 205px;
        }
        .img-cv-three{
            width: 150px;
            height: 205px;
        }
    }
    .text-right-img-cv{
        padding-top: 275px;
        width: 70%;
        left: 0;
        right: 0;
        margin: auto;
        h1{
            font-family: "Roboto", sans-serif;
            font-size: 23px;
            color: #262b33;
            font-weight: bold;
            margin-bottom: 15px;
        }
        p{
            font-size: 14px;
            font-weight: 100;
        }
    }
}
`