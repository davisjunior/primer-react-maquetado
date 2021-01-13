import styled from 'styled-components'

export const Wrapper = styled.header`
    nav{
        display:flex;
        width:100%;
        justify-content:space-between;
        position:relative;
    .menu{
        &:hover{
            .submenu-header-mobile{
                
            }
        }
        .submenu-header-mobile{
            position: absolute;
            left: 0px;
            background:white;
            //background-color: #b88b8b;
            width: 100%;
            height: auto;
            top: 45px;
            padding: 25px 0px 25px 0px;
            
            .part-top{
                margin-bottom:30px;
                .texto{
                    margin-bottom:15px;
                    a{
                        color:#2d2d2d;
                        font-family: 'Asap', sans-serif;
                        font-weight:600;
                        font-size:20px;
                    }
                    &:nth-child(1){
                        a{
                            color:#888888;
                            font-size:18px;
                            letter-spacing:1px;
                            font-weight:300;
                        }
                    }
                }

            }
            .part-middle{
                margin-bottom:25px;
                .texto{
                    margin-bottom:15px;
                    a{
                        color:#2d2d2d;
                        font-family: 'Asap', sans-serif;
                        font-weight:600;
                        font-size:20px;
                    }
                    &:nth-child(1){
                        a{
                            color:#888888;
                            font-size:18px;
                            letter-spacing:1px;
                            font-weight:300;
                        }
                    }
                }
            }
            .action{
                margin-top: 60px;
                .maker{
                    margin-bottom:30px;
                    a{
                    font-family: 'Asap', sans-serif;
                    font-size:20px;
                    color:#4DCBC2;
                    
                    }
                    &:nth-child(2){
                        margin-bottom:0px;
                        a{
                            font-family: 'Asap', sans-serif;
                            font-size:20px;
                            color:#4DCBC2;
                    
                        }
                    }
                }
            }
            .part-bottom{
                margin-top:60px;
                background:#f2f5fa;
                padding-top:40px;
                padding-bottom:30px;
                .texto{
                    margin-bottom:25px;
                    a{
                        color:#707070;
                        font-family: 'Asap', sans-serif;
                        font-size:18px;
                        font-weight:300;
                    }
                    
                }
            }
        }
    }
}   

@media (max-width: 1100px){
        .mobile-header{
            
            display: flex;
            width: 100%;
            height: 80px;
            background:white;
            padding: 30px;
            box-sizing:border-box;
            position: fixed;
            top: 0;
            z-index: 99999;
            nav{
                width: 100%;
                display: flex;
                justify-content: space-between;
                position:relative;
                .menu{
                    
                    a{
                        
                        svg{
                            font-size: 25px;
                            color: #2196f3;
                        }
                        
                    }
                    &:hover{
                        .submenu-header-mobile{
                           
                        }
                    }
                    .submenu-header-mobile{
                        position:absolute;
                        left:0px;
                        display:none;
                        
                        
                    }
                }
            }
            
        }
    }

@media (max-width: 768px){

}
@media (max-width: 540px){
    

}
@media (max-width: 420px){
    
   
}
@media (max-width: 360px){
    
   
}
@media (max-width: 280px){
    
    
}
`