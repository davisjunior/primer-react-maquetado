import styled from 'styled-components'

export const Wrapper = styled.div`
    margin-bottom: 70px;
    width: 100%;
    padding-right: 45px;
    padding-left: 45px;
    justify-content: space-between;
    display: flex;
    box-sizing:border-box;

@media (max-width: 768px){
    flex-wrap:wrap;
    height:auto;
    display:flex;
    justify-content:space-between;
}
@media (max-width: 420px){
    padding: 0px 20px 0px 20px;
    box-sizing:border-box;
}
@media (max-width: 360px){
    padding: 0px 20px 0px 20px;
    box-sizing:border-box;
}
`