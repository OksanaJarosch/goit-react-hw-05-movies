import { useEffect, useState } from "react"
import { getTrendingMovies } from "services/api";
import { HomeContainer, StyledItem, StyledLink, StyledList, StyledTitle } from "./HomePage.styled";
import { MdOutlineArrowForwardIos } from "react-icons/md";

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


    return (
        <HomeContainer>
            <StyledTitle>Trending today</StyledTitle>

            {error && <p>Oops, something went wrong.</p>}
            {isLoading && <p>Loading...</p>}

            <StyledList>
                {movies.length > 0 && (
                    movies.map(
                        (movie, index) => {
                            const { id, original_title } = movie;

                            return (
                                <StyledItem key={index}><MdOutlineArrowForwardIos/> 
                                    <StyledLink to={`movies/${id}`}>{original_title}</StyledLink>
                                </StyledItem>)
                        }
                    )
                )}
            </StyledList>
        </HomeContainer>
    )
}