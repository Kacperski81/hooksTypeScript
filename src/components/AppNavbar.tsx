import { NavLink } from "react-router-dom";

export function AppNavbar() {
    return (
        <nav className="flex flex-row justify-between border px-5 py-8">
            <h3>React Hooks</h3>
            <ul className="flex flex-row justify-center gap-3">
                <li><NavLink to="/">Person Editor</NavLink></li>
                <li><NavLink to="rulesOfHooks">Rules of Hooks</NavLink></li>
                <li><NavLink to="kimrof">Kimrof</NavLink></li>
                <li><NavLink to="formik">Formik</NavLink></li>
            </ul>
            <p>Normal</p>
        </nav>
    )
}