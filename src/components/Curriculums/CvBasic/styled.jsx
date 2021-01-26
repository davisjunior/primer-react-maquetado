import styled from 'styled-components'


export const Wrapper = styled.div`
    width:1070px;
    height:1366px;
    background-color:white;
    box-sizing:border-box;
    padding:10px;
    
    .top{
        width:100%;
        display:flex;
        justify-content:space-between;
        border-bottom: 1px solid #c0c5c9;
        padding: 0px 0px 20px 0px;
        .container-top{
            padding: 30px 0px 0px 0px;
            .title-name{
                width:100%;
                text-align:center;
                h1{
                    font-size: 80px;
                    letter-spacing:15px;
                    font-weight: 100;
                    font-family: 'Mulish',sans-serif;
                    margin:0;
                    strong{
                        font-weight:600;
                    }
                }
            }
            .especialidad{
                width:100%;
                text-align:center;
                h1{
                    font-size: 30px;
                    letter-spacing:15px;
                    font-weight: 100;
                    font-family: 'Mulish',sans-serif;
                    color:#acacac;
                }
            }
        }
        .container-contact{
            width:30%;
            ul{
                li{
                    .line-contact{
                        display:flex;
                        .info{
                            padding:15px 0px 0px 0px;
                            box-sizing:border-box;
                            color:#acacac;
                        }
                        .icon{
                            width: 25px;
                            text-align: center;
                            color:#636363;
                            margin-right:10px;
                        }
                    }
                }
            }
        }
    }
    
    .container-info{
        border-bottom:1px solid #c0c5c9;
        padding-bottom:60px;
        margin-top:60px;
        display:flex;
        width:100%;
        .container-education{
            width:30%;
            border-right: 1px solid #c0c5c9;
            box-sizing: border-box;
            padding: 0px 0px 30px 0px;
            .title-education{
                margin-bottom:20px;
            }
            .awards{
                margin-top: 40px;
                margin-bottom: 20px;
            }
            .borde{
                width:90%;
                border-bottom: 1px solid #c0c5c9;
                box-sizing: border-box;
                
            }
            .date{
                padding-bottom: 25px;
                ul{
                    padding: 0px 0px 0px 0px;
                    li{
                        line-height:2;
                        .subtitle{
                            display:inline-flex;
                            .icon{
                                text-align: center;
                                width:30px;
                                p{
                                    margin:0px;
                                }
                            }
                            .info{
                                span{
                                    color:#acacac;
                                    
                                }
                            }
                        }
                        span{
                            color: #acacac;
                        }
                    }
                }
                
            }
            .date:nth-child(2){
                padding-top:0px;
                padding-bottom: 20px;
            }
        }
        .profile{
            width:70%;
            padding: 0px 0px 0px 60px;
            box-sizing: border-box;
            .title-profile{
                margin-bottom:40px;
            }
            .info-profile{
                margin-bottom: 35px;
                span{
                    color:#acacac;
                    line-height:2;
                    ul{
                        li{
                            list-style:unset;
                        }
                    }
                }
                &.bottom {
                    margin-bottom:0px;
                }
                
            }
            
        }
        &:nth-child(2){
            .contact{
                border-right:none;
            }
            .profile{
                border-left: 1px solid #c0c5c9;
            }
        }
    }
`