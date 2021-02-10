
import styled from 'styled-components'

export const Wrapper = styled.div`
@media (min-width: 1500px){
    margin-top: 400px;
}
@media (min-width: 1900px){
    margin-top: 600px;
}
    .container-library-horizontal{
        width: 100%;
        height: 800px;
        display: block;
        padding-right: 10%;
        padding-left: 10%;
        box-sizing:border-box;
        
        .title-and-button{
            width: auto;
            .small-tirle{
                width: auto;
                margin-bottom: 20px;
                h5{
                    font-size: 19px;
                    color: #1a535c;
                    font-family: 'Asap',sans-serif;
                    letter-spacing: 3px;
                    margin-bottom:0px;
                }
            }
            .tall-title{
                width: auto;
                display: flex;
                margin-bottom: 50px;
                
                h1{
                    font-size: 52px;
                    color: #707070;
                    font-family: 'Mulish',sans-serif;
                    margin:0px;
                }
                .button-right-title{
                    margin-left: 20px;
                    margin-top: 14px;
                    a{
                        font-weight:600;
                        font-size: 15px;
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
                                border-radius: 20px 20px 0px 20px;
                                margin-bottom: 5px;
                            }
                        }
                    }
                    h2{
                        margin-bottom: 15px;
                        a{
                            text-decoration: none;
                            color: #707070;
                            font-family: 'Mulish',sans-serif;
                            font-size: 21px;
                            
                        }
                    }
                    span{
                        font-size: 16px;
                        color: #707070;
                        font-family: 'Mulish',sans-serif;
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
    @media (max-width:540px){
        .container-library-horizontal{
            height:500px;
        }
    }
    @media (max-width:300px){
        .container-library-horizontal{
            height:440px;
        }
    }
`
