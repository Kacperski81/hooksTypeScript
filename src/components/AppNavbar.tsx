import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { ThemeContext } from "../utils/themeContext";

export function AppNavbar() {

    const [toggleMenu, setToggleMenu] = useState(true);
    const { fontFamily, setFontFamily } = useContext(ThemeContext);
    console.log(fontFamily)

    return (

        <header className={`${fontFamily} grid grid-cols-3 md:flex md:items-center md:justify-between mx-auto my-4`}>

            <div className="ml-4">
                <h2>React Hooks</h2>
            </div>

            <button
                className="md:order-4 md:mr-4 justify-self-end"
                onClick={() => {
                    setFontFamily((prev) => prev === "font-cursive" ? "font-serif" : "font-cursive")
                }}
            >
                Cursive
            </button>

            <button
                className="md:hidden mr-4"
                onClick={() => {
                    console.log({ toggleMenu })
                    setToggleMenu(!toggleMenu)
                }
                }
            >
                Menu
            </button>

            <div className={clsx("w-full md:w-auto vissible md:block ml-3 md:grow md:flex md:justify-end", { "hidden": toggleMenu })}>
                <ul className="md:flex">

                    <li className="mr-2">
                        <NavLink to="/">Person Editor</NavLink>
                    </li>

                    <li className="mr-2">
                        <NavLink to="/rulesOfHooks">Rules of Hooks</NavLink>
                    </li>

                    <li className="mr-2">
                        <NavLink to="/kimrof">Kimrof</NavLink>
                    </li>

                    <li className="mr-2">
                        <NavLink to="/formik">Formik</NavLink>
                    </li>

                </ul>

            </div>

        </header>
    )
}