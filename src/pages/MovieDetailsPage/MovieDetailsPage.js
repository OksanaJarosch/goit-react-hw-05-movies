import { MovieDetails } from "components/MovieDetails/MovieDetails";
import { Outlet, useLocation } from "react-router-dom"
import { Container, StyledBackLink, StyledLink, StyledList, StyledText } from "./MovieDetailsPage.styled";
import { IoIosArrowBack } from "react-icons/io";
import { useRef } from "react";

export default function MovieDetailsPage() {

    const location = useLocation();
    const backLink = useRef(location);


    return (
        <>
            <StyledBackLink to={backLink.current.state?.from ?? "/movies"}><IoIosArrowBack style={{ width: '14px', height: "14px" }} /> Go back</StyledBackLink>
            
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