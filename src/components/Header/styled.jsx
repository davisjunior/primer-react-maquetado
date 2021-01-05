import styled from 'styled-components'

export const Wrapper = styled.header`
header{

    width: 100%;
    height: auto;
    padding-top: 20px;
    padding-left: 30px;
    padding-right: 25px;
    padding-bottom: 19px;
    box-sizing: border-box;
    .desktop{
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        .logo{
            //margin-right: 30%;
            width: 130px;
            height: 27px;
            a{
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        
        ul{
            display: flex;
            
            li{
                margin-right: 27px;
                a{
                    padding-top: 0;
                    padding-bottom: 0;
                    font-size: 15px;
                    text-shadow: 0px 1px #474242;
                    color: #262b33;
                    letter-spacing: 1px;
                    svg{
                        margin-left: 10px;
                    }
                    &:hover{
                        color:#1e81d3 ;
                        transition: 0.5s ease;
                        text-shadow:0px 1px #1e81d3;
                    }
                }
                .container-submenu{
                    border-top: 1px solid rgb(206, 204, 204);
                    background: white  ;
                    display: none;
                    position: absolute;
                    width: 100%;
                    height: 450px;
                    left: 0%;
                    top: 46px;
                    .part-left{
                        margin-left: 6%;
                        margin-top: 50px;
                        display: block;
                        .part-left-title{
                            display: flex;
                            justify-content: space-between;
                            span{
                                .title-black{
                                    color: #262b33;
                                    font-size: 18px;
                                    font-family: 'Roboto', sans-serif;
                                    transition: 0.5s ease;
                                    &:hover{
                                        color: #2196f3;
                                        transition: 0.5s ease;
                                    }
                                }
                                .title-blue{
                                    color: #2196f3;
                                    font-weight: 600;
                                    font-size: 18px;
                                    transition: 0.5s ease;
                                    text-shadow: none;
                                    &:hover{
                                        color: #1c79c5;
                                        transition: 0.5s ease;

                                    }
                                }
                            }
                        }
                        .content-top-part-left{
                            margin-bottom: 30px;
                            margin-top: 55px;
                            background: white;
                            width: 470px;
                            display: flex;
                            .content{
                                margin-right: 55px;
                                .block-title{
                                    margin-bottom: 10px;
                                    display: flex;
                                    justify-content: space-between;
                                    a{
                                        text-shadow: none;
                                        padding: 0;
                                        color: #262b33;
                                        font-family: 'Roboto', sans-serif;
                                        letter-spacing: 1px;
                                        transition: 0.5s ease;
                                        font-size: 16px;
                                        &:hover{
                                            color: #1c79c5;
                                            transition: 0.5s ease;
                                        }
                                        svg{
                                            margin-right: 15px;
                                            color: #2196f3;
                                            font-size: 18px;
                                            &:hover{
                                                color:#1c79c5;;
                                            }
                                        }
                                        
                                    }
                                    a:nth-child(2){
                                        svg{
                                            margin-right: 0;
                                            font-size: 18px;
                                        }
                                    }
                                }
                                .text-span{
                                    a{
                                        padding-top: 0;
                                        padding-bottom: 0;
                                        font-size: 12px;
                                        line-height: 1.5;
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
                            }
                            .content:nth-child(2){
                                margin-right: 0px;
                            }
                        }
                        .content-buttom-part-left{
                            display: flex;
                            width: 470px;
                            background: white;
                            .content{
                                margin-right: 55px;
                                .block-title{
                                    
                                    display: flex;
                                    justify-content: space-between;
                                    margin-bottom: 10px;
                                    a{
                                        text-shadow: none;
                                        padding: 0;
                                        color: #262b33;
                                        font-family: 'Roboto', sans-serif;
                                        letter-spacing: 1px;
                                        transition: 0.5s ease;
                                        font-size: 16px;
                                        &:hover{
                                            color: #1c79c5;
                                            transition: 0.5s ease;
                                        }
                                        svg{
                                            margin-right: 15px;
                                            color: #2196f3;
                                            font-size: 18px;
                                            &:hover{
                                                color:#1c79c5;;
                                            }
                                        }
                                    }
                                    a:nth-child(2){
                                        svg{
                                            margin-right: 0;
                                            font-size: 18px;
                                        }
                                    }
                                }
                                .text-span{
                                    a{
                                        padding-top: 0;
                                        padding-bottom: 0;
                                        font-size: 18px;
                                        line-height: 1.4;
                                        font-weight: 300;
                                        color: #8b8b8b;
                                        transition: 0.5s ease;
                                        text-shadow: none;
                                        font-size: 12px;
                                        &:hover{
                                            color: #7a8599;
                                            transition: 0.5s ease;
                                        }
                                    }
                                }
                            }
                            .content:nth-child(2){
                                margin-right: 0px;
                            }
                        }
                    }
                    .part-middle{
                        margin-top: 50px;
                        margin-left: 4%;
                        .part-middle-title{
                            margin-bottom: 50px;
                            .title-black{
                                color: #262b33;
                                font-size: 18px;
                                font-family: 'Roboto', sans-serif;
                                transition: 0.5s ease;
                                &:hover{
                                    color: #2196f3;
                                    transition: 0.5s ease;
                                }
                            }
                        }
                        .list-middle{
                            width: 270px;
                            background: white;
                            height: auto;
                            .list{
                                height: auto;
                                width: 100%;
                                display: flex;
                                justify-content: space-between;
                                margin-bottom: 16px;
                                .information{
                                    a{
                                        padding-top: 0;
                                        padding-bottom: 0;
                                        color: #262b33;
                                        text-shadow: none;
                                        
                                        font-size: 15px;
                                        &:hover{
                                            color: #1c79c5;
                                            text-shadow: 0px 1px #1c79c5;
                                            transition: 0.5s ease;

                                        }
                                    }
                                }
                                .number-list{
                                    a{
                                        padding-top: 0;
                                        padding-bottom: 0;
                                        color: #6f747a;
                                        transition: 0.5s ease;
                                        text-shadow: none;
                                        &:hover{
                                            transition: 0.5s ease;
                                            color: #202329;
                                        } 
                                    }
                                }
                            }
                            .list:nth-child(6){
                                .information{
                                    a{
                                        color: #2196f3;
                                        font-weight: 600;
                                        font-size: 16px;
                                        transition: 0.5s ease;
                                        text-shadow: none;
                                        
                                        &:hover{
                                            color: #1c79c5;
                                            transition: 0.5s ease;

                                        }
                                        svg{
                                            margin-left: 15px;
                                            font-size: 16px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .part-right{
                        padding-top: 50px;
                        background: #f8f9fc;
                        display: block;
                        width: 28%;
                        margin-left: 4%;
                        .img-part-right{
                            width: 140px;
                            height: 160px;
                            background: blue;
                            margin-left: 18%;
                            margin-bottom: 20px;
                            a{
                                padding-top: 0;
                                padding-bottom: 0;
                                img{
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                        }
                        .part-right-title{
                            display: block;
                            //background: #c90e0e;
                            width: 230px;
                            margin-left: 14%;
                            .title-black{
                                color: #262b33;
                                font-family: "Roboto", sans-serif;
                                letter-spacing: 2px;
                                transition: 0.5s ease;
                                font-size: 18px;
                                &:hover{
                                    color: #1c79c5;
                                    transition: 0.5s ease;
                                }
                            }
                            .text-part-right{
                                margin-top: 5px;
                                margin-bottom: 20px;
                                span{
                                    a{
                                        padding-top: 0;
                                        padding-bottom: 0;
                                        font-size: 12px;
                                        line-height: 1.4;
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
                            }
                            .title-blue{
                                color: #2196f3;
                                font-weight: 600;
                                font-size: 16px;
                                text-shadow: none;
                                transition: 0.5s ease;
                                
                                &:hover{
                                    color: #1c79c5;
                                    transition: 0.5s ease;

                                }
                                svg{
                                    font-size: 20px;
                                    margin-left: 15px;
                                }
                            }
                        }
                    }
                }
                
            }
            // NTH CHILD ////////----------HEADER----------///////// NTH CHILD ///////////////////////////// NTH CHILD ///////////////////////////
            // NTH CHILD ////////----------HEADER----------///////// NTH CHILD ///////////////////////////// NTH CHILD ///////////////////////////
            li:nth-child(1){
                &:hover .container-submenu{
                    display: flex;
                }
                a{
                    color: #7a8599;
                    text-shadow:none;
                    transition: 0.5s ease;
                    padding-bottom: 55px;
                    padding-top: 40px;
                    font-size: 15px;
                    &:hover{
                        color:#1e81d3 ;
                        transition: 0.5s ease;
                        text-shadow: none;
                    }
                }
            }
            li:nth-child(2){
                &:hover .container-submenu{
                    display: flex;
                }
                a{
                    font-size: 15px;
                    transition: 0.5s ease;
                    padding-bottom: 55px;
                    padding-top: 40px;
                    &:hover{
                        color:#1e81d3 ;
                        transition: 0.5s ease;
                        text-shadow: none;
                    }
                }
            }

            li:nth-child(3){
                a{
                    font-size: 15px;
                    padding-bottom: 55px;
                    padding-top: 40px;
                    
                }
                &:hover .container-submenu-3{
                    display:flex ;
                }
                .container-submenu-3{
                    border-top: 1px solid rgb(206, 204, 204);
                    background: white ;
                    display: none;
                    position: absolute;
                    width: 100%;
                    height: 500px;
                    left: 0%;
                    top: 46px;
                    .submenu-3-left{
                        margin-left: 5%;
                        margin-right: 10%;
                        margin-top: 50px;
                        background: white;
                        width: 100%;
                        .submenu-3-top{
                            background: white;
                            width: auto;
                            border-bottom: 1px solid rgb(206, 204, 204);
                            margin-bottom: 50px;
                            .title-submenu{
                                margin-bottom: 40px;
                                .Title-black{
                                    color: #262b33;
                                    font-size: 18px;
                                    font-family: 'Roboto', sans-serif;
                                    transition: 0.5s ease;
                                    &:hover{
                                        color: #2196f3;
                                        transition: 0.5s ease;
                                    }
                                }
                            }
                            .img-and-content{
                                display: flex;
                                width: 100%;
                                .img-left-text{
                                    margin-bottom: 20px;
                                    margin-right: 30px;
                                    height: 80px;
                                    width: 70px;
                                    img{
                                        width: 100%;
                                        height: 100%;
                                    }
                                }
                                .title-text{
                                    width: 68%;
                                    .block-title{
                                        margin-bottom: 5px;
                                        a{
                                            text-shadow: none;
                                            padding: 0;
                                            color: #262b33;
                                            font-family: "Roboto", sans-serif;
                                            font-size: 18px;
                                            letter-spacing: 2px;
                                            transition: 0.5s ease;
                                            &:hover{
                                                color: #1c79c5;
                                                transition: 0.5s ease;
                                            }
                                            svg{
                                              color:#2196f3;  
                                              &:hover{
                                                  color: #1c79c5;
                                              }
                                            }
                                        }
                                    }
                                    .text-span{
                                        a{
                                        padding-top: 0;
                                        padding-bottom: 0;
                                        font-size: 12px;
                                        line-height: 1.5;
                                        font-weight: 300;
                                        color: #8b8b8b;
                                        transition: 0.5s ease;
                                        text-shadow: none;
                                        &:hover{
                                            color: #7a8599;
                                            transition: 0.5s ease;
                                        }
                                        }
                                    }
                                }
                            }
                        }
                        .submenu-3-buttom{
                            display: flex;
                            background: white;
                            margin-bottom: 90px;
                            width: 100%;
                            justify-content: space-between;
                            .list{
                                .information{
                                    margin-bottom: 20px;
                                    a{
                                        padding-top: 0;
                                        padding-bottom: 0;
                                        color: #262b33;
                                        font-size: 15px;
                                        text-shadow: 0px 1px #474242;
                                        &:hover{
                                            color: #1c79c5;
                                            text-shadow: 0px 1px #1c79c5;
                                            transition: 0.5s ease;

                                        }
                                    }
                                }
                            }
                            .list:nth-child(3){
                                .information:nth-child(5){
                                    a{
                                        color: #2196f3;   
                                        text-shadow: 0px 1px #2196f3; 
                                        &:hover{
                                            color: #1c79c5;
                                            text-shadow: 0px 1px #1c79c5;
                                        }  
                                    }
                                }
                            }
                        }
                    }
                    .submenu-3-right{
                        padding-right: 60px;
                        padding-top: 50px;
                        background: #f8f8f8;
                        .img-part-right{
                            margin-left: 70px;
                            width: 260px;
                            height: 175px;
                            padding-bottom: 0px;
                            padding-top: 0px;
                            a{
                                padding:0px;
                                img{
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                        }
                        .part-right-title{
                            margin-left: 85px;
                            .title-black{
                                color: #262b33;
                                font-size: 18px;
                                transition: 0.5s ease;
                                padding-top: 0;
                                padding-bottom: 0;
                                &:hover{
                                    color:  #2196f3;
                                    transition: 0.5s ease;
                                }
                            }
                        }
                        .text-span{
                            margin-top: 10px;
                            margin-bottom: 25px;
                            margin-left: 85px;
                            width: 63%;
                            a{
                                padding-top: 0;
                                padding-bottom: 0;
                                font-size: 12px;
                                line-height: 1.5;
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
                        .blue-title{
                            margin-left: 85px;
                            width: 63%;
                            .title-blue{
                                color: #2196f3;
                                font-weight: 600;
                                font-size: 16px;
                                text-shadow: none;
                                transition: 0.5s ease;
                                &:hover{
                                    color: #1c79c5;
                                    transition: 0.5s ease;

                                }
                            }
                        }
                    }
                    
                }
            }
            li:nth-child(4){
                margin-right: 0px;
                border-right: 1px solid rgb(218, 216, 216);
                padding-right: 40px;
                a{
                    font-size: 15px;
                    text-shadow: 0px 1px #474242;
                    color: #262b33;
                    &:hover{
                        color:#1e81d3 ;
                        text-shadow:0px 1px #1e81d3;
                        transition: 0.5s ease;
                    }
                }
            }
            li:nth-child(5){
                margin-right: 20px;
                margin-left: 30px;
                a{
                    font-size: 15px;
                    color: #2196f3;
                    text-shadow:0px 1px #1e81d3;
                }
            }
            li:nth-child(6){
                margin-right: 0px;
                a{
                    padding-top: 11px;
                    padding-bottom: 13px;
                    font-size: 15px;
                    text-shadow: none;
                    color: white;
                    letter-spacing: 1px;
                }
                
            }
            // NTH CHILD ///////----------HEADER----------///////// NTH CHILD ///////////////////////////
            // NTH CHILD ///////----------HEADER----------///////// NTH CHILD ///////////////////////////
        }
    }
}
.mobile-header{
    display: none ;
    }



    @media (max-width: 1100px){
        header{
                display: none;
            }
        .mobile-header{
            display: flex;
            width: 100%;
            height: 80px;
            background:white;
            padding: 30px;
            box-sizing:border-box;
            position: fixed;
            top: 0;
            z-index: 99999;
            nav{
                width: 100%;
                display: flex;
                justify-content: space-between;
                .menu{
                    position: relative;
                    a{
                        
                        svg{
                            font-size: 25px;
                            color: #2196f3;
                        }
                        
                    }
                    &:hover{
                        .submenu-header-mobile{
                            height: auto;
                            width: 99vw;
                            left: -93vw;
                        }
                    }
                    .submenu-header-mobile{
                        position: absolute;
                        top: 50px;
                        //width: 100%;
                        //height: auto;
                        display: block;
                        background:white;
                        //left: -2160%;
                        //width: auto;
                        overflow: hidden;
                        height: 0;
                        width: 0;
                        
                        .part-header-mobile{
                            display: block;
                            flex-direction: column;
                            margin-bottom: 20px;
                            padding: 8px 20px 0px 20px;
                            //background: white;
                            p{
                                color: #98a1b3;
                                font-size: 12px;
                                letter-spacing: 2px;
                            }
                            
                            .sub-menu-container{
                                margin-bottom: 10px;
                                margin-top: 10px;
                                a{
                                    font-size: 16px;
                                    color: #262b33;
                                    font-weight: 600;
                                }
                                .title{
                                    color: #98a1b3;
                                    font-size: 12px; 
                                    font-weight: 300;
                                    letter-spacing: 2px;
                                }
                            }
                        }
                        .part-header-mobile:nth-child(1){
                            margin-bottom: 0;
                        }
                        .part-header-mobile:nth-child(2){
                            margin-bottom:30px ;
                            .sub-menu-container:nth-child(6){
                                margin-top: 15px;
                                a{
                                    color: #2196f3;
                                    align-items: center;
                                    letter-spacing: 2px;
                                    svg{
                                        font-size: 17px;
                                    }
                                }
                            }
                        }
                        .part-header-mobile-down{
                            padding-top: 30px;
                            background: #f2f5fa;
                            padding: 30px 20px 15px 20px;
                            .sub-menu-container{
                                margin-bottom: 10px;
                                a{
                                    font-size: 14px;
                                    letter-spacing: 1px;
                                    color: #262b33;
                                }
                            }
                        }
                    }
                }
            }
            
        }
    }
@media (max-width: 768px){
    header{
    display: none;
    }
    .mobile-header{
        display: flex;
        width: 100%;
        height: 80px;
        background:white;
        padding: 30px;
        box-sizing:border-box;
        position: fixed;
        top: 0;
        z-index: 99999;
        nav{
            width: 100%;
            display: flex;
            justify-content: space-between;
            .menu{
                position: relative;
                a{
                    
                    svg{
                        font-size: 25px;
                        color: #2196f3;
                    }
                    
                }
                &:hover{
                    .submenu-header-mobile{
                        height: auto;
                        width: 99vw;
                        left: -93vw;
                    }
                }
                .submenu-header-mobile{
                    position: absolute;
                    top: 50px;
                    //width: 100%;
                    //height: auto;
                    display: block;
                    background:white;
                    //left: -2160%;
                    //width: auto;
                    overflow: hidden;
                    height: 0;
                    width: 0;
                    
                    .part-header-mobile{
                        display: block;
                        flex-direction: column;
                        margin-bottom: 20px;
                        padding: 8px 20px 0px 20px;
                        //background: white;
                        p{
                            color: #98a1b3;
                            font-size: 12px;
                            letter-spacing: 2px;
                        }
                        
                        .sub-menu-container{
                            margin-bottom: 10px;
                            margin-top: 10px;
                            a{
                                font-size: 16px;
                                color: #262b33;
                                font-weight: 600;
                            }
                            .title{
                                color: #98a1b3;
                                font-size: 12px; 
                                font-weight: 300;
                                letter-spacing: 2px;
                            }
                        }
                    }
                    .part-header-mobile:nth-child(1){
                        margin-bottom: 0;
                    }
                    .part-header-mobile:nth-child(2){
                        margin-bottom:30px ;
                        .sub-menu-container:nth-child(6){
                            margin-top: 15px;
                            a{
                                color: #2196f3;
                                align-items: center;
                                letter-spacing: 2px;
                                svg{
                                    font-size: 17px;
                                }
                            }
                        }
                    }
                    .part-header-mobile-down{
                        padding-top: 30px;
                        background: #f2f5fa;
                        padding: 30px 20px 15px 20px;
                        .sub-menu-container{
                            margin-bottom: 10px;
                            a{
                                font-size: 14px;
                                letter-spacing: 1px;
                                color: #262b33;
                            }
                        }
                    }
                }
            }
        }
        
    }
}
@media (max-width: 540px){
    header{
    display: none;
        
    }
    .mobile-header{
        display: flex;
        width: 100%;
        height: 80px;
        background:white;
        padding: 30px;
        box-sizing:border-box;
        
        nav{
            width: 100%;
            display: flex;
            justify-content: space-between;
            .menu{
                position: relative;
                &:hover{
                    .submenu-header-mobile{
                        height: auto;
                        width: 99vw;
                        left: -90vw;
                        transition: 0.2s ease;
                    }
                }
                
                a{
                    
                    svg{
                        font-size: 25px;
                        color: #2196f3;
                    }
                    
                }
                .submenu-header-mobile{
                    position: absolute;
                    top: 50px;
                    //width: 100%;
                    //height: auto;
                    display: block;
                    background: white;
                    transition: 0.2s ease;
                    //width: auto;
                    overflow: hidden;
                    height: 0;
                    width: 0;
                    
                    .part-header-mobile{
                        display: block;
                        flex-direction: column;
                        margin-bottom: 20px;
                        padding: 8px 20px 0px 20px;
                        //background: white;
                        p{
                            color: #98a1b3;
                            font-size: 12px;
                            letter-spacing: 2px;
                        }
                        
                        .sub-menu-container{
                            margin-bottom: 10px;
                            margin-top: 10px;
                            a{
                                font-size: 16px;
                                color: #262b33;
                                font-weight: 600;
                            }
                            .title{
                                color: #98a1b3;
                                font-size: 12px; 
                                font-weight: 300;
                                letter-spacing: 2px;
                            }
                        }
                    }
                    .part-header-mobile:nth-child(1){
                        margin-bottom: 0;
                    }
                    .part-header-mobile:nth-child(2){
                        margin-bottom:30px ;
                        .sub-menu-container:nth-child(6){
                            margin-top: 15px;
                            a{
                                color: #2196f3;
                                align-items: center;
                                letter-spacing: 2px;
                                svg{
                                    font-size: 17px;
                                }
                            }
                        }
                    }
                    .part-header-mobile-down{
                        padding-top: 30px;
                        background: #f2f5fa;
                        padding: 30px 20px 15px 20px;
                        .sub-menu-container{
                            margin-bottom: 10px;
                            a{
                                font-size: 14px;
                                letter-spacing: 1px;
                                color: #262b33;
                            }
                        }
                    }
                }
            }
        }
        
    }
}
@media (max-width: 420px){
    header{
    display: none;
        
    }
    .mobile-header{
        display: flex;
        width: 100%;
        height: 80px;
        background:white;
        padding: 30px;
        box-sizing:border-box;
        
        nav{
            width: 100%;
            display: flex;
            justify-content: space-between;
            .menu{
                position: relative;
                &:hover{
                    .submenu-header-mobile{
                        height: auto;
                        width: 99vw;
                        left: -87vw;
                        transition: 0.2s ease;
                    }
                }
                
                a{
                    
                    svg{
                        font-size: 25px;
                        color: #2196f3;
                    }
                    
                }
                .submenu-header-mobile{
                    position: absolute;
                    top: 50px;
                    //width: 100%;
                    //height: auto;
                    display: block;
                    background: white;
                    transition: 0.2s ease;
                    //width: auto;
                    overflow: hidden;
                    height: 0;
                    width: 0;
                    
                    .part-header-mobile{
                        display: block;
                        flex-direction: column;
                        margin-bottom: 20px;
                        padding: 8px 20px 0px 20px;
                        //background: white;
                        p{
                            color: #98a1b3;
                            font-size: 12px;
                            letter-spacing: 2px;
                        }
                        
                        .sub-menu-container{
                            margin-bottom: 10px;
                            margin-top: 10px;
                            a{
                                font-size: 16px;
                                color: #262b33;
                                font-weight: 600;
                            }
                            .title{
                                color: #98a1b3;
                                font-size: 12px; 
                                font-weight: 300;
                                letter-spacing: 2px;
                            }
                        }
                    }
                    .part-header-mobile:nth-child(1){
                        margin-bottom: 0;
                    }
                    .part-header-mobile:nth-child(2){
                        margin-bottom:30px ;
                        .sub-menu-container:nth-child(6){
                            margin-top: 15px;
                            a{
                                color: #2196f3;
                                align-items: center;
                                letter-spacing: 2px;
                                svg{
                                    font-size: 17px;
                                }
                            }
                        }
                    }
                    .part-header-mobile-down{
                        padding-top: 30px;
                        background: #f2f5fa;
                        padding: 30px 20px 15px 20px;
                        .sub-menu-container{
                            margin-bottom: 10px;
                            a{
                                font-size: 14px;
                                letter-spacing: 1px;
                                color: #262b33;
                            }
                        }
                    }
                }
            }
        }
        
    }
}
@media (max-width: 360px){
    header{
    display: none;
        
    }
    .mobile-header{
        display: flex;
        width: 100%;
        height: 80px;
        background:white;
        padding: 30px;
        box-sizing:border-box;
        
        nav{
            width: 100%;
            display: flex;
            justify-content: space-between;
            .menu{
                position: relative;
                &:hover{
                    .submenu-header-mobile{
                        height: auto;
                        width: 99vw;
                        left: -85vw;
                        transition: 0.2s ease;
                    }
                }
                
                a{
                    
                    svg{
                        font-size: 25px;
                        color: #2196f3;
                    }
                    
                }
                .submenu-header-mobile{
                    position: absolute;
                    top: 50px;
                    //width: 100%;
                    //height: auto;
                    display: block;
                    background:white;
                    transition: 0.2s ease;
                    //width: auto;
                    overflow: hidden;
                    height: 0;
                    width: 0;
                    
                    .part-header-mobile{
                        display: block;
                        flex-direction: column;
                        margin-bottom: 20px;
                        padding: 8px 20px 0px 20px;
                        //background: white;
                        p{
                            color: #98a1b3;
                            font-size: 12px;
                            letter-spacing: 2px;
                        }
                        
                        .sub-menu-container{
                            margin-bottom: 10px;
                            margin-top: 10px;
                            a{
                                font-size: 16px;
                                color: #262b33;
                                font-weight: 600;
                            }
                            .title{
                                color: #98a1b3;
                                font-size: 12px; 
                                font-weight: 300;
                                letter-spacing: 2px;
                            }
                        }
                    }
                    .part-header-mobile:nth-child(1){
                        margin-bottom: 0;
                    }
                    .part-header-mobile:nth-child(2){
                        margin-bottom:30px ;
                        .sub-menu-container:nth-child(6){
                            margin-top: 15px;
                            a{
                                color: #2196f3;
                                align-items: center;
                                letter-spacing: 2px;
                                svg{
                                    font-size: 17px;
                                }
                            }
                        }
                    }
                    .part-header-mobile-down{
                        padding-top: 30px;
                        background: #f2f5fa;
                        padding: 30px 20px 15px 20px;
                        .sub-menu-container{
                            margin-bottom: 10px;
                            a{
                                font-size: 14px;
                                letter-spacing: 1px;
                                color: #262b33;
                            }
                        }
                    }
                }
            }
        }
        
    }
}
@media (max-width: 280px){
    header{
    display: none;
        
    }
    .mobile-header{
        display: flex;
        width: 100%;
        height: 80px;
        background:white;
        padding: 30px;
        box-sizing:border-box;
        
        nav{
            width: 100%;
            display: flex;
            justify-content: space-between;
            .menu{
                position: relative;
                &:hover{
                    .submenu-header-mobile{
                        height: auto;
                        width: 99vw;
                        left: -81vw;
                        transition: 0.2s ease;
                    }
                }
                
                a{
                    
                    svg{
                        font-size: 25px;
                        color: #2196f3;
                    }
                    
                }
                .submenu-header-mobile{
                    position: absolute;
                    top: 50px;
                    //width: 100%;
                    //height: auto;
                    display: block;
                    background: white;
                    transition: 0.2s ease;
                    //width: auto;
                    overflow: hidden;
                    height: 0;
                    width: 0;
                    
                    .part-header-mobile{
                        display: block;
                        flex-direction: column;
                        margin-bottom: 20px;
                        padding: 8px 20px 0px 20px;
                        //background: white;
                        p{
                            color: #98a1b3;
                            font-size: 12px;
                            letter-spacing: 2px;
                        }
                        
                        .sub-menu-container{
                            margin-bottom: 10px;
                            margin-top: 10px;
                            a{
                                font-size: 16px;
                                color: #262b33;
                                font-weight: 600;
                            }
                            .title{
                                color: #98a1b3;
                                font-size: 12px; 
                                font-weight: 300;
                                letter-spacing: 2px;
                            }
                        }
                    }
                    .part-header-mobile:nth-child(1){
                        margin-bottom: 0;
                    }
                    .part-header-mobile:nth-child(2){
                        margin-bottom:30px ;
                        .sub-menu-container:nth-child(6){
                            margin-top: 15px;
                            a{
                                color: #2196f3;
                                align-items: center;
                                letter-spacing: 2px;
                                svg{
                                    font-size: 17px;
                                }
                            }
                        }
                    }
                    .part-header-mobile-down{
                        padding-top: 30px;
                        background: #f2f5fa;
                        padding: 30px 20px 15px 20px;
                        .sub-menu-container{
                            margin-bottom: 10px;
                            a{
                                font-size: 14px;
                                letter-spacing: 1px;
                                color: #262b33;
                            }
                        }
                    }
                }
            }
        }
        
    }
}
`