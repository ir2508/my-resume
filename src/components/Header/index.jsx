import { NavLink } from "react-router-dom"
import styled from "styled-components"

const HeaderStyled = styled.header`
    width: 100vw;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        font-size: 32px;
        margin-bottom: 50px;
    }

    .item-menu {
        margin-right: 20px;
        border: 1px solid var(--secondary-color);
        padding: 10px 20px;
        border-radius: 5px;
        color: #FFF;
    }

    .ativo {
        background-color: var(--secondary-color);
    }
`

const Header = () => {
    return (
        <HeaderStyled>
            <h1>Hello World! I'm Igor Roberto Front-End Developer </h1>
            <nav>
                <NavLink className={({ isActive }) => `item-menu${isActive ? " ativo" : ""}`} to="/education">Education</NavLink>
                <NavLink className={({ isActive }) => `item-menu${isActive ? " ativo" : ""}`} to="/">About Me</NavLink>
                <NavLink className={({ isActive }) => `item-menu${isActive ? " ativo" : ""}`} to="/professional-experience">Professional Experience</NavLink>
            </nav>
        </HeaderStyled>
    )
}

export default Header