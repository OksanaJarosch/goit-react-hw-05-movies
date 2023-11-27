import { Link } from "react-router-dom";
import { styled } from "styled-components";


export const StyledLink = styled(Link)`
text-decoration: none;
color: #22389e;
font-weight: 500;
display: block;
padding: 4px 0;

&:hover {
    color: #c92d2d;
}
`;

export const StyledText = styled.p`
margin-bottom: 8px;
font-weight: 500;
`;

export const StyledList = styled.ul`
list-style: none;
`;

export const StyledBackLink = styled(Link)`
text-decoration: none;
display: block;
margin: 40px 0;
text-align: center;
color: #22389e;

&:hover {
    color: #c92d2d;
}
`;