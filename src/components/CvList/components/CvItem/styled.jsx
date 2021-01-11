import styled from 'styled-components'

export const Wrapper = styled.div`
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    width: 31.5%;
    height: auto;
    position:relative;
    
    &:nth-child(3n+2) {
        .container-cv{
            .cv {
                &::before {
                    
                    background: #4ECDC4; 
                    left:10px;
                    width: 95%;
                } 
            }
        }
    }

    &:nth-child(3n+3) {
        .container-cv{
            .cv {
                &::before {
                    background: #FEE66E; 
                    width: 95%;
                    left:60px;
                } 
            }
        }
    }

    
    .container-cv{
        box-sizing: border-box;
        width: 100%;
        height:90%;
        padding-left: 35px;
        padding-right: 35px;
        padding-top: 35px;
        padding-bottom: 20px;
        
        position:relative;
        .cv{
            position:relative;
            width: 100%;
            z-index: 1;
            

            &::before {
                content:'';
                display:block;
                position:absolute;
                //width:100%;
                width: 95%;
                //left:-30px;
                left: -40px;
                top:-30px;
                bottom:-30px;
                z-index: -1;
                background: #FEE66E;  
                border-radius: 100px 0px 100px 0px;
            }

            .boton-flash{
                position: absolute;
                top: 60%;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                z-index: 99999;
                text-align: center;
                opacity:0;
                transition:0.5s ease;
            }

            &:hover{
                .boton-flash{
                    position: absolute;
                    top: 50%;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    margin: auto;
                    z-index: 99999;
                    text-align: center;
                    opacity:1;
                    transition:0.5s ease;
                }
                a{
                    .down-cv{
                        opacity:1;
                        transition:0.5s ease;
                        padding: 20px 0px 19px 0px;
                    }
                }
            }
            
            a{
                position: relative;
                img{
                    width: 100%;
                    box-shadow: 1px 1px 10px 1px #949494;
                }
                
                .down-cv{
                    opacity:0;
                    position: absolute;
                    z-index:9999;
                    background: #fee66ea6;
                    width: 100%;
                    bottom: 3px;
                    padding:  0px;
                    justify-content: space-around;
                    display:flex;
                    overflow:hidden;
                    transition:0.5s ease;

                    .circle-container{
                        display: flex;
                        min-width: 85px;
                        width:42%;
                        
                        .circle{
                            
                            width: 15px;
                            background: black;
                            border: 5px solid black;
                            height: 15px;
                            border-radius: 50%;
                            transition: 0.5s ease-in-out;
                            &:hover{
                                border: 5px solid black;
                                background: transparent;
                                transition: 0.5s ease-in-out;
                            }
                        
                        }
                        
                        .circle:nth-child(2){
                            width: 15px;
                            margin-right:5px;
                            margin-left:5px;
                            background: #673AB7;
                            border: 5px solid #673AB7;
                            
                            transition: 0.5s ease-in-out;
                            &:hover{
                                border: 5px solid #673AB7;
                                background: transparent;
                                transition: 0.5s ease-in-out;
                            }
                        }
                        .circle:nth-child(3){
                            width: 15px;
                            background: #2196F3;
                            border: 5px solid #2196F3;
                            transition: 0.5s ease-in-out;
                            &:hover{
                                border: 5px solid #2196F3;
                                background: transparent;
                                transition: 0.5s ease-in-out;
                            }
                        }
                        
                    }   
                    .option-cv-doc{
                        min-width: 90px;
                        display: flex;
                        justify-content: space-between;
                        a{
                            
                            color: #1A535C;
                            background: white;
                            box-sizing: border-box;
                            font-size: 12px;
                            padding-top: 9px;
                            padding-left: 15px;
                            padding-right:10px;
                            font-weight: bold;
                            border-radius: 14px 14px 0px 14px;
                            font-size: 12px;
                            padding-bottom: 7px;
                            
                        }
                        
                    }
                }

            }
            
        }
        //.cv:nth-child(3n+2){
        //    &::before{
        //        content:'';
        //        left: 4px;
        //        left: 60px;
        //        background-color:blue;
        //    }
        //}
        

        
    }
    //.container-cv:nth-child(3n+2){
    //    .cv{
    //        &::before{
    //            content:'';
    //            left: 4px;
    //            left: 60px;
    //            background-color:blue;
    //        }
    //    }
    //}
    
    .container-description-cv{
        display:none;
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