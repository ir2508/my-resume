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
        font-size: 18px
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
                </TextLabel>
            </ProfileDescStyled>
            <section></section>
        </>
    )
}

export default AboutMe