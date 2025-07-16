import styled from "styled-components"
import TextLabel from "../../components/TextLabel"

const ProfileDescStyled = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 20px;
    width: 80%;
    margin: 50px auto;

    p {
        font-size: 1.1em
    }

    .link-social-media {
        color: white;
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        flex-direction: column;

        ul li {
            text-align: left;
        }
    }
`

const ImgProfileStyled = styled.img`
    width: 250px;
    border-radius: 50%;
    box-shadow: 0px 0px 15px var(--secondary-color);


`

const AboutMe = () => {
    return (
        <>
            <ProfileDescStyled>
                <ImgProfileStyled src="https://github.com/ir2508.png"/>
                <TextLabel>
                    <p>I'm a <strong>Front-End Developer</strong> with a strong foundation in <strong>JavaScript</strong> and experience working with frameworks like <strong>React</strong>.</p>
                    <p>I also have a background in <strong>Software Quality</strong>, which has given me a complete perspective on the software development lifecycle. From code to user experience.</p>
                    <p>I'm currently improving my skills in <strong>TypeScript</strong> and <strong>Node.js</strong> to better my full-stack capabilities.</p>
                    <hr></hr>
                    <h3>How to find me</h3>
                    <ul>
                        <li>LinkedIn: <a className="link-social-media" href="https://www.linkedin.com/in/igor-roberto-santos/" target="_blank">linkedin.com/igor-roberto-santos</a></li>
                        <li>E-mail: <a className="link-social-media" href="mailto: roberto.igor.18@gmail.com" target="_blank">roberto.igor.18@gmail.com</a></li>
                        <li>GitHub: <a className="link-social-media" href="https://github.com/ir2508" target="_blank">ir2508</a></li>
                    </ul>
                </TextLabel>
            </ProfileDescStyled>
            <section></section>
        </>
    )
}

export default AboutMe