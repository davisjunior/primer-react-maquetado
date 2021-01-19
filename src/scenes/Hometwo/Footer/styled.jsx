import styled from 'styled-components'


export const Wrapper = styled.div`
    background-color:#4DCBC2;
    width:100%;
    height:960px;
    position:relative;
    margin-top:350px;
    .box-go{
        position:absolute;
        max-width:910px;
        min-width:910px;
        height:400px;
        background:white;
        border-radius: 65px;
        overflow: hidden;
        box-shadow: 0px 5px 14px 0px #8a8a8aba;
        top: -115px;
        left:35px;
        .colors{
            width:25%;
            height:100%;
            
            .grid{
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: repeat(4, 1fr);
                grid-column-gap: 0px;
                grid-row-gap: 0px;
                height:100%;
                min-width:174px;
                

                div{
                    
                }
                
                .div1 { 
                    grid-area: 1 / 1 / 2 / 2; 
                    background: #fee66ea1;
                    border-radius: 0px 100% 0px 0px;
                }
                .div2 { 
                    grid-area: 1 / 2 / 2 / 3; 
                    background: #4ecdc4a1;
                    border-radius: 100px 0px 100px 100px;
                }
                .div3 { 
                    grid-area: 2 / 1 / 3 / 2;
                    background: #a8e6e2;
                    border-radius: 0px 0px 0px 85px;
                }
                .div4 { 
                    grid-area: 2 / 2 / 3 / 3;
                    background: #1a535c9e;
                    border-radius: 0px 0px 85px 0px;
                }
                .div5 { 
                    grid-area: 3 / 1 / 4 / 2;
                    background: #feefa3;
                    border-radius: 0px 110px 110px 0px;
                }
                .div6 { 
                    grid-area: 3 / 2 / 4 / 3;
                    background: #fa6b6ca8;
                    border-radius: 55px;
                }
                .div7 { 
                    grid-area: 4 / 1 / 5 / 2;
                    background: #fc9d9e;
                    border-radius: 0px 0px 55px 0px;
                }
                .div8 { 
                    grid-area: 4 / 2 / 5 / 3;
                    background: #feefa3;
                    border-radius: 0px 0px 0px 55px;
                }
                
            }
            .grid-mobile{
                display:none;
            }
        }
        .base-text{
           
            width: 85%;
            height: 35px;
            position: absolute;
            background: #fee66e;
            left: 0;
            right: 0;
            margin: 0 auto;
            display: block;
            top: 105px;
            border-radius: 0px 40px 0px 40px;
        }
        .title-absolute{
            position: absolute;
            top: 12px;
            width: 100%;
            text-align: center;
            z-index: 999;   
            h1{
                font-size:70px;
                font-weight:600;
                color:#707070;
                font-family: 'Asap', sans-serif;
            }
            
        }
        .title-absolute-mobile{
            display:none;
        }
        .go{
            position: absolute;
            bottom: 70px;
            right: 70px;
        }
        
    }
    
@media (max-width: 960px){
    .box-go{
        min-width:80%;
        .title-absolute{
            top:35px;
            h1{
                font-size:50px;
            }
        }
    }
}    
@media (max-width: 768px){
    .box-go{
        width: 80%;
        height: 700px;
        left: 0;
        right: 0;
        margin: auto;
        .title-absolute{
            top:55px;
            h1{
                font-size:40px;
            }
        }
        .colors{
            width:100%;
            .grid{
                display:none;
            }
            .grid-mobile{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-template-rows: repeat(2, 1fr);
                grid-column-gap: 0px;
                grid-row-gap: 0px;
                width:100%;
                height:265px;
                .div1 { 
                    grid-area: 1 / 1 / 2 / 2;
                    background: #fa6b6ca8;
                    border-radius: 0px 0% 0px 50px;  
                }
                .div2 {
                    background: #feefa3;
                    border-radius: 0 0px 100px 100px;
                    grid-area: 1 / 2 / 2 / 3;
                }
                .div3 { 
                    grid-area: 1 / 3 / 2 / 4;
                    background: #a8e6e2;
                    border-radius: 120px 0px 0px 0px;
                }
                .div4 { 
                    grid-area: 1 / 4 / 2 / 5;
                    border-radius: 0px 0px 100px 0px;
                    background: #feefa3;
                }
                .div5 { 
                    grid-area: 2 / 1 / 3 / 2;
                    background: #feefa3;
                    border-radius: 110px 0px 0px 0px;
                }
                .div6 { 
                    grid-area: 2 / 2 / 3 / 3;
                    background: #fa6b6ca8;
                    border-radius: 70px;
                }
                .div7 { 
                    grid-area: 2 / 3 / 3 / 4;
                    background: #1a535c9e;
                    border-radius: 0px 0px 0px 120px;
                }
                .div8 { 
                    grid-area: 2 / 4 / 3 / 5;
                    background: #a8e6e2;
                    border-radius: 90px 90px 0px 100px;
                }
            }
        }
        .base-text{
            width: 337px;
            height: 50px;
            left: 30px;
            top: 385px;
            margin:0;
            &:nth-child(2){
                top: 480px;
                min-width: 473px;
                left: 30px;
            }
        }
        .title-absolute{
            display:none;
        }
        .title-absolute-mobile{
            display: block;
            z-index: 9999999;
            top: 340px;
            position: absolute;
            left: 50px;
            h2{
                font-size:80px;
                font-weight:600;
                color:#707070;
                font-family: 'Asap', sans-serif;
                margin:0px;
                &:nth-child(2){
                    position:absolute;
                    bottom:-90px;
                    white-space:pre;
                    left:4px;
                }
            }
        }
        .go{
            bottom: 90px;
            left: 55px;
            a{
                padding: 20px 100px 20px 100px;
                font-size:25px;
            }
        }
    }
}
@media (max-width: 660px){
    .box-go{
        .base-text{
            width:310px;
            &:nth-child(2){
                min-width:425px;
            }
        }
        .title-absolute-mobile{
            h2{
                font-size:70px;
            }
        }
    }
}
@media (max-width: 610px){
    .box-go{
        .base-text{
            width:280px;
            &:nth-child(2){
                min-width:380px;
            }
        }
        .title-absolute-mobile{
            top:350px;
            h2{
                font-size:60px;
            }
        }
    }
}
@media (max-width: 540px){
    .box-go{
        .base-text{
            width:230px;
            &:nth-child(2){
                min-width:320px;
            }
        }
        .title-absolute-mobile{
            top:365px;
            h2{
                font-size:50px;
            }
        }
        .go{
            left:20px;
        }
    }
}
@media (max-width: 470px){
    .box-go{
        .base-text{
            left: 15px;
            width:205px;
            &:nth-child(2){
                min-width:270px;
                left: 15px;
            }
        }
        .title-absolute-mobile{
            top:367px;
            left:40px;
            h2{
                font-size:40px;
            }
        }
        
    }
}
@media (max-width: 370px){
    .box-go{
        .base-text{
            left: 15px;
            width:160px;
            height:40px;
            &:nth-child(2){
                min-width:220px;
                left: 15px;
                top:460px;
            }
        }
        .title-absolute-mobile{
            top:370px;
            left:40px;
            h2{
                font-size:30px;
                &:nth-child(2){
                    bottom:-74px;
                }
            }
        }
        .go{
            a{
                padding: 20px 80px 20px 80px;
            }
        }
    }
}
@media (max-width:280px){
    .box-go{
        width: 90%;
    }
}
`