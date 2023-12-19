import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Settings from './pages/Settings';
import Grades from './pages/Grades';
import Kindergarten from './pages/grades/Kindergarten';
import FirstGrade from './pages/grades/FirstGrade';
import SecondGrade from './pages/grades/SecondGrade';
import ThirdGrade from './pages/grades/ThirdGrade';
import FourthGrade from './pages/grades/FourthGrade';
import FifthGrade from './pages/grades/FifthGrade';
import NoPage from './pages/NoPage';
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Settings" element={<Settings/>}/>
          <Route path="/Grades" element={<Grades/>}/>
          <Route path="/Kindergarten" element={<Kindergarten/>}/>
          <Route path="/FirstGrade" element={<FirstGrade/>}/>
          <Route path="/SecondGrade" element={<SecondGrade/>}/>
          <Route path="/ThirdGrade" element={<ThirdGrade/>}/>
          <Route path="/FourthGrade" element={<FourthGrade/>}/>
          <Route path="/FifthGrade" element={<FifthGrade/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
