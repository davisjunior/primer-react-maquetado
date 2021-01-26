import styled from 'styled-components'


export const Wrapper = styled.div`
    width:1070px;
    height:1490px;
    background-color:#ffffff;
    box-sizing:border-box;
    padding:10px;
    
    .main-main{
        width:100%;
        .main-top{
            width:100%;
            height:400px;
            margin-bottom: 60px;
            background:#ffffff;
            position:relative;
            display:flex;
            .main-img{
                width:36%;
                .face{
                    width: 100%;
                    height:400px;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                .presentation{
                    position:absolute;
                    background-color: #359df19e;
                    bottom: 0px;
                    width: auto;
                    padding: 15px 80px 10px 80px;
                    .name{
                        h1{
                            font-size: 40px;
                            font-weight: 600;
                            font-family: 'Mulish',sans-serif;
                            color: white;
                            margin: 0;
                            letter-spacing: 8px;
                        }
                    }
                    .job{
                        h1{
                            margin-top:5px;
                            font-size: 19px;
                            font-weight: 100;
                            font-family: 'Mulish',sans-serif;
                            color: #ffffff;
                            letter-spacing: 7px;
                        }
                    }
                }
            }
            .main-profile{
                width: 62%;
                padding:0px 0px 0px 50px ;
                box-sizing:border-box;
                .info-profile{
                    display:flex;
                    padding: 55px 0px 0px 0px;
                    .border{
                        width: 65%;
                        margin-top: 28px;
                        border-top: 1px solid #acacac;
                        margin-left: 45px;
                    }
                }
                .text-profile{
                    margin-top: 20px;
                    span{
                        color: #acacac;
                        line-height: 1.5;
                        font-size: 13px; 
                    }
                }
            }
            .info-contact{
                bottom:-11px;
                right:10px;
                position:absolute;
                display:flex;
                .main-ul{
                    ul{
                        padding:0px;
                        margin: 0px;
                        li{
                            line-height:2.5;
                            .contact-icon{
                                display:flex;
                                div{
                                    color:#acacac;
                                    &:nth-child(1){
                                        margin-right:20px;
                                        box-sizing:border-box;
                                    }
                                }
                            }
                        }
                    }
                    &:nth-child(2){
                        width:auto;
                    }
                }
            }
        }
        .main-middle{
            width:100%;
            display:flex;
            justify-content:space-between;
            margin-bottom:50px;
            .left{
                width:22%;
                height:100%;
                .main-experience{
                    text-align:end;
                    .title-education{
                        margin-bottom: 20px;
                        .mini-title{
                            letter-spacing:2px;
                            font-weight: bold;
                        }
                    }
                    .date{
                        ul{
                            padding: 0px 0px 0px 0px;
                            margin-bottom: 67px;
                            margin-top: 0;
                            li{
                                .subtitle{
                                    .info{
                                        span{
                                            color: #acacac;
                                            font-size: 14px;
                                            strong{
                                                color: #359df1cc;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        .ul-padding{
                                margin-bottom:20px;
                            }
                        ul:nth-child(3){
                            margin:0px;
                        }
                    }
                }
            }
            .middle{
                width:50%;
                height:100%;
                .date-middle{
                    .profile{
                        padding: 29px 0px 2px 30px;
                        box-sizing: border-box;
                        
                        .title-profile{
                           
                            .mini-title{
                                font-size: 14px;
                                letter-spacing:0;
                            }
                        }
                        .title-profile:nth-child(1){
                            border-top: 1px solid #c0c5c9;
                            width:100%;
                            padding-top:26px;
                        }
                        .info-profile{
                            margin-bottom: 25px;
                            margin-top: -8px;
                            span{
                                color: #acacac;
                                line-height: 1.5;
                                font-size: 14px;
                            }
                        }
                    }
                }
            }
            .right{
                width:23%;
                height:100%;
                box-sizing:border-box;
                padding-left:30px;
                .main-experience{
                   
                    .title-education{
                        margin-bottom: 20px;
                        .mini-title{
                            letter-spacing:2px;
                            font-weight: bold;
                        }
                    }
                    .date{
                        ul{
                            padding:0px;
                            li{
                                text-align:inherit;
                                .subtitle{
                                    .info{
                                        span{
                                            color: #acacac;
                                            font-size: 14px;
                                            strong{
                                                color:black;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .main-barra{
                        ul{
                            padding:0px;
                            li{
                                line-height:2.4;
                                .main-skills{
                                    justify-content:space-between;
                                    padding-right:15px;
                                    display:flex;
                                    .text{

                                    }
                                    .barra{
                                        progress{
                                            width:90px;
                                            
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            
            &:nth-child(4){
                margin-bottom:0px;
            }
        }
    }
`