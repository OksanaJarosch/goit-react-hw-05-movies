import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { searchMovies } from "services/api";
import { MovieContainer, StyledForm, StyledItem, StyledLink, StyledList } from "./MoviesPage.styled";
import { MdOutlineArrowForwardIos } from "react-icons/md";


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
                {movies.map(
                    movie => {
                        const { id, original_title } = movie;
                        return (
                        <StyledItem key={id}><MdOutlineArrowForwardIos/> 
                                <StyledLink to={`${id}`}>{original_title}</StyledLink>
                        </StyledItem>)
                    }
                )}
            </StyledList>
            )}

        </MovieContainer>
    )}