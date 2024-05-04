import Layout from "./Layout";
import {Routes, Route} from "react-router-dom";
import { PersonEditor } from "./person-editor";
import Counter from "./rules-of-hooks/Counter";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PersonEditor />} />
          <Route path="rulesOfHooks" element={<Counter />} />
          <Route path="kimrof" element={<h3>Kimrof</h3>} />
          <Route path="formik" element={<h3>Formik</h3>} />
          <Route path="*" element={<h1>Not Found</h1>} />
          
        </Route>
      </Routes>
    </div>
  )
}