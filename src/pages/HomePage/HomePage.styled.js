import { Link } from "react-router-dom";
import { styled } from "styled-components";


export const StyledTitle = styled.h1`
margin-bottom: 24px;
color: #424242;
`;

export const StyledList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 20px;
list-style: none;
`;

export const StyledItem = styled.li`
width: 200px;
border-radius: 8px;
overflow: hidden;
box-shadow: 0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08);
`;

export const StyledLink = styled(Link)`
text-decoration: none;
font-size: 20px;
color: black;
`;

export const InfoContainer = styled.div`
padding: 8px;
`;
