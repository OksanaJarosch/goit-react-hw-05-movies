import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { searchMovies } from "services/api";
import { InfoContainer, MovieContainer, StyledForm, StyledItem, StyledLink, StyledList } from "./MoviesPage.styled";
import { MdOutlineNoPhotography } from "react-icons/md";


export default function MoviesPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [movies, setMovies] = useState([]);

    const [params, setParams] = useSearchParams()
    const searchedMovie = params.get("movie") ?? "";

    useEffect(() => {
        const fetchMovie = async () => {
        setIsLoading(true)
          try {
            if (!searchedMovie) {
                return
            }
            const {results} = await searchMovies(searchedMovie)
            console.log(results);
            if (!results) {
                return
            }
            setMovies(results)

        } catch (error) {
            setError(error)
            
        } finally {
            setIsLoading(false)
        }
      };

        fetchMovie()

    }, [searchedMovie])
    
    const location = useLocation();

    
    const onSearch = (evt) => {
        evt.preventDefault()
        
        const { value } = evt.target.elements.movie; 
        console.log(value);
        if (value) {
        setParams({movie: value})
        }
    } 
    
    return (
        <MovieContainer>
            <StyledForm onSubmit={onSearch}>
                <input
                    type="text" autoComplete="off" placeholder="Search movie"
                    name="movie"
                >
                </input>
                <button>Search</button>
            </StyledForm>

            {error && <p>Oops, something went wrong.</p>}
            {isLoading && <p>Loading...</p>}

            {movies.length > 0 && !isLoading &&(
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
                                     <StyledLink to={`${id}`} state={{from: location}}>
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
            )}

        </MovieContainer>
    )}