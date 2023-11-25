import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const HomeContainer = styled.div`
padding: 30px;
`;

export const StyledTitle = styled.h1`
margin-bottom: 24px;
color: #424242;
`;

export const StyledList = styled.ul`
list-style: none;
`;

export const StyledItem = styled.li`
margin-bottom: 16px;
`;

export const StyledLink = styled(Link)`
text-decoration: none;
font-size: 20px;
`;