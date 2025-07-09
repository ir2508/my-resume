import { Link } from "react-router-dom"
import styled from "styled-components"

const HeaderStyled = styled.header`
    width: 100vw;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        font-size: 32px
    }

    .item-menu {
        margin-right: 20px;
        background-color: var(--secondary-color);
        padding: 10px 20px;
        border-radius: 5px;
        color: #FFF;
    }
`

const Header = () => {
    return (
        <HeaderStyled>
            <h1>Hello World! I'm Igor Roberto Front-End Developer </h1>
            <nav>
                <Link className="item-menu" to="/education">Education</Link>
                <Link className="item-menu" to="/">About Me</Link>
                <Link className="item-menu" to="/professional-experience">Professional Experience</Link>
            </nav>
        </HeaderStyled>
    )
}

export default Header