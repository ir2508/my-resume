import styled from "styled-components"
import TextLabel from "../TextLabel"

const CardStyled = styled.div`
    margin-top: 10px;
    display: flex;
    gap: 50px;
    justify-content: center;
    align-items: center;
`

const LogoInfoCard = ({ educationDetails }) => {
    return (
        <CardStyled>
            <img src={`src\\assets\\images\\logos\\${educationDetails.logoPath}`} alt={`Logo ${educationDetails.institution}`}/>
            <TextLabel>
                {`${educationDetails.period} | ${educationDetails.course} - ${educationDetails.institution}`}
            </TextLabel>
        </CardStyled>
    )
}

export default LogoInfoCard