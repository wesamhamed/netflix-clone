import styled from 'styled-components/macro';


export const Container = styled.div `
    display:flex;
    border-bottom:0.8rem solid #222;
`;
export const Inner = styled.div `
    display:flex;
    padding:7rem 4.5rem;
    flex-direction:column;
    max-width:81.5rem;
    margin:auto;
`;
export const Item = styled.div `
    color:white;
    margin-bottom:1rem;
    max-width:67rem;
    &:first-of-type{
        margin-top:3em;
    }
`;
export const Header = styled.div `
    display:flex;
    justify-content:space-between;
    cursor:pointer;
    margin-bottom:0.1rem;
    font-size:2.6rem;
    font-weight:normal;
    background-color:#303030;
    padding:0.8em 1.2em;
    user-select:none;
    align-items:center;
    img{
        filter:brightness(0) invert(1);
        width:2.4rem;
        @media (max-width:600px){
            width:1.6rem;
        }
    }
    @media (max-width:600px){
      font-size:1.6rem;
    }
`;
export const Frame = styled.div `
    margin-bottom:4rem;
`;
export const Body = styled.div `
    max-height:120rem;
    transition:max-height 0.25s cubic-bezier(0.5,0,0.1,1);
    font-size:2.6rem;
    font-weight:normal;
    line-height:normal;
    background-color:#303030;
    padding:0.8em 2.2em 0.8em 1.2em;
    white-space:pre-wrap;
    user-select:none;
    @media (min-width:600px){
        font-size:1.6rem;
        line-height:2.2rem;
    }
`;
export const Title = styled.h1 `
    font-size:5rem;
    line-height:1.1;
    margin-top:0;
    margin-bottom:0.8rem;
    color:white;
    text-align:center;
    @media (min-width:600px){
        font-size:3.5rem;
    }
`;