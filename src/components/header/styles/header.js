import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Background = styled.div `
    display:flex;
    flex-direction:column;
    background:url(${({ src }) => (src ? `/images/misc/${src}.jpg` :'/images/misc/home-bg.jpg')}) top left / cover no-repeat;

`;
export const Frame = styled.div ``;
export const Container = styled.div `
    display:flex;
    margin:0 5.6rem;
    height:6.4rem;
    padding:1.8rem 0;
    justify-content:space-between;
    align-items:center;

    a{
        display:flex;
    }
    @media (max-width:1000px){
        margin:0 3rem;
    }
`;
export const Logo = styled.img `
    height:3.2rem;
    width:10.8rem;
    margin-right:4rem;
    @media (max-width:1449px){
        height:4.5rem;
        width:16.7rem;
    }
`;
export const ButtonLink = styled(Link)
`
    display:block;
    background-color:#e50914;
    width:8.4rem;
    height:fit-content;
    color:white;
    border:0;
    font-size:1.5rem;
    border-radius:0.3rem;
    padding:0.8rem 1.2rem;
    cursor:pointer;
    text-decoration:none;
    &:hover{
        background-color:#f40612;
    }
`;