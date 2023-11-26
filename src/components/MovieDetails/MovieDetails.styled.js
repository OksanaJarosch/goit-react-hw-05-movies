import { styled } from "styled-components";

export const DetailsContainer = styled.div`
padding: 30px;
display: flex;
gap: 20px;
border-bottom: solid #a2a2a2 1px;
border-top: solid #a2a2a2 1px;
`;

export const StyledName = styled.h1`
margin-bottom: 12px;
color: #424242;
`;
export const StyledOverview = styled.h2`
margin-bottom: 12px;
color: #424242;
`;
export const StyledGenres = styled.h3`
margin-bottom: 12px;
color: #424242;
`;

export const StyledText = styled.p`
margin-bottom: 16px;
`;

export const StyledSecondaryText = styled.p`
margin: 20px;
`;

export const StyledPhoto = styled.img`
border-radius: 8px;
overflow: hidden;
box-shadow: 0px 0.8px 2px rgba(0,0,0,.032),0px 2.7px 6.7px rgba(0,0,0,.048),0px 12px 30px rgba(0,0,0,.08);
min-width: 200px;
`;