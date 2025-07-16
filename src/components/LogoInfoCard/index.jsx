import styled from "styled-components"
import TextLabel from "../TextLabel"

const CardStyled = styled.div`
    margin-top: 10px;
    display: flex;
    gap: 50px;
    justify-content: center;
    align-items: center;

    img {
        max-width: 170px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        border-top: 1px solid #FFF;

        img {
            margin-top: 20px;
        }
    }
`

const LogoInfoCard = ({ infoDetails }) => {
    return (
        <CardStyled>
            <img src={`/images/logos/${infoDetails.logoPath}`} alt={`Logo ${infoDetails.institution}`} />
            <TextLabel>
                {`${infoDetails.period} | ${infoDetails.course ? infoDetails.course : infoDetails.jobDescription} - ${infoDetails.institution}`}
            </TextLabel>
        </CardStyled>
    )
}

export default LogoInfoCard