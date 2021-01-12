import styled from 'styled-components'


export const Wrapper = styled.div`
    background-color:#4DCBC2;
    width:100%;
    height:800px;
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
                    border-radius: 100px 0px 100px 100px;;
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
        .go{
            position: absolute;
            bottom: 70px;
            right: 70px;
        }
        
    }
`