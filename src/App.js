import {Navigate, Route, Routes} from "react-router-dom";

function App() {

  return (
      <div>
        {/*<Routes>
          <Route path='/:language' element={<HomePage />} />
          <Route path='/:language/contact' element={<SecondPage />} />
          <Route path='/:language/about' element={<About />} />
          <Route path='*' element={<Navigate to='/pl' />} />
        </Routes>*/}
          <h1 className="text-3xl font-bold underline">Hello world</h1>
      </div>
  );
}

export default App;
