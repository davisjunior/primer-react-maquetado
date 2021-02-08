
import styled from 'styled-components'

export const Wrapper = styled.div`
    .container-library-horizontal{
        width: 100%;
        height: auto;
        display: block;
        padding-right: 10%;
        padding-left: 10%;
        box-sizing:border-box;
        .title-and-button{
            width: auto;
            .small-tirle{
                width: auto;
                margin-bottom: 25px;
                h5{
                    font-size: 16px;
                    font-family: "Josefin Sans", sans-serif;
                    color: #4c43f5;
                }
            }
            .tall-title{
                width: auto;
                display: flex;
                margin-bottom: 50px;
                
                h1{
                    font-size: 52px;
                    color: #070606;
                }
                .button-right-title{
                    margin-left: 20px;
                    margin-top: 14px;
                    a{
                        font-size: 12px;
                        text-decoration: none;
                        color: #fcfcfc;
                        font-family: "Josefin Sans", sans-serif;
                        background: linear-gradient(to right,#4c43f5 ,#3ddc97);
                        padding: 12px 15px 9px 15px;
                        border-radius: 15px;
                        box-sizing:border-box;
                    }
                }
            }
        }
        .library-horizontal{
            width: 100%;
            height: auto;
            display: block;

            .container{
                width: 100%;
                height: auto;
                display: flex;
                //justify-content: space-between;
                margin-bottom: 90px;

                .book-horizontal{
                    width: 31.5%;
                    height: auto;
                    
                    .container-img-book{
                        width: 100%;
                        a{
                            
                            img{
                                width: 100%;
                                height: auto;
                                border-radius: 10px;
                                margin-bottom: 10px;
                            }
                        }
                    }
                    h2{
                        margin-bottom: 15px;
                        a{
                            text-decoration: none;
                            font-family: "Josefin Sans", sans-serif;
                            color: #070606;
                            font-size: 21px;
                            
                        }
                    }
                    span{
                        font-size: 17px;
                        font-family: "Josefin Sans", sans-serif;
                        color: #070606;
                        font-weight: 300;
                        

                    }
                }
                .book-horizontal:nth-child(2){
                    margin-right: 2.5%;
                    margin-left: 2.5%;
                }
            }
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 1080px){

        .container-library-horizontal{
        
            padding-right: 2%;
            padding-left: 2%;
            box-sizing:border-box;
            .container{
                .book-horizontal{
                    h2{
                        margin-bottom: 10px ;
                        a{
                            font-size: 15px ;
                        }
                    }
                    span{
                        font-size: 15px ;
                    }
                }
            }
        }
    }
    @media (max-width:767px){
    .container-library-horizontal{
            width: 100%;
            .title-and-button{
                .tall-title{
                    display: flex;
                    justify-content: space-between;
                    h1{
                        font-size: 32px;
                        font-weight: 800;
                    }
                    .button-right-title{
                        margin-left: 0%;
                    }
                }
            }
            .library-horizontal{
                .container{
                    .book-horizontal{
                        width: 100%;
                    }
                    .book-horizontal:nth-child(2){
                        display: none;
                    }
                    .book-horizontal:nth-child(3){
                        display: none;
                    }
                }
                .container:nth-child(2){
                    display: none;
                }
            }
        }
    }
`
