import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getDetails } from "services/api";
import { DetailsContainer, StyledName, StyledPhoto, StyledSecondaryTitel, StyledText } from "./MovieDetails.styled";
import { StyledSecondaryText, Container } from "GlobalStyle.styled";


export const MovieDetails = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [movie, setMovie] = useState(null);

    const { movieId } = useParams();

    useEffect(() => {
        const fetchDetails = async () => {
            setIsLoading(true)
            try {
                const response = await getDetails(movieId)
                setMovie({ ...response })
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchDetails()
    }, [movieId]);
    
    const getAverage = () => {
        const { vote_average } = movie;
        return Math.round(vote_average * 10);
    };

    const makeImgURL = () => {
        const { poster_path } = movie;
        const BASE_URL = "https://image.tmdb.org/t/p/w200";
        return BASE_URL+poster_path;
    }

    return (
        <>
            {error && <StyledSecondaryText>Oops, something went wrong.</StyledSecondaryText>}
            {isLoading && <StyledSecondaryText>Loading...</StyledSecondaryText>}


            {movie && (
                <Container>
                <DetailsContainer>
                <StyledPhoto src={makeImgURL()
} alt={movie.title}></StyledPhoto>
                <div>
                    <StyledName>{movie.title}</StyledName>
                        <StyledText>User score: {getAverage()}%</StyledText>
                    <StyledSecondaryTitel>Overview</StyledSecondaryTitel>
                        <StyledText>{ movie.overview}</StyledText>
                    <StyledSecondaryTitel>Genres</StyledSecondaryTitel>
                    {movie.genres.map(({name}, index) => <span key={index}>{name} </span>)}
                </div>
                    </DetailsContainer> 
                    </Container>

            )}</>
    )
}