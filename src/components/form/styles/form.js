import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div `
    display:flex;
    flex-direction:column;
    min-height:66rem;
    background-color:rgba(0,0,0,0.75);
    border-radius:0.5rem;
    width:100%;
    margin:auto;
    max-width:45rem;
    padding:6rem 6.8rem 4rem;
    margin-bottom:10rem;
`;
export const Error = styled.div `
    background-color:#e87c03;
    border-radius:0.4rem;
    font-size:1.5rem;
    margin:0 0 1.4rem;
    color: white;
    padding:1.5rem 2rem;
`;
export const Base = styled.form `
    display:flex;
    flex-direction:column;
    max-width:45rem;
    width:100%;
`;
export const Title = styled.h1 `
    color:#fff;
    font-size:3.2rem;
    font-weight:bold;
    margin-bottom:2.8rem;
`;
export const Text = styled.p `
    color:#737373;
    font-size:1.6rem;
    font-weight:bold;
`;
export const TextSmall = styled.p `
    margin-top:1rem;
    font-size:1.3rem;
    line-height:normal;
    color:#8c8c8c;
`;
export const Link = styled(ReactRouterLink)
`
    color:#fff;
    text-decoration:none;
    &:hover{
        text-decoration:underline;
    }

`;
export const Input = styled.input `
    background-color:#333;
    border-radius:0.4rem;
    border:0;
    color:white;
    height:5rem;
    line-height:5rem;
    padding:0.5rem 2rem;
    margin-bottom:2rem;

    &:last-of-type{
        margin-bottom:3rem;
    }
`;
export const Submit = styled.button `
    background-color:#e50914;
    border-radius:0.4rem;
    font-size:1.6rem;
    font-weight:bold;
    margin:2.4rem 0 1.2rem;
    padding:1.6rem;
    border:0;
    color:white;
    cursor:pointer;
    &:disabled{
        opacity:0.5;
    }
`;