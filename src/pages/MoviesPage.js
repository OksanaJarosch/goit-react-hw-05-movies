import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { searchMovies } from "services/api";


export default function MoviesPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [movies, setMovies] = useState([]);
    // const [page, setPage] = useState(1);

    const [params, setParams] = useSearchParams()
    const searchedMovie = params.get("movie") ?? "";

    useEffect(() => {
        console.log("i am useEffect");

        fetchMovie()

    }, [searchedMovie])
    
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
    
    const onSearch = async (evt) => {
        evt.preventDefault()
        
        const { value } = evt.target.elements.movie; 
        console.log(value);
        if (value) {
        setParams({movie: value})
        }
        await fetchMovie()
        console.log(searchedMovie);
    } 
    
    return (
        <>
            <form onSubmit={onSearch}>
                <input
                    type="text" autoComplete="off" placeholder="Search movie"
                    name="movie"
                >
                </input>
                <button>Search</button>
            </form>

            {error && <p>Oops, something went wrong.</p>}
            {isLoading && <p>Loading...</p>}

            {movies.length > 0 && !isLoading &&(
            <ul>
                {movies.map(
                    movie => {
                        const { id, original_title } = movie;
                        return (
                        <li key={id}>
                                <Link to={`movies/${id}`}>{original_title}</Link>
                        </li>)
                    }
                )}
            </ul>
            )}

        </>
    )}