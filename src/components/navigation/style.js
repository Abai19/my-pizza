import { Button } from "antd";
import styled from "styled-components";

export const NavigationWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding-top: 1rem;
`
export const Logo = styled.div`
    font-size: 20px;
`
export const ButtonCart = styled(Button)`
    color: white;
    background-color: gold;

    &:hover{
        background-color: #DEE13B;
        border-color: #DEE13B!important;
    }
    &:hover span{
        color: white; 
    }
`
export const RightNavigation = styled.div`
    display:flex;
    gap: 10px;
    align-items:center;
`
