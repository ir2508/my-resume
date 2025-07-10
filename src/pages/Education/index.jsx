import LogoInfoCard from "../../components/LogoInfoCard"
import styled from "styled-components"

const EducationStyled = styled.section`
    display: flex;
    flex-direction: column;
    /* justify-content: space-evenly; */
    /* align-items: center; */
    gap: 20px;
    width: 80%;
    margin: 0 auto;
`

const Education = () => {
    const educationItens = [
        {
            key: 1,
            institution: "FIAP",
            course: "MBA in Software Engineering",
            period: "2025 - In Progress",
            logoPath: "fiap.png",
        },
        {
            key: 2,
            institution: "FIAP",
            course: "Bachelor's Degree in Systems Analysis and Development",
            period: "2025 - 2026",
            logoPath: "fiap.png",
        },
        {
            key: 3,
            institution: "FITO",
            course: "Vocational High School in Web Development",
            period: "2012 - 2015",
            logoPath: "fito.png",
        },
    ]

    return (
        <EducationStyled>
            {educationItens.map((item) => <LogoInfoCard key={item.key} educationDetails={item} />)}
        </EducationStyled>
    )
}

export default Education