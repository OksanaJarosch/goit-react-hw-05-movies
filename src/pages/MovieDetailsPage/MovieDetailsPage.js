import { MovieDetails } from "components/MovieDetails/MovieDetails";
import { Outlet, useLocation } from "react-router-dom"
import { StyledBackLink, StyledLink, StyledList, StyledText } from "./MovieDetailsPage.styled";
import { IoIosArrowBack } from "react-icons/io";
import { useRef } from "react";
import { Container } from "GlobalStyle.styled";

export default function MovieDetailsPage() {

    const location = useLocation();
    const backLink = useRef(location);


    return (
        <>
            <StyledBackLink to={backLink.current.state?.from ?? "/movies"}><IoIosArrowBack style={{ width: '16px', height: "16px", verticalAlign: 'bottom' }} /> Go back</StyledBackLink>
            
            <MovieDetails />
            
            <Container>
            <StyledText>Additional information:</StyledText>

            <StyledList>
                <li>
                    <StyledLink to="cast">Cast</StyledLink>
                </li>
                <li>
                    <StyledLink to="reviews">Reviews</StyledLink>
                </li>
                </StyledList>
            </Container>

            <Outlet />
        </>
 )}