import { StyledSecondaryText } from "GlobalStyle.styled";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (<StyledSecondaryText>
        Oooooops! Page not found. You can return to our <Link to="/">home page</Link>
        </StyledSecondaryText>
 )}