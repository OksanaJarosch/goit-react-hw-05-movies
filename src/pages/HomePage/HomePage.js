import { useEffect, useState } from "react"
import { getTrendingMovies } from "services/api";
import { InfoContainer, StyledItem, StyledLink, StyledList, StyledTitle } from "./HomePage.styled";
import { MdOutlineNoPhotography } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { Container, StyledSecondaryText } from "GlobalStyle.styled";

export default function HomePage() {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchTrending = async () => {
            setIsLoading(true)
            try {
                const { results } = await getTrendingMovies()
                setMovies(prev => [...prev, ...results])
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchTrending()
    }, [])

    const location = useLocation();

    return (
        <Container>
            <StyledTitle>Trending today</StyledTitle>

            {error && <StyledSecondaryText>Oops, something went wrong.</StyledSecondaryText>}
            {isLoading && <StyledSecondaryText>Loading...</StyledSecondaryText>}

            <StyledList>
                {movies.length > 0 && (
                    movies.map(
                        (movie, index) => {
                            const { id, original_title, poster_path
                            } = movie;
                            const BASE_URL = "https://image.tmdb.org/t/p/w200";
                        const photo = BASE_URL + poster_path;

                            return (
                                <StyledItem key={index}>
                                    <StyledLink to={`movies/${id}`} state={{from: location}}>
                                    {poster_path ? (<img src={photo} alt={original_title} />) : (<MdOutlineNoPhotography style={{ width: '200px', height: "200px", color: '#8080803b' }} />)}
                                    <InfoContainer>
                                    {original_title}
                                        </InfoContainer>
                                        </StyledLink>
                                </StyledItem>)
                        }
                    )
                )}
            </StyledList>
        </Container>
    )
}