import { useContext } from "react"
import styled from "styled-components"
import { ProfessionalContext } from "../../contexts/ProfessionalContext"
import LogoInfoCard from "../../components/LogoInfoCard"

const LastProfessionalStyled = styled.section`
display: flex;
    flex-direction: column;
    /* justify-content: space-evenly; */
    /* align-items: center; */
    gap: 20px;
    width: 80%;
    margin: 0 auto;
`

const ProfessionalExperience = () => {
    const { lastProfessionalItens, otherProfessionalItens } = useContext(ProfessionalContext)
    console.log(lastProfessionalItens)

    return (
        <>
            <LastProfessionalStyled>
                {lastProfessionalItens.map((item) => <LogoInfoCard key={item.key} infoDetails={item} />)}
            </LastProfessionalStyled>
        </>
    )
}

export default ProfessionalExperience