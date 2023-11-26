import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div`
padding: 30px;
`;

export const StyledLink = styled(Link)`
text-decoration: none;
`;

export const StyledText = styled.p`
margin-bottom: 10px;
font-weight: 500;
`;

export const StyledList = styled.ul`
list-style: none;
`;

export const StyledBackLink = styled(Link)`
text-decoration: none;
display: block;
padding: 20px;
`;