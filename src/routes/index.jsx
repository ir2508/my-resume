import { createBrowserRouter } from "react-router-dom";
import AboutMe from "../pages/AboutMe";
import Education from "../pages/Education";
import ProfessionalExperience from "../pages/ProfessionalExperience";
import LayoutDefault from "../layouts/LayoutDefault";
import { EducationProvider } from "../contexts/EducationContext";
import { ProfessionalProvider } from "../contexts/ProfessionalContext";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutDefault />,
        children: [
            {
                path: '/',
                element: <AboutMe />
            },
            {
                path: 'education',
                element: <EducationProvider><Education /></EducationProvider>
            },
            {
                path: 'professional-experience',
                element: <ProfessionalProvider><ProfessionalExperience /></ProfessionalProvider>
            },
            {
                path: '*',
                element: "Ops, page not found! Try again"
            }
        ]
    },
])