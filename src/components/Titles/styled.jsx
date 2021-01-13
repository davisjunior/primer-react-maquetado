import styled from 'styled-components'

export const Wrapper = styled.div`
.down-header{
    width: 100%;
    height: 320px;
    background: white;
    padding-top: 40px;
    box-sizing: border-box;
    max-width: 647px;
    margin: 0 auto;
    .container-down-header{
        text-align: center;

        h1{
            font-size: 50px;
            color:#262b33;
            font-weight: bold;
            font-family: 'Roboto', sans-serif;
            margin-bottom: 15px;
        }
        h2{
            font-size: 16px;
            color: #262b33;
            font-weight: 600;
            margin-bottom: 30px;
            
        }
    }
    
}
@media (max-width: 1100px){
    .down-header{
        height: auto;
        padding-right: 12%;
        padding-left: 12%;
        padding-top: 100px;
        padding-bottom: 30px;
        .container-down-header{
            
            h1{
                font-size: 34px;
            }
            h2{
                font-size: 15px;
                font-weight: 300;
            }
        }
    }
}
@media (max-width: 768px){
    .down-header{
        .container-down-header{
            h1{
                font-size: 34px;
            }
            h2{
                font-size: 15px;
            }
        }
    }
}
@media (max-width: 540px){
    .container-down-header{
        h1{
            font-size: 27px;
        }
        h2{
            font-size: 15px;
        }
        .boton{
            display: none;
        }
    }
}
@media (max-width: 420px){
    .down-header{
        padding-right: 8%;
        padding-left: 8%;
        padding-top: 100px;
        padding-bottom: 0px;
        .container-down-header{
            h1{
                font-size: 27px;
            }
            h2{
                font-size: 15px;
            }
            .boton{
                display: none;
            }
        }
    }
}
@media (max-width: 360px){
    .down-header{
        padding-right: 8%;
        padding-left: 8%;
        padding-top: 100px;
        padding-bottom: 0px;
        .container-down-header{
            h1{
                font-size: 27px;
            }
            h2{
                font-size: 15px;
            }
            .boton{
                display: none;
            }
        }
    }
}
@media (max-width: 280px){
    .down-header{
        padding-right: 8%;
        padding-left: 8%;
        padding-top: 100px;
        padding-bottom: 0px;
        .container-down-header{
            h1{
                font-size: 27px;
            }
            h2{
                font-size: 15px;
            }
            .boton{
                display: none;
            }
        }
    }
}
`