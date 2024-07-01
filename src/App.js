import {Navigate, Route, Routes} from "react-router-dom";
import Recent from "./components/Recent";
import {MainPage} from "./pages/MainPage";
import './index.css';
import {SecondPage} from "./pages/SecondPage";

function App() {

  return (
      <div>
        <Routes>
          <Route path='*' element={<MainPage />} />
            <Route path='/s' element={<SecondPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
  );
}

export default App;
