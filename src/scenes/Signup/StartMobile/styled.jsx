
import styled from 'styled-components'

export const Wrapper = styled.div`
width:100%;
height:auto;
.main-main{
    .top{
        width:100%;
        height:400px;
        position:relative;
        .img{
            width:100%;
            height:400px;
            overflow:hidden;
            a{
                img{
                    width:100%;
                }
            }
        }
        .back{
            position:absolute;
            top:30px;
            left:50px;
        }
        .title{
            position:absolute;
            bottom:50px;
            left:50px;
            h1{
                color:white;
                font-family: 'Asap', sans-serif;
                font-weight:bold;
                font-size:55px;
                margin:0px;
                letter-spacing:2px;
                text-shadow: 2px 2px 2px #797777;
            }
        }
    }
    .middle{
        box-sizing:border-box;
        padding:20px 45px 0px 45px;
        
        .main-input{
            margin-bottom:60px;
            .name-mail-pass{
                h1{
                    color:#1a535c;
                    font-family: 'Mulish',sans-serif;
                    font-size: 1.5em;
                    letter-spacing: 2px;
                }
            }
            .input{
                input{
                    width:98%;
                    height:60px;
                    padding-left:20px;
                    font-size:25px;
                    font-family: 'Mulish',sans-serif;
                    color:#707070;
                    letter-spacing:2px;
                    outline:none;
                    border-top:none;
                    border-right:none;
                    border-left:none;
                    border-bottom:2px solid #707070;
                }
            }
        }
        .main-button{
            text-align:center;
            margin-top:140px;
            div{
                a{
                    padding-right:35%;
                    padding-left:35%;
                    padding-top:20px;
                    padding-bottom:20px;
                    box-sizing:border-box;
                    font-family: 'Mulish',sans-serif;
                    color:white;
                    font-size:2em;
                    font-weight:bold;
                    transition:0.2s ease;
                    background-color: #4ECDC4;
                    border-radius: 20px 20px 0px 20px;
                    &:hover{
                    background-color:#1a535c;
                    transition:0.2s ease;
                    border-radius: 20px 20px 20px 20px;
                    }
                }
            }
        }
    }
}
@media (max-width: 540px){
    .main-main{
        .top{
           height:350px; 
           .img{
               height:100%;
           }
           .back{
                top:40px;
                left:30px;
            }
            .title{
                left:30px;
                h1{
                    font-size:40px;
                    text-shadow: 2px 2px 2px #2b2b2b;

                }
            }
        }
        .middle{
            margin-bottom:40px;
            .main-input{
                margin-bottom:40px;
                .name-mail-pass{
                    h1{
                       font-size:20px; 
                    }
                }
                .input{
                    input{
                        height:50px;
                        font-size:20px;
                    }
                }
            }
            .main-button{
                margin-top:195px;
                div{
                    a{
                        padding-right:30%;
                        padding-left:30%;
                        font-size:1.5em;
                    }
                }
            }
        }
    }
}
@media (max-width: 420px){
    .main-main{
        .top{
            .title{
                h1{
                    font-size:35px;
                }
            }
        }
        .middle{
            padding: 20px 45px 0px 40px;
            .main-input{
                .input{
                    width: 92%;
                }
            }
        }
    }
}
@media (max-width: 330px){
    .main-main{
        .middle{
            
            padding: 20px 45px 0px 40px;
            .main-input{
                .name-mail-pass{
                    h1{
                        font-size:17px;
                    }
                }
                .input{
                    input{
                        font-size:17px;
                    }
                }
            }
            .main-button{
                div{
                    a{
                        font-size:1em;
                    }
                }
            }
        }
    }
}
`