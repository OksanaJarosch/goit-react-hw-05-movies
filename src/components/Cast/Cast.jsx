import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getActors } from "services/api";
import { MdOutlineNoPhotography } from "react-icons/md";
import { CastList, StyledItem, StyledSecondaryText } from "./Cast.styled";


export const Cast = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [cast, setCast] = useState([]);

    const { movieId } = useParams();

    useEffect(() => {
        const fetchCast = async () => {
            setIsLoading(true)
            try {
                const { cast } = await getActors(movieId)
                setCast([ ...cast ])
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchCast()
    }, [movieId]);


    return (
        <>
            {error && <StyledSecondaryText>Oops, something went wrong.</StyledSecondaryText>}
            {isLoading && <StyledSecondaryText>Loading...</StyledSecondaryText>}

            {cast.length > 0 && (
                <CastList>
                    {cast.map(actor => {
                        const { profile_path, name, character } = actor;
                        const BASE_URL = "https://image.tmdb.org/t/p/w200";
                        const photo = BASE_URL + profile_path;
                        return (
                            <StyledItem key={name}>
                                {profile_path ? (<img src={photo} alt={name} />) : ( <MdOutlineNoPhotography style={{ width: '100px',height: "100px", color: '#80808059' }}/>)}
                                
                                <p>{name}</p>
                                <p>Character: {character}</p>
                            </StyledItem>)
                    })}
                </CastList>
            )}
        </>
    )
}