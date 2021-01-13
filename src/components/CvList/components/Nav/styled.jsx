import styled from 'styled-components'

export const Wrapper = styled.div`
.content-options{
    box-sizing: border-box;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 50px;
    display: flex;
    padding-right: 20%;
    padding-left: 20%;
    justify-content: space-between;
    padding-bottom: 35px;
    border-bottom: 1px solid #cecccc;
    .options{
        a{
            font-size: 16px;
            color: #7a8599;
            font-weight: bold;
            font-family: 'Roboto', sans-serif;
            &:hover{
                color: #262b33;
                border-bottom: 3px solid #2196f3;
                padding-bottom: 35px;
                &:hover svg{
                    color: #1c79c5;
                }
            }
            svg{
                font-size: 20px;
                margin-right: 20px;
                color: #2196f3;
                
            }
        }
    }
}
@media (max-width: 768px){
    .content-options{
        padding-bottom: 20px;
        margin-bottom: 25px;
        padding-right: 10%;
        padding-left: 10%;
        .options{
            a{
                padding-bottom: 20px;
                &:hover{
                    padding-bottom: 20px;
                }
                svg{
                    display: none;
                }
            }
        }
    }
}
@media (max-width: 540px){
    .content-options{
        width: 100%;
        padding-right: 2%;
        padding-left: 2%;
        
    }
}
@media (max-width: 420px){
    .content-options{
        width: 100%;
        padding-bottom: 20px;
        margin-bottom: 25px;
        padding-right: 9%;
        padding-left: 9%;
        
        .options:nth-child(4){
            display: none;
        }
        .options:nth-child(5){
            display: none;
        }
    }
}
@media (max-width: 360px){
    .content-options{
        
        .options:nth-child(4){
            display: none;
        }
        .options:nth-child(5){
            display: none;
        }
    }
}
@media (max-width: 280px){

}
`