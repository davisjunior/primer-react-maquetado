
import styled from 'styled-components'

export const Wrapper = styled.header`
    width:100%;
    box-sizing:border-box;
    padding:0px;
    margin:0;
    .main{
        box-sizing:border-box;
        width:100%;
        padding:30px 30px 30px 25px;
        display:flex;
        justify-content:space-between;
        
        .logo{
            background-color:blue;
            height:26px;
            margin-top: -6px;
            a{
                height:100%;
                img{
                    height:100%;
                }
            }
        }
        .nav{
            height:20px;
            display:flex;
            .two-option{
                margin-right:30px;
                display:flex;
                div{
                    a{
                        text-decoration:none;
                        color: rgb(152, 161, 179);
                        font-weight:600;
                        font-size: 16px;
                    }
                    
                }
                .job{
                    margin-left:30px;
                    a{
                        color: #262b33;
                        font-weight:600;
                        font-size: 16px;
                    }
                }
            }
            .option-three{
                border-right:1px solid #dde3f0;
                padding-right:40px;
                a{
                    text-decoration:none;
                    font-weight:600;    
                    font-size: 16px;
                    svg{
                        font-size:13px;
                        align-items:center;
                        margin-left:3px;
                    }
                }
            }
            .option-user{
                margin-left:40px;
                margin-right:15px;
                a{
                    text-decoration:none;
                    font-weight:600;
                    letter-spacing:1px;
                    font-size: 16px;
                    svg{
                        font-size:15px;
                        color:#2392ec;
                        margin-left:10px;
                    }
                }
            }
        }
    }
    @media (max-width: 1100px){
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
                            display:none;
                        }
                    }
                    .submenu-header-mobile{
                        position: absolute;
                        top: 50px;
                        //width: 100%;
                        //height: auto;
                        display: none;
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

`