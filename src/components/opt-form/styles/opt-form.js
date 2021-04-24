import styled from "styled-components/macro";

export const Container = styled.div `
    display:flex;
    justify-content:space-between;
    height:100%;
    margin-top:2rem;
    flex-wrap:wrap;

    @media (max-width:1000px){
        flex-direction:column;
        align-items:center;
    }
`;

export const Input = styled.input `
    max-width:45rem;
    width:100%;
    border:0;
    padding:1rem;
    height:7rem;

`;
export const Button = styled.button `
    display:flex;
    align-items:center;
    height:7rem;
    background-color:#e50914;
    color:white;
    text-transform:uppercase;
    padding: 0 3.2rem;
    font-size:2.6rem;
    border:0;
    cursor:pointer;
    &:hover{
        background-color:#f40614;
    }
    @media (max-width:1000px){
        height:5rem;
        font-size:1.6rem;
        margin-top:2rem;
        font-weight:bold;
    }
    img{
        margin-left:1rem;
        filter:brightness(0) invert(1);
        width:2.4rem;

        @media (max-width:1000px){
            width:1.6rem;
        }
    }
`;

export const Break = styled.div `
    flex-basis:100%;
    height:0;
`
export const Text = styled.p `
    font-size:1.92rem;
    color:white;
    text-align:center;

    @media (max-width:600px){
        font-size:1.6rem;
        line-height:2.2rem;
    }
`;