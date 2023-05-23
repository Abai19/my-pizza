import styled from "styled-components";

export const Title = styled.h2`
    font-size: 26px;
`
export const PizzaContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    gap:20px;
    justify-content: space-between;
    
    & > div {
        width: 20%;
    }
`
export const Container = styled.div`
    padding-top: 1rem;
`