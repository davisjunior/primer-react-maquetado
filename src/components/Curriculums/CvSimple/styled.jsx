import styled from 'styled-components'


export const Wrapper = styled.div`
    width:1070px;
    height:1366px;
    background-color:white;
    box-sizing:border-box;
    padding:10px;
    
    .title-name{
        text-align:center;
        h1{
            font-size: 50px;
            letter-spacing:15px;
            font-weight: 100;
            font-family: 'Mulish',sans-serif;
            strong{
                font-weight:600;
            }
        }
    }
    .title-profesional{
        margin-top:40px;
        width:100%;
        text-align:center;
        font-family: 'Mulish',sans-serif;
        border-bottom:1px solid #c0c5c9;
        padding:0px 0px 40px 0px;
        h1{
            letter-spacing:10px;
            font-size:20px;
        }
    }
    .container-info{
        border-bottom:1px solid #c0c5c9;
        padding-bottom:60px;
        margin-top:60px;
        display:flex;
        width:100%;
        .contact{
            width:40%;
            border-right: 1px solid #c0c5c9;
            box-sizing: border-box;
            padding: 0px 0px 30px 0px;
            .title-contact{
                margin-bottom:40px;
            }
            .borde{
                width:30%;
                border-bottom: 1px solid #c0c5c9;
                box-sizing: border-box;
                margin-left: 16px;
            }
            .date{
                padding-bottom: 15px;
                ul{
                    padding: 0px 0px 0px 15px;
                    li{
                        line-height:2;
                        .icon-contact{
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