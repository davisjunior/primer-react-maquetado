import styled from 'styled-components'


export const Wrapper = styled.div`
    width:1070px;
    height:auto;
    background-color:white;
    box-sizing:border-box;
    padding-top:100px;
    .main{
        .top{
            padding-top: 70px;
            display: flex;
            justify-content: space-between;
            padding: 0px 0px 20px 0px;
            border-bottom: 1px solid #bebdbd;
            margin-bottom:70px;
            .left-top{
                .title-name{
                    h1{
                        letter-spacing: 6px;
                        font-size: 50px;
                        margin-bottom:0px;
                        margin-top:0px;
                    }
                }
                .ocupation{
                    display:flex;
                    div:nth-child(2){
                        border-right: 1px solid purple;
                        padding: 0px 10px 0px 10px;
                        border-left: 1px solid purple;
                    }
                    div:nth-child(1){
                        padding: 0px 10px 0px 0px;
                    }
                    div:nth-child(3){
                        padding: 0px 0px 0px 10px;
                    }
                }
            }
            .right-top{
                .container-list{
                    display:flex;
                    div:nth-child(1){
                        margin-right:20px;
                        span{
                           color:#bebdbd; 
                        }
                    }
                }
            }
        }
        .main-skills{
            border-bottom:1px solid  #bebdbd;
            padding-bottom: 20px;
            margin-bottom: 70px;
            .main-three{
                display:flex;
                justify-content:space-between;
                margin-bottom:40px;
                padding: 0px 0px 0px 90px;
                .skills{
                    width: 20%;
                    position: relative;
                    .icon{
                        position: absolute;
                        left: -50px;
                        svg{
                            font-size:40px
                        }
                    }
                    .text-skills{
                        .title{
                            h1{
                                font-size:22px;
                                margin:0px;
                            }
                        }
                        .text{
                            font-size: 15px;
                        }
                    }
                }
            }
        }
        .main-edu-exp{
            display:flex;
            justify-content:space-between;
            .main-education{
                width:45%;
                .title{
                    margin-bottom: 40px;
                }
                .list{
                    ul{
                        li{
                            list-style:unset;
                            margin-bottom:30px;
                            span{
                                line-height:2;
                                font-size:15px;
                            }
                        }
                    }
                }
            }
            .main-experience{
                width:45%;
                .title{
                    margin-bottom: 40px;
                }
                .list{
                    ul{
                        li{
                            list-style:unset;
                            margin-bottom:30px;
                            span{
                                line-height:2;
                                font-size:15px;
                            }
                        }
                    }
                }
            }
        }
        .soft-skills{
            width: 310px;
            right: 170px;
            top: 1160px;
            position: absolute;
            .medition{
                display:flex;
                width:100%; 
                line-height:1.5; 
                div{
                    span{
                        font-size:15px;
                    }
                }            
                .barra{
                    width:150px;
                    height:5px;
                    background-color:gray;
                    margin-top:8px;
                    margin-left:20px;
                }
                
            }
            .medition:nth-child(2){
                .barra{
                    margin-left:33px;
                    width:120px;
                }
            }
            .medition:nth-child(3){
                .barra{
                    width:110px;
                    margin-left:35px;
                }
            }
            .medition:nth-child(4){
                .barra{
                    width:160px;
                    margin-left:32px;
                }
            }
        }
    }
`