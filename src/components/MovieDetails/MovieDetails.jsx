import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getDetails } from "services/api";
import { DetailsContainer, StyledGenres, StyledName, StyledOverview, StyledText } from "./MovieDetails.styled";

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
    }, []);
    
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
            {error && <p>Oops, something went wrong.</p>}
            {isLoading && <p>Loading...</p>}

            {movie && (
                <DetailsContainer>
                <img src={makeImgURL()
} alt={movie.title}></img>
                <div>
                    <StyledName>{movie.title}</StyledName>
                        <StyledText>User score: {getAverage()}%</StyledText>
                    <StyledOverview>Overview</StyledOverview>
                        <StyledText>{ movie.overview}</StyledText>
                    <StyledGenres>Genres</StyledGenres>
                    {movie.genres.map(({name}, index) => <span key={index}>{name} </span>)}
                </div>
            </DetailsContainer> 

            )}</>
    )
}