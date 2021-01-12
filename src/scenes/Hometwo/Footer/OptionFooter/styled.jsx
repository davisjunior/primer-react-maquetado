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
        .part-left{
            width:auto;
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
                    font-size: 22px;
                    font-weight: bold;
                    font-family: 'Mulish',sans-serif;
                    text-decoration: none;
                    color:white;
                }
            }
            .handling{
                h1{
                    font-size: 18px;
                    font-weight: bold;
                    font-family: 'Mulish',sans-serif;
                    text-decoration: none;
                    color:white;
                }
            }
        }
        .part-middle{
            width:90%;
            box-sizing:border-box;
            height:125px;
            display:flex;
            margin-left: 160px;
            border-bottom: 1px solid white;
            min-height: 130px;
            padding-left: 40px;
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
                    }
                    &:nth-child(2){
                        margin-top:18px;
                    }
                }
            }
            .user{
                display: flex;
                flex-direction: column;
                .log{
                    border-left: 1px solid white;
                    padding-left: 15px;
                    box-sizing: border-box;
                    a{
                        color: white;
                        font-family: 'Asap', sans-serif;
                        font-size: 18px;
                        font-weight: 600;
                    }
                    
                }
            }
        }
        .red-social{
            position: absolute;
            right: 30px;
            display: flex;
            bottom: 10px;
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
`