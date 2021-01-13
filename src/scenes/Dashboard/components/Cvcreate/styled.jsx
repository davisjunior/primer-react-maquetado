import styled from 'styled-components'

export const Wrapper = styled.div`
    background:#f2f5fa;
    width:100%;
    box-sizing:border-box;
    height:auto;
    padding:70px 120px 70px 120px;
    .title{
        margin-bottom: 16px;
        h1{
            color:rgb(152 161 179);
            font-size: 30px;
            font-weight:300;
        }
    }
    .main{
        display:flex;
        width:100%;
        justify-content:space-between;
        border-bottom:1px solid #d1d5dd;
        padding-bottom:25px;
        .container-option{
            display:flex;
            .resume{
                margin-right:30px;
                div{
                    a{
                        padding-bottom:25px;
                        border-bottom:2px solid #2196f3; 
                        
                        &:hover{
                            text-decoration:none;
                            padding-bottom:25px;
                            border-bottom:2px solid #2196f3; 
                            
                        }
                    }
                }
            }
            .cover{
                div{
                    a{
                        padding-bottom:25px;
                        
                        
                        &:hover{
                            text-decoration:none;
                            padding-bottom:25px;
                            border-bottom:2px solid #2196f3; 
                        }
                    }
                }
            }
        }
        .create{
            a{
                svg{
                        margin-right:10px;
                }
            }
        }
    }
    .maker{
        flex-wrap:wrap;
        display:flex;
        box-sizing:border-box;
        justify-content:space-between;
        
    }
    @media (max-width: 768px){
        padding:100px 20px 20px 20px;
        .main{
            display:block;
            border-bottom:0px;
            
            .container-option{
                box-sizing:border-box;
                width:100%;
                justify-content:space-between;
                padding: 0px 20px 0px 20px;
                margin:0px;
                .resume{
                    width:50%;
                    
                    div{
                        a{
                            text-align:center;
                            display:block;
                            padding:0px 0px 17px 0px ;
                            margin:0;
                            &:hover{
                                padding:0px 0px 17px 0px;
                            }
                        }
                    }

                }
                .cover{
                    width:50%;
                    div{
                    
                        a{ 
                            text-align:center;
                            display:block;   
                            border-bottom: 2px solid #2196f3;
                            padding:0px 0px 17px 0px;
                            margin:0;
                            &:hover{
                                padding:0px 0px 17px 0px;
                            }
                        }
                    }
                }
            }
            .create{
                width:100%;
                height:auto;
                text-align:center;
                margin-top:35px;
                a{
                    padding: 13px 32% 13px 32%;
                }
            }
        }
    }
    @media (max-width: 540px){
    }
    @media (max-width: 420px){
        .main{    
            .container-option{
            }
            .create{
                a{
                    padding: 13px 20% 13px 20%;
                }
            }
        }
        .maker{
            .cv-maker{
                width: 100%;
            }
        }
    }
`