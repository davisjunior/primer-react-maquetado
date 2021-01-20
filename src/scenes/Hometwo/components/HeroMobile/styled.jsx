import styled from 'styled-components'

import Group6 from '../Hero/img/Group6.png'

export const Wrapper = styled.div`
width:100vw;
height:auto;
background:#ffffff;

.main-nav{
    
    box-sizing:border-box;
    width:100vw;
    .nav{
        padding:40px;
        display:flex;
        justify-content:space-between;
        .logo{
            margin-top:-2px;
            a{
                font-size:30px;
                font-weight:bold;
                font-family: 'Mulish', sans-serif;
                text-decoration:none;

            }
        }
        .nav-options{
            width:auto;
            box-sizing:border-box;
            a{
                svg{
                    font-size:25px;
                }
            }
        }
    }
    .fondo{
        width:100%;
        position:relative;
        height:auto;
        img{
            width:100%;
        }
        .presentation{
            position:absolute;
            width:90%;
            height:auto;
            top:160px;
            background:white;
            left:0;
            right:0;
            margin:0 auto;
            padding:60px 40px 100px 40px;
            box-sizing:border-box;
            border-radius:50px;
            .title{
                h1{
                    font-family: 'Asap',sans-serif;
                    font-size: 90px;
                    text-align:center;
                    font-weight: 600;
                    color: #707070;
                    margin: 0;
                }
            }
            .text{
                text-align:center;
                margin-top:70px;
                p{
                    font-size:30px;
                    font-family: 'Mulish',sans-serif;
                    color: #707070;
                    line-height:1.5;
                }
            }
            .container{
                text-align:center;
                margin-top: 90px;
                height:auto;
                transition:0.5s ease;
                &:hover{
                    transform:scale(1.05);
                }
               
            }
        }
    }
}
@media (max-width: 1100px){
    .main-nav{
        .fondo{

            .presentation{
                
                .container{
                    a{
                        font-size: 40px;
                        padding:40px 90px 40px 90px;
                        border-radius:60px 60px 0px 60px;
                        transition:0.5s ease;
                        &:hover{
                            border-radius:60px 60px 60px 60px;
                            transition:0.2s ease;
                        }
                    }
                }
            }
        } 
    }
}
@media (max-width: 768px){
    .main-nav{
        .fondo{

            .presentation{
                .title{
                    h1{
                        font-size:70px;
                    }
                }
                .container{
                    a{
                        font-size: 30px;
                        padding:30px 60px 30px 60px;
                        border-radius:40px 40px 0px 40px;
                        transition:0.5s ease;
                        &:hover{
                            border-radius:40px 40px 40px 40px;
                            transition:0.2s ease;
                        }
                    }
                }
            }
        } 
    }
}
@media (max-width: 680px){
    .main-nav{
        .fondo{
            .presentation{
                top:60px;
                padding-bottom:70px;
                .title{
                    h1{
                        font-size:45px;
                    }
                }
                .text{
                    margin-top:40px;
                    p{
                        font-size:20px;
                    }
                }
                .container{
                    a{
                        font-size:20px;
                        padding:25px 60px 25px 60px;
                    }
                }
            }
        } 
    }
}
@media (max-width: 450px){
    .main-nav{
        .fondo{
            .presentation{
                top:50px;
                padding-bottom:70px;
                .title{
                    h1{
                        font-size:35px;
                    }
                }
                .text{
                    margin-top:30px;
                    p{
                        font-size:15px;
                    }
                }
                .container{
                    margin-top:40px;
                    a{
                        font-size:15px;
                        padding:20px 60px 20px 60px;
                    }
                }
            }
        } 
    }
}
@media (max-width: 380px){
    .main-nav{
        .nav{
            .logo{
                a{
                    font-size:22px;
                }
            }
        }
        .fondo{
            .presentation{
                top:40px;
                padding-bottom:50px;
                .title{
                    h1{
                        font-size:25px;
                    }
                }
                .text{
                    margin-top:20px;
                    p{
                        font-size:13px;
                    }
                }
                .container{
                    margin-top:40px;
                    a{
                        font-size:15px;
                        padding:15px 60px 15px 60px;
                    }
                }
            }
        } 
    }
}
@media (max-width: 280px){
    .main-nav{
        .nav{
            .logo{
                margin-top:3px;
                a{
                    font-size:20px;
                }
            }
        }
        .fondo{
            .presentation{
                top:20px;
                padding-bottom:40px;
                padding-top:20px;
                .title{
                    h1{
                        font-size:20px;
                    }
                }
                .text{
                    p{
                        font-size:10px;
                    }
                }
                .container{
                    a{
                        font-size:12px;
                        padding:15px 30px 15px 30px;
                    }
                }
            }
        } 
    }
}
`