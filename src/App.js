import {Navigate, Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import './index.css';
import {SecondPage} from "./pages/SecondPage";
import {Terms} from "./pages/Terms";
import {Policy} from "./pages/Policy";
import {FaqPage} from "./pages/FaqPage";

function App() {

  return (
      <div>
        <Routes>
          <Route path='*' element={<MainPage />} />
            <Route path='/s' element={<SecondPage />} />
            <Route path='/terms' element={<Terms/>}/>
            <Route path='/policy' element={<Policy/>}/>
            <Route path='/faq' element={<FaqPage/>}/>
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
  );
}

export default App;
