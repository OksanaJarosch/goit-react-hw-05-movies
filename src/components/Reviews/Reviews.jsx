import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "services/api";
import { ReviewsList, StyledAuthor, StyledItem } from "./Reviews.styled";
import { Container, StyledSecondaryText } from "GlobalStyle.styled";

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

            {reviews.length > 0 && (
                <Container>
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
                    </Container>
            )}
            {reviews.length === 0 && !isLoading &&(<StyledSecondaryText>We don't have any reviews for this movie yet.</StyledSecondaryText>)}
        </>
    )
}