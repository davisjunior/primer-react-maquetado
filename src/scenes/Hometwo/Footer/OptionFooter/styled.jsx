import styled from 'styled-components'

export const Wrapper = styled.div`
    position: absolute;
    bottom: 0px;
    background:#4DCBC2;
    width:100%;
    .main{
        padding: 0px 35px 60px 35px;
        box-sizing: border-box;
        display:flex;
        flex-wrap:wrap;
        .part-left{
            width:15%;
            height:auto;
            display:block;
            .logo-footer{
                margin-bottom: 35px;
                h1{
                    font-size: 22px;
                    font-weight: bold;
                    font-family: 'Mulish',sans-serif;
                    text-decoration: none;
                    color:white;
                }
            }
            .derechos{
                margin-bottom: 15px;
                h1{
                    font-size: 14px;
                    font-weight: bold;
                    font-family: 'Mulish',sans-serif;
                    text-decoration: none;
                    color:white;
                }
            }
            .handling{
                h1{
                    font-size: 14px;
                    font-weight: bold;
                    font-family: 'Mulish',sans-serif;
                    text-decoration: none;
                    color:white;
                }
            }
        }
        .part-middle{
            width:85%;
            box-sizing:border-box;
            height:125px;
            display:flex;
            margin-left:0%;
            border-bottom: 1px solid white;
            min-height: 130px;
            padding-left: 40px;
            margin-bottom: 20px;
            .contact{
                display: flex;
                flex-direction: column;
                .option{
                    border-left: 1px solid white;
                    padding-left: 15px;
                    box-sizing: border-box;
                    a{
                        color: white;
                        font-family: 'Asap', sans-serif;
                        font-size: 18px;
                        font-weight: 600;
                        padding-bottom:8px;
                        transition:0.5s ease;
                        &:hover{
                            border-bottom:1px solid white;
                            transition:0.2s ease;
                        }
                    }
                    &:nth-child(2){
                        margin-top:18px;
                    }
                    
                }
            }
            .politic{
                display: flex;
                flex-direction: column;
                margin-left:70px;
                margin-right:70px;

                .option{
                    border-left: 1px solid white;
                    padding-left: 15px;
                    box-sizing: border-box;
                    a{
                        color: white;
                        font-family: 'Asap', sans-serif;
                        font-size: 18px;
                        font-weight: 600;
                        padding-bottom:8px;
                        transition:0.5s ease;
                        &:hover{
                            border-bottom:1px solid white;
                            transition:0.2s ease;
                        }
                    }
                    &:nth-child(2){
                        margin-top:18px;
                    }
                }
            }
            .user{
                display: flex;
                flex-direction: column;
                margin-top: 0px;
                .log{
                    border-left: 1px solid white;
                    padding-left: 15px;
                    box-sizing: border-box;
                    a{
                        color: white;
                        font-family: 'Asap', sans-serif;
                        font-size: 18px;
                        font-weight: 600;
                        padding-bottom:8px;
                        transition:0.5s ease;
                        
                        &:hover{
                            border-bottom:1px solid white;
                            transition:0.2s ease;
                        }
                    }
                    
                }
            }
        }
        .red-social{
            display: flex;
            margin-left: 74%;
            .icon{
                margin-left:15px;
                img{
                    width:40px;
                    height:auto;
                }
                &:nth-child(1){
                    margin-left:0px;
                }
            }
            
        }
    }
    @media (max-width: 768px){
        .main{
            display: flex;
            flex-direction: column;
            box-sizing:border-box;
            .part-left{
                flex:1;
                order:2;
                margin-top: 0px;
                margin-left: 0px;
                margin-right: 0px;
                box-sizing: border-box;
                padding-left: 40px;
                padding-top:20px;
            }
            .part-middle{
                display: block;
                margin: 0;
                height: 220px;
                border-bottom: 1px solid white;
                width: 95%;
                .politic{
                    margin:0px 0px 40px 0px;
                    .option{
                        &:nth-child(1){
                        margin-top:18px;
                        }
                    }
                }
                .user{
                    margin-top: -23px;
                }
            }
            .red-social{
                margin-left:55%;
                padding-top:20px;
                .icon{
                    a{
                        img{
                            width:40px;
                        }
                    }
                }
            }
        }
    }
    @media (max-width: 540px){
        .main{
            .red-social{
                margin-left:40%;
                .icon{
                    a{
                        img{
                            width:35px;
                        }
                    }
                }
            }
        }
    }
    @media (max-width: 380px){
        .main{
            .red-social{
                margin-left:10%;
                .icon{
                    a{
                        img{
                            width:30px;
                        }
                    }
                }
            }
        }
    }
    
`