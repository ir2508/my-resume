import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const LayoutDefault = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default LayoutDefault