import styled from "styled-components";
import { Button } from "antd";

export const HeaderWrapper = styled.div`
    display:flex;
    justify-content: space-between;
`
export const HeaderRightBlock = styled.div`
    display:flex;
    gap: 20px;
`
export const Logo = styled.div`
    font-size: 30px;
`
export const Destination = styled.div`
    display: flex;
    flex-direction: column;
`
export const Call = styled.div`
    display: flex;
    flex-direction: column;
`
export const HeaderLeftBlock = styled.div`
    display:flex;
    gap:20px;
    align-items: center;
`
export const Coins = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    & svg {
        transition: ease-in-out .2s;
        position: relative;
        bottom: 0;
    }
    &:hover{
        color: gold;
        svg {
            bottom: 5px;
        }
    }
`
export const SignIn = styled(Button)`
    background-color: rgb(243, 243, 247);
    color: rgb(92, 99, 112);
    border-radius: 20px;

    &:hover{
        background-color: lightgrey;
        border-color: lightgrey!important;
    }
    &:hover span{
        color: rgb(92, 99, 112); 
    }
`
