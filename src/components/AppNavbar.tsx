import { useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

export function AppNavbar() {

    const [toggleMenu, setToggleMenu] = useState(true);

    return (

        <header className="flex items-center justify-between mx-auto my-4">

            <div className="ml-4">
                <h2>React Hooks</h2>
            </div>

            <button
                className="md:hidden mr-4"
                onClick={() => {
                    console.log({toggleMenu})
                    setToggleMenu(!toggleMenu)}
                }
            >
                Menu
            </button>

            <div className={clsx("w-full md:w-auto vissible md:block", {"hidden": toggleMenu})}>
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