import { Link } from "react-router-dom";
import { styled } from "styled-components";


export const StyledForm = styled.form`
margin: 40px 0;
text-align: center;
position: relative;
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

export const StyledInput = styled.input`
width: 300px;
font-size: 14px;
padding: 5px 12px;
line-height: 20px;
color: #24292e;
vertical-align: middle;
background-color: #ffffff;
background-repeat: no-repeat;
background-position: right 8px center;
border: 1px solid #a2a2a2;
border-radius: 6px;
outline: none;
box-shadow: rgba(225, 228, 232, 0.2) 0px 1px 0px 0px inset;

&:focus{
    border-color: #0366d6;
    outline: none;
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
}
`;