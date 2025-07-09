import { createBrowserRouter } from "react-router-dom";
import AboutMe from "../pages/AboutMe";
import Education from "../pages/Education";
import ProfessionalExperience from "../pages/ProfessionalExperience";
import LayoutDefault from "../layouts/LayoutDefault";

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
                element: <Education />
            },
            {
                path: 'professional-experience',
                element: <ProfessionalExperience />
            }, 
            {
                path: '*',
                element: "Ops, page not found! Try again"
            }
        ]
    },
])