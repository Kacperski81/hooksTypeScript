import Layout from "./Layout";
import {Routes, Route} from "react-router-dom";
import { PersonEditor } from "./person-editor";
import { KimrofUserEditor } from "./kimrof-use-editor/KimrofUserEditor";
import Counter from "./rules-of-hooks/Counter";
import { About } from "./pages/About"
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PersonEditor />} />
          <Route path="rulesOfHooks" element={<Counter />} />
          <Route path="kimrof" element={<KimrofUserEditor />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          
        </Route>
      </Routes>
    </div>
  )
}