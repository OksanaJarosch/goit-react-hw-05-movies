import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { getTrendingMovies } from "services/api";

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
        <div>
            <h1>Trending today</h1>

            {error && <p>Oops, something went wrong.</p>}
            {isLoading && <p>Loading...</p>}

            <ul>
                {movies.length > 0 && (
                    movies.map(
                        (movie, index) => {
                            const { id, original_title } = movie;

                            return (
                                <li key={index}>
                                    <Link to={`movies/${id}`}>{original_title}</Link>
                                </li>)
                        }
                    )
                )}
            </ul>
        </div>
    )
}