import styled from "styled-components";

export const SliderItemWrapper = styled.div`
    background-image: url(${props=> props.src});
    width: 400px;
    height: 300px;
    border: 4px solid black;
    margin: 10px;
`