import { Link, Outlet } from "react-router-dom"

export default function MovieDetailsPage() {
    return (
     <>
            <div>Details</div>
            
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