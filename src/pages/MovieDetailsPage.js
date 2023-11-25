import { MovieDetails } from "components/MovieDetails/MovieDetails";
import { Link, Outlet } from "react-router-dom"

export default function MovieDetailsPage() {

    return (
        <>
            <MovieDetails/>

            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>

            <Outlet />
        </>
 )}