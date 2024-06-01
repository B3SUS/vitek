import {Navigate, Route, Routes} from "react-router-dom";
import Recent from "./components/Recent";

function App() {

  return (
      <div>
        {/*<Routes>
          <Route path='/:language' element={<HomePage />} />
          <Route path='/:language/contact' element={<SecondPage />} />
          <Route path='/:language/about' element={<About />} />
          <Route path='*' element={<Navigate to='/pl' />} />
        </Routes>*/}
          <h1 className="text-3xl font-bold underline cursor-pointer">Hello vitek</h1>
          <Recent/>
      </div>
  );
}

export default App;
