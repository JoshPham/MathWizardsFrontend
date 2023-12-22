import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Settings from './pages/Settings';
import Grades from './pages/grades/Grades';
import Kindergarten from './pages/grades/Kindergarten';
import FirstGrade from './pages/grades/FirstGrade';
import SecondGrade from './pages/grades/SecondGrade';
import ThirdGrade from './pages/grades/ThirdGrade';
import FourthGrade from './pages/grades/FourthGrade';
import FifthGrade from './pages/grades/FifthGrade';
import NoPage from './pages/NoPage';
import "./App.css";

import axios from 'axios';
import React from 'react';

class App extends React.Component {
  state = { details: [] }

  componentDidMount() {
    axios.get('http://localhost:8000/grade/')  // Make sure to include the trailing slash
      .then(res => {
        const data = res.data;
        this.setState({
          details: data
        });
      })
      .catch(err => {
        console.error('Error fetching data:', err);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Grades" element={<Grades data={this.state.details} />} />
          <Route path="/Kindergarten" element={<Kindergarten />} />
          <Route path="/FirstGrade" element={<FirstGrade />} />
          <Route path="/SecondGrade" element={<SecondGrade />} />
          <Route path="/ThirdGrade" element={<ThirdGrade />} />
          <Route path="/FourthGrade" element={<FourthGrade />} />
          <Route path="/FifthGrade" element={<FifthGrade />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;