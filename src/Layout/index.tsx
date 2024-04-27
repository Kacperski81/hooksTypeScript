import { AppNavbar } from "../components";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="max-w-screen-2xl my-0 mx-auto">
            <AppNavbar />
            <Outlet />
        </div>
    )
}