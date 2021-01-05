import styled from 'styled-components'

export const Wrapper = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: auto;
    background: #f2f5fa;
    padding: 130px 8% 0px 8%;
    .big-title{
        margin-bottom: 75px;
        width: 100%;
        
        h1{
            font-size: 42px;
            color: #262b33;
            font-weight: bold;
            font-family: "Roboto", sans-serif;
            margin-bottom: 15px;
            text-align: center;
        }
    }
    .carousel{
        overflow:hidden;
        width:100%;
        height:auto;
        position:relative;

        .item-slide-start{
            width:70%;
            
            text-align:center;

            .one-floor-start{
                margin-bottom: 20px;
                span{
                    font-size: 25px;
                    color: #262b33;
                }
            }
            .two-floor-start{
                margin-bottom: 40px;
                span{
                    font-size: 25px;
                    color: #04B486;
                }
            }
            .thre-floor-start{
                span{
                    font-size: 18px;
                    font-weight: 600;
                    font-family: "Roboto", sans-serif;
                }
            }
            .four-floor-start{
                margin-top: 13px;
                span{
                    color: #7a8599;
                    font-size: 12px;
                }
            }
        }

        .item-slide{
            
            width:70%;
            
            .one-floor{
                margin-bottom: 10px;
                span{
                    color: #00FF40;
                    
                }
            }
            .two-floor{
                margin-bottom: 10px;
                span{
                    color: #262b33;
                    font-size: 18px;
                    font-family: "Roboto", sans-serif;
                }
            }
            .thre-floor{
                span{
                    color: #262b33;
                    font-size: 18px;
                    text-shadow:none;
                }                

            }
            .four-floor{
                margin-top: 12px;
                span{
                    color: #7a8599;
                    font-size: 12px;
                }
            }
            
            
        }
        
        .carousel__back-button{
            border: none;
            position: absolute;
            left: 0px;
            top: 100px;
            border-radius: 50%;
            background: #ffffffc9;
            width: 58px;
            height: 56px;
            outline: none;
            font-size: 50px;
            color: #b9bbbf;
        }
        .carousel__next-button{
            border: none;
            position: absolute;
            right: 0px;
            top: 100px;
            border-radius: 50%;
            background: #ffffffc9;
            width: 58px;
            height: 56px;
            outline: none;
            font-size: 50px;
            color: #b9bbbf;
        }
    }

`