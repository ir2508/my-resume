import { createContext } from "react";

export const ProfessionalContext = createContext()

export const ProfessionalProvider = ({ children }) => {
    const lastProfessionalItens = [
        {
            key: 1,
            institution: "Senac",
            jobDescription: "Senior Front-End Developer (JavaScript, React, Jest, Cypress.io, Python and NodeJS)",
            period: "2024 - Present",
            logoPath: "senac.png",
        },
        {
            key: 2,
            institution: "SENAI",
            jobDescription: "Front-End Development Instructor (HTML, CSS, JavaScript, React, Programming logic, Oracle Cloud and Azure)",
            period: "2021 - 2024",
            logoPath: "senai.png",
        },
        {
            key: 3,
            institution: "Nova Onda Comunicação",
            jobDescription: "Systems Developer (HTML, CSS, JavaScript, PHP and WordPress)",
            period: "2019 - 2021",
            logoPath: "novaonda.png",
        },
        {
            key: 4,
            institution: "Gsaúde",
            jobDescription: "Systems Developer (HTML, CSS, JavaScript and WordPress)",
            period: "2018 - 2019",
            logoPath: "gsaude.png",
        }
    ]

    const otherProfessionalItens = [
        {
            key: 1,
            institution: "Brazilian Army Information Technology Department",
            logoPath: "eb.png",
        },
        {
            key: 2,
            institution: "Walmart",
            logoPath: "walmart.png",
        },
        {
            key: 3,
            institution: "FITO",
            logoPath: "fito.png",
        },
        {
            key: 4,
            institution: "Elo Criativo",
            logoPath: "elocriativo.png",
        },
    ]

    return (
        <ProfessionalContext.Provider value={{ lastProfessionalItens, otherProfessionalItens }}>
            {children}
        </ProfessionalContext.Provider>
    )
}