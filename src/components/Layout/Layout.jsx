import { GlobalStyle } from "GlobalStyle"
import { Outlet } from "react-router-dom"
import { StyledHeader, StyledList, StyledNavLink } from "./Layout.styled"

export const Layout = () => {
    return(
    <>
    <StyledHeader>
        <nav>
          <StyledList>
            <li>
              <StyledNavLink to="/">Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="movies">Movies</StyledNavLink>
            </li>
          </StyledList>
        </nav>
        </StyledHeader>
        
        <div>
            <Outlet />
        </div>

    <GlobalStyle />
    </>
)}