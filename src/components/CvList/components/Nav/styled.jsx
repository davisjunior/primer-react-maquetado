import styled from 'styled-components'

export const Wrapper = styled.div`
.content-options{
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
                &:hover i{
                    color: #1c79c5;
                }
            }
            i{
                font-size: 20px;
                margin-right: 20px;
                color: #2196f3;
                
            }
        }
    }
}
`