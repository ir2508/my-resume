import { createContext } from "react";

export const EducationContext = createContext()

export const EducationProvider = ({ children }) => {
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
        <EducationContext.Provider value={educationItens}>
            {children}
        </EducationContext.Provider>
    )

}