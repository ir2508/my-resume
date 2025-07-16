import styled from "styled-components"

const LabelStyled = styled.div`
    background-color: #2B2C6C;
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    box-shadow: 0px 0px 5px var(--secondary-color);
    
    @media (max-width: 768px) {
        text-align: center;
        border-radius: 0px;
        
    }
`

const TextLabel = ({ children }) => {
    return (
        <LabelStyled>
            {children}
        </LabelStyled>
    )
}

export default TextLabel