import styled from 'styled-components'

export const Wrapper = styled.div`
    
    h1{
        color:white;
        
    }
    a{
        text-decoration:none;
        &:hover{
            text-decoration:none;
        }
    }
    li{
        list-style:none;
    }
    .boton{
        color: #ffffff;
        font-size: 16px;
        background: #2196f3;
        padding-top: 11px;
        padding-bottom: 13px;
        padding-right: 22px;
        padding-left: 22px;
        border-radius: 5px;
        font-weight: 600;
        text-shadow: none;
        &:hover{
            background: #1c79c5;
            color: white;
        }
    
    }
    .button-black{
        color: #ffffff;
        font-size: 16px;
        background: #262b33;
        padding-top: 25px;
        padding-bottom: 25px;
        padding-right: 22px;
        padding-left: 15px;
        border-radius: 0px 0px 5px 5px;
        font-weight: 600;
        text-shadow: none;
        transition: 0.5s ease-in-out;
        &:hover{
            background: #3a414b;
            transition: 0.5s ease-in-out;
            color: white;
        }
        i{        
            margin-left: 25%;
    
        }
    
    }
`