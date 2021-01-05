import styled from 'styled-components'

export const Wrapper = styled.div`
height:auto;
box-sizing:border-box;
padding-top:40px;
.main-maker{
    display:flex;
    a{
    .cv{
        width:275px;
        height:390px;
        background:white;
        box-shadow:1px 1px 4px 1px #c2c2c2;
    }
    }
    .publisher{
        width:250px;
        height:auto;
        display:block;
        box-sizing:border-box;
        padding-top:100px;
        padding-left:30px;
        .title{
            margin-bottom:20px;
            display:block;
            .subtitle{
                a{
                    font-size:22px;
                    text-decoration:none;
                    flex-wrap:wrap;
                    svg{
                        opacity:0;
                        font-size:17px;
                        color:#98a1b3;
                    }
                    &:hover{
                        color:#2392f6;
                        svg{
                            opacity:1;
                        }
                    }
                }
            }
            .texto{
                p{
                    font-size:12px;
                    color:#98a1b3;
                    margin-top:7px;
                    flex-wrap:wrap;
                }
            }
                
            
        }
        .options{
            
            .option{
                margin-bottom:15px;
                a{
                    flex-wrap:wrap;
                    svg{
                        color:#2392f6;
                        margin-right:7px;
                        font-size:19px;
                    }
                    &:hover{
                        text-decoration:none;
                        color:#2392f6;
                    }
                }
            }
            .option:nth-child(4){
                margin-bottom:0px;
            }
        }
    }
}
@media (max-width: 768px){
    padding-top:40px;
    box-sizing:border-box;
    .main-maker{
        a{
            .cv{
                width: 170px;
                height: 230px;
            }   
        }
        .publisher{
            height:auto;
            padding:0px 0px 0px 40px;
            box-sizing:border-box;
        }
    }
}
@media (max-width: 540px){
    padding-top:40px;
    box-sizing:border-box;
    .main-maker{
        a{
            .cv{
                width: 110px;
                height: 160px;
            }   
        }
        .publisher{
            height:auto;
            padding:0px 0px 0px 40px;
            box-sizing:border-box;
        }
    }
}
@media (max-width: 420px){
    padding-top:40px;
    box-sizing:border-box;
    .main-maker{
        a{
            .cv{
                width: 110px;
                height: 160px;
            }   
        }
        .publisher{
            height:auto;
            padding:0px 0px 0px 40px;
            box-sizing:border-box;
        }
    }
}
@media (max-width: 360px){
    padding-top:40px;
    box-sizing:border-box;
    .main-maker{
        a{
            .cv{    
                width: 100px;
                height: 145px;
            }   
        }
        .publisher{
            height:auto;
            padding:0px 0px 0px 40px;
            box-sizing:border-box;
        }
    }
}
`