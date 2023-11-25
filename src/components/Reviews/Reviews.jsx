import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "services/api";
import { ReviewsList, StyledAuthor, StyledItem, StyledSecondaryText } from "./Reviews.styled";

export const Reviews = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [reviews, setReviews] = useState([]);

    const { movieId } = useParams();

    useEffect(() => {
        const fetchReviews = async () => {
            setIsLoading(true)
            try {
                const {results} = await getReviews(movieId)
                console.log(results);
                setReviews([...results])
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchReviews()
    }, [movieId]);
    
    return (
        <>
            {error && <StyledSecondaryText>Oops, something went wrong.</StyledSecondaryText>}
            {isLoading && <StyledSecondaryText>Loading...</StyledSecondaryText>}

            {reviews.length > 0 ? (
                <ReviewsList>
                    {reviews.map(review => {
                        const { author, content } = review;
                        return (
                            <StyledItem key={author}>
                                <StyledAuthor>{author}</StyledAuthor>
                                <p>{content}</p>
                            </StyledItem>
                        )
                    }
                    )}
                </ReviewsList>
            ) : (<StyledSecondaryText>We don't have any reviews for this movie yet.</StyledSecondaryText>)
            }
        </>
    )
}