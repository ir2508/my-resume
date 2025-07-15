import { useContext } from "react"
import LogoInfoCard from "../../components/LogoInfoCard"
import styled from "styled-components"
import { EducationContext } from "../../contexts/EducationContext"

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
    const educationList = useContext(EducationContext)

    return (
        <EducationStyled>
            {educationList.map((item) => <LogoInfoCard key={item.key} infoDetails={item} />)}
        </EducationStyled>
    )
}

export default Education