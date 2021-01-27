import styled from 'styled-components'


export const Wrapper = styled.div`
    width:1070px;
    height:auto;
    background-color:white;
    box-sizing:border-box;
    
    
    .main{
        display:flex;
        width:100%;
        .left{
            background-color:#2E4053;
            width:35%;
            padding: 35px 40px 75px 40px;
            box-sizing:border-box;
            height:100%;
            display:block;
            justify-content:space-between;
            
            .face{
                width:100%;
                padding-left: 11px;
                img{
                    width:90%;
                    border-radius: 50%;
                }
            }
            .main-contact{
                padding: 40px 0px 0px 0px;
                margin-bottom: 70px;
                .title-white{
                    border-bottom: 1px solid #dadada;
                }
                .list-contact{
                    ul{
                        padding:0px;
                        li{
                            display:flex;
                            line-height:1.7;
                            .icon{
                                margin-right:15px;
                                svg{
                                    color:#dadada;
                                }
                            }
                            .contact{
                                color:#dadada;
                            }
                        }
                    }
                }
            }
            .main-education-reference{
                margin-bottom: 70px;
                .title-white{
                    border-bottom:1px solid #dadada;
                }
                .info-education{
                    .education{
                        line-height:1.5;
                        div{
                            span{
                                color:#dadada;
                            }
                        }
                    }
                    .education:nth-child(1){
                        margin-bottom:25px;
                        margin-top:25px;
                    }
                    .education:nth-child(3){
                        margin-top:25px;
                    }
                }
            }
        }
        .right{
            width:65%;
            margin-left:1px;
            .top{
                margin-bottom: 75px;
                background: #eaeaea;
                text-align: center;
                padding: 90px 0px 60px 0px;
                
                .name{
                    h1{
                        margin:0px;
                        font-size: 50px;
                        font-weight: 100;
                        color:#323232;
                    }
                }
                .borde{
                    border-top:1px solid #323232;
                    width: 40%;
                    margin-left: 30%;
                    margin-top: 20px;
                }
                .profession{
                    h3{
                        font-weight:100;
                        letter-spacing:3px;
                        color: gray;
                    }
                }
            }
            .main-profile{
                padding:0px 0px 0px 40px;
                margin-bottom:70px;
                .title-profile{
                    h1{
                        letter-spacing: 3px;
                        font-weight:300;
                        border-bottom:1px solid #323232;
                        width:30%;
                        color:#323232;
                        padding-bottom: 20px;
                    }
                }
                .text-profile{
                    color:#525252;
                    line-height:1.5;
                    span{
                        font-family: 'Mulish',sans-serif;
                    }
                }
            }
            .main-experience{
                padding:0px 0px 0px 40px;
                .title-profile{
                    margin-bottom:40px;
                    h1{
                        letter-spacing: 3px;
                        font-weight:300;
                        border-bottom:1px solid #323232;
                        width:50%;
                        color:#323232;
                        padding-bottom: 20px;
                    }
                }
                .experience{
                    color:#525252;
                    line-height:1.5;
                    margin-bottom:40px;
                    .subtitle{
                        margin-bottom:15px;
                    }
                    .text-experience{
                        font-family: 'Mulish',sans-serif;
                    }
                }
                .experience:nth-child(3){
                    margin-bottom:70px;
                }
            }
            .main-skills{
                padding:0px 0px 0px 40px;
                margin-top:70px;
                .title-skill{
                    h1{
                        letter-spacing: 3px;
                        font-weight: 300;
                        border-bottom: 1px solid #323232;
                        width: 30%;
                        color: #323232;
                        padding-bottom: 20px;
                    }
                }
                .container-list{
                    width:90%;
                    display:flex;
                    justify-content:space-between;
                    .list{
                        ul{
                            padding:0px;
                            li{
                                line-height:1.8;
                                span{
                                    font-family: 'Mulish',sans-serif;
                                    color: #525252;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`