import { AppNavbar } from "../components";
import { Outlet } from "react-router-dom";
import {ThemeContextProvider} from "../utils/Theme";

export default function Layout() {
    return (
        <div className="sm:max-w-screen-sm lg:max-w-screen-2xl my-0 mx-auto">
            <ThemeContextProvider>

                <AppNavbar />
                <main>
                    <Outlet />
                </main>
            </ThemeContextProvider>
        </div>
    )
}