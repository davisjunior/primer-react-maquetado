import styled from 'styled-components'

export const Wrapper = styled.div`
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    width: 31.5%;
    height: auto;
    
    .boton-flash{

        a{
            font-size: 16px;
            color: white;
            font-weight: 600;
            background: #2196f3;
            position: absolute;
            align-items: center;
            justify-content: center;
            top: -170px;
            bottom: 0;
            left: 0;
            right: 0;
            height: 50px;
            width: 190px;
            border-radius: 5px;
            border: none;
            margin: auto;
            opacity: 0;
            transition: all ease-in-out 0.3s;
            transform: translateY(100%);
            &:hover{
                opacity: 1;
                transform: translateY(0);
                background: #1c79c5;
                color: white;
                
            } 
        }
        
    }
    
    .container-cv{
        box-sizing: border-box;
        background: #f2f5f6;
        width: 100%;
        padding-left: 35px;
        padding-right: 35px;
        padding-top: 35px;
        padding-bottom: 20px;
        .cv{
            width: 100%;
            a{
                img{
                    width: 100%;
                }
            }
            
        }
        .down-cv{
            
            margin-top: 15px;
            display: flex;
            justify-content: space-between;
            .circle-container{
                display: flex;
                .circle:nth-child(1){
                    width: 20px;
                    margin-right: 15px;
                    background: black;
                    border: 5px solid black;
                    height: 20px;
                    border-radius: 50%;
                    transition: 0.5s ease-in-out;
                    &:hover{
                        border: 5px solid black;
                        background: transparent;
                        transition: 0.5s ease-in-out;
                    }
                }
                .circle:nth-child(2){
                    width: 20px;
                    margin-right: 15px;
                    background: #673AB7;
                    border: 5px solid #673AB7;
                    height: 20px;
                    border-radius: 50%;
                    transition: 0.5s ease-in-out;
                    &:hover{
                        border: 5px solid #673AB7;
                        background: transparent;
                        transition: 0.5s ease-in-out;
                    }
                }
                .circle:nth-child(3){
                    width: 20px;
                    margin-right: 15px;
                    background: #2196F3;
                    border: 5px solid #2196F3;
                    height: 20px;
                    border-radius: 50%;
                    transition: 0.5s ease-in-out;
                    &:hover{
                        border: 5px solid #2196F3;
                        background: transparent;
                        transition: 0.5s ease-in-out;
                    }
                }
                .circle:nth-child(4){
                    width: 20px;
                    margin-right: 15px;
                    background: #22A860;
                    border: 5px solid #22A860;
                    height: 20px;
                    border-radius: 50%;
                    transition: 0.5s ease-in-out;
                    &:hover{
                        border: 5px solid #22A860;
                        background: transparent;
                        transition: 0.5s ease-in-out;
                    }
                }
                .circle:nth-child(5){
                    width: 20px;
                    margin-right: 0px;
                    background: #FF4D4D;
                    border: 5px solid #FF4D4D;
                    height: 20px;
                    border-radius: 50%;
                    transition: 0.5s ease-in-out;
                    &:hover{
                        border: 5px solid #FF4D4D;
                        background: transparent;
                        transition: 0.5s ease-in-out;
                    }
                }
            }
            .option-cv-doc{
                a{
                    
                    color: white;
                    background: #b8becc;
                    padding: 3px;
                    letter-spacing: 4px;
                    font-weight: bold;
                    border-radius: 3px;
                    font-size: 12px;
                }
                a:nth-child(1){
                    margin-right: 10px;
                }
            }
        }
    }
    .container-description-cv{
        margin-top: 20px;
        h1{
            margin-bottom: 7px;
            color: #262b33;
            font-size: 18px;
            font-family: "Roboto", sans-serif;
            transition: 0.5s ease;
            &:hover{
                color: #2196f3;
                transition: 0.5s ease;
            }
        }
        span{

            font-size: 12px;
            font-weight: 300;
            color: #8b8b8b;
            text-shadow: none;
            transition: 0.5s ease;
            &:hover{
                color: #7a8599;
                transition: 0.5s ease;
            }
        }
    }

&:nth-child(2){
    margin-right: 12px;
    margin-left: 12px;
}
@media (max-width: 1100px){
    .container-cv{
        padding-bottom: 20px;
        .down-cv{
            .circle-container{
                
                .circle:nth-child(1){
                    width: 5px;
                    height: 5px;
                }
                .circle:nth-child(2){
                    width: 5px;
                    height: 5px;
                }
                .circle:nth-child(3){
                    width: 5px;
                    height: 5px;
                }
                .circle:nth-child(4){
                    width: 5px;
                    height: 5px;
                }
                .circle:nth-child(5){
                    width: 5px;
                    height: 5px;
                    margin-right:5px;
                }
            }
            .option-cv-doc{
                margin-top: -4px;
                a{
                    font-size: 10px;
                }
            }
        }
    }
    .container-description-cv{
        .title-black{
            font-size: 20px;
        }
        .text-span{
            font-size: 14px;
        }
    }
}
@media (max-width: 768px){
    width:48%;

    .container-cv{
        padding-bottom: 20px;
        .down-cv{
            .circle-container{
                
                .circle:nth-child(1){
                    width: 5px;
                    height: 5px;
                }
                .circle:nth-child(2){
                    width: 5px;
                    height: 5px;
                }
                .circle:nth-child(3){
                    width: 5px;
                    height: 5px;
                }
                .circle:nth-child(4){
                    width: 5px;
                    height: 5px;
                }
                .circle:nth-child(5){
                    width: 5px;
                    height: 5px;
                    margin-right:5px;
                }
            }
            .option-cv-doc{
                margin-top: -4px;
                a{
                    font-size: 10px;
                }
            }
        }
    }
    .container-description-cv{
        .title-black{
            font-size: 20px;
        }
        .text-span{
            font-size: 14px;
        }
    }
}
@media (max-width: 540px){
    width:100%;
    &:nth-child(2){
    margin-right: 0px;
    margin-left: 0px;
    }
    .container-cv{
        padding-bottom: 30px;
        .down-cv{
            .circle-container{
                
                .circle:nth-child(1){
                    width: 5px;
                    height: 5px;
                }
                .circle:nth-child(2){
                    width: 5px;
                    height: 5px;
                }
                .circle:nth-child(3){
                    width: 5px;
                    height: 5px;
                }
                .circle:nth-child(4){
                    width: 5px;
                    height: 5px;
                }
                .circle:nth-child(5){
                    width: 5px;
                    height: 5px;
                }
            }
            .option-cv-doc{
                margin-top: -4px;
                overflow:hidden;
                a{
                    font-size: 7px;
                }
            }
        }
        .container-description-cv{
            margin-bottom: 40px;
            .title-black{
                font-size: 20px;
            }
            .text-span{
                font-size: 14px;
            }
        }
    }
}

@media (max-width: 420px){
    width:100%;
    &:nth-child(2){
    margin-right: 0px;
    margin-left: 0px;
    }
    .container-cv{
        padding-bottom: 30px;
        .down-cv{
            .circle-container{
                
                .circle:nth-child(1){
                    width: 5px;
                    height: 5px;
                }
                .circle:nth-child(2){
                    width: 5px;
                    height: 5px;
                }
                .circle:nth-child(3){
                    width: 5px;
                    height: 5px;
                }
                .circle:nth-child(4){
                    width: 5px;
                    height: 5px;
                }
                .circle:nth-child(5){
                    width: 5px;
                    height: 5px;
                }
            }
            .option-cv-doc{
                margin-top: -4px;
                overflow:hidden;
                a{
                    font-size: 7px;
                }
            }
        }
        .container-description-cv{
            margin-bottom: 40px;
            .title-black{
                font-size: 20px;
            }
            .text-span{
                font-size: 14px;
            }
        }
    }
}
@media (max-width: 360px){
    width:100%;
    &:nth-child(2){
    margin-right: 0px;
    margin-left: 0px;
    }
    .container-cv{
        padding-bottom: 30px;
        .down-cv{
            .circle-container{
                
                .circle:nth-child(1){
                    width: 5px;
                    height: 5px;
                }
                .circle:nth-child(2){
                    width: 5px;
                    height: 5px;
                }
                .circle:nth-child(3){
                    width: 5px;
                    height: 5px;
                }
                .circle:nth-child(4){
                    width: 5px;
                    height: 5px;
                }
                .circle:nth-child(5){
                    width: 5px;
                    height: 5px;
                }
            }
            .option-cv-doc{
                margin-top: -4px;
                overflow:hidden;
                a{
                    font-size: 7px;
                }
            }
        }
        .container-description-cv{
            margin-bottom: 40px;
            .title-black{
                font-size: 20px;
            }
            .text-span{
                font-size: 14px;
            }
        }
    }
}
@media (max-width: 280px){
    width:100%;
    &:nth-child(2){
    margin-right: 0px;
    margin-left: 0px;
    }
    .container-cv{
        padding-bottom: 30px;
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 15px;
        .down-cv{
            .circle-container{
                
                .circle:nth-child(1){
                    width: 5px;
                    height: 5px;
                }
                .circle:nth-child(2){
                    width: 5px;
                    height: 5px;
                }
                .circle:nth-child(3){
                    width: 5px;
                    height: 5px;
                }
                .circle:nth-child(4){
                    width: 5px;
                    height: 5px;
                }
                .circle:nth-child(5){
                    width: 5px;
                    height: 5px;
                }
            }
            .option-cv-doc{
                margin-top: -4px;
                overflow:hidden;
                a{
                    font-size: 7px;
                }
            }
        }
        .container-description-cv{
            margin-bottom: 40px;
            .title-black{
                font-size: 20px;
            }
            .text-span{
                font-size: 14px;
            }
        }
    }
}
`