import { AppNavbar } from "../components";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../utils/themeContext";

export default function Layout() {
    const { fontFamily } = useContext(ThemeContext);
    return (
        <div className={`sm:max-w-screen-sm lg:max-w-screen-2xl my-0 mx-auto ${fontFamily}`}>

            <AppNavbar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}