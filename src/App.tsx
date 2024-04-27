import Layout from "./Layout";
import {Routes, Route} from "react-router-dom";
import { PersonEditor } from "./person-editor";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PersonEditor />} />
          <Route path="rulesOfHooks" element={<h3>Rooles of Hooks</h3>} />
          <Route path="kimrof" element={<h3>Kimrof</h3>} />
          <Route path="formik" element={<h3>Formik</h3>} />
          <Route path="*" element={<h1>Not Found</h1>} />
          
        </Route>
      </Routes>
    </div>
  )
}