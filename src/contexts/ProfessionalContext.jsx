import { createContext } from "react";

export const ProfessionalContext = createContext()

export const ProfessionalProvider = ({ children }) => {
    const professionalItens = []

    return (
        <ProfessionalProvider value={professionalItens}>
            {children}
        </ProfessionalProvider>
    )
}