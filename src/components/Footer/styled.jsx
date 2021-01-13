import styled from 'styled-components'

export const Wrapper = styled.div`

footer{
    box-sizing: border-box;
    background: #0f141f;
    width: 100%;
    display: block;
    padding: 100px 9% 30px 9%;
    .container-main-footer{
        display: flex;
        justify-content: space-between;
        // FOOTER MOBILE DISPLAY NONE -- FOOTER MOBILE ///// 
        // FOOTER MOBILE DISPLAY NONE -- FOOTER MOBILE ///// 
        .footer-mobile{
            display: none;
        }
        // FOOTER MOBILE DISPLAY NONE -- FOOTER MOBILE ///// 
        // FOOTER MOBILE DISPLAY NONE -- FOOTER MOBILE ///// 
        .container-footer-left{
            width: 15%;
            height: auto;
            
            .title-social-red{
                width: 100%;
                h1{
                    color: white;
                    font-size: 18px;
                    font-weight: 200;
                    letter-spacing: 1px;
                    line-height: 1.5;
                }
            }
            .icon-red-social{
                margin-top: 35px;
                
                a{
                    margin-right: 15px;
                    
                    svg{
                        font-size: 25px;
                        color: white;
                    }
                    
                }
                a:nth-child(1){
                    background: #537bc0;
                    padding: 11px 13px 5px 11px;
                    border-radius: 50%;
                    transition:0.3s ease ;
                    &:hover{
                        transition:0.3s ease;
                        background: white;
                        svg{
                            color:#537bc0 ;
                        }
                    }
                }
                a:nth-child(2){
                    background: #1da1f2;
                    padding: 11px 8px 5px 10px;
                    border-radius: 50%;
                    transition:0.3s ease ;
                    &:hover{
                        transition:0.3s ease;
                        background: white;
                        svg{
                            color:#1da1f2 ;
                        }
                    }
                }
                a:nth-child(3){
                    margin-right: 0;
                    background: #0077b5;
                    padding: 11px 10px 5px 11px;
                    border-radius: 50%;
                    transition:0.3s ease ;
                    &:hover{
                        transition:0.3s ease;
                        background: white;
                        svg{
                            color:#0077b5 ;
                        }
                    }
                }
            }
        }
        .center-right{
            
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            width: 72%;
            height: auto;
            .list-one-footer{
                h5{
                    color: #3d4047;
                    font-size: 12px;
                    letter-spacing: 2px;
                    margin-bottom: 14px;
                }
                ul{
                    line-height: 32px;
                    li{
                        a{
                            color: white;
                            transition: 0.5s ease;
                            font-size: 15px;
                            font-weight: 600;
                            &:hover{
                                color:#1e81d3 ;
                                transition: 0.5s ease;
                            }
                        }
                    }
                }
            }
        }
    }
    .derechos{
        width: 100%;
        display: block;
        text-align: center;
        box-sizing: border-box;
        
        .flag{
            margin-top: 90px;
            margin-bottom: 20px;
            width: 100%;
            height: 35px;
            text-align: center;
            a{
                color: white;
                font-size: 20px;
                transition: 0.5s ease;
                &:hover{
                    color:#1e81d3 ;
                    transition: 0.5s ease;
                }
                img{
                    width: 40px;
                    height: 34px;
                    margin-right: 15px;
                    
                }
            }
        }
        .copy{
            span{
                color: #3d4047;
                font-size: 17px;
                letter-spacing: 1px;
            }
        }
    }
}

@media (max-width: 540px){
    footer{
        padding: 100px 4% 30px 4%;
        .container-main-footer{
            display: block;
            .container-footer-left{
                width: 40%;
                margin-bottom: 25px;
                .icon-red-social{
                    margin-top: 15px;
                }
            }
            .center-right{
                display: none;
            }
            .footer-mobile{
                display: block;
                .menu-footer-mobile{
                    display: block;
                    
                    width: 100%;
                    padding-bottom: 15px;
                    padding-top: 15px;
                    
                    &:hover{
                        .submenu-footer-mobile{
                            transition: 0.5s ease;
                            display: inline-flex;
                            flex-direction: column;
                            height: 240px;
                            background: hsla(0,0%,100%,.1);
                            padding: 25px;
                            box-sizing:border-box;
                            width: 80%;
                                
                            
                        }
                    }
                    .container-option-icon{
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        border-bottom: 1px solid hsla(0,0%,100%,.1);
                        p{
                            color: white;
                            font-weight: 600;
                            font-size: 16px;
                        }
                        span{
                            color: white;
                            font-size: 18px;
                        }
                    }
                    .submenu-footer-mobile{
                        height: 0;
                        flex-direction: column;
                        overflow: hidden;
                        transition: 0.1s ease;
                        box-sizing:border-box;
                        width: 80%;
                        
                        a{
                            color: white;
                            font-size: 14px;
                            padding-bottom: 22px;
                        }
                        a:nth-child(5){
                            padding-bottom: 0;
                        }
                        
                        
                    }
                    
                    
                }
                .menu-footer-mobile:nth-child(4){
                    border: none;
                }
            }
        }
    }
}
@media (max-width: 420px){
    footer{
        .container-main-footer{
            .container-footer-left{
                width: 80%;
            }
        }
    }
}
@media (max-width: 360px){
    footer{
        .container-main-footer{
            display: block;
            .container-footer-left{
                width: 80%;
            }
        }
    }
}

@media (max-width: 280px){
    footer{
        .container-main-footer{
            display: block;
            .container-footer-left{
                width: 80%;
            }
        }
    }
}
`