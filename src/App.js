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
import axios from 'axios';
import React from 'react';
import "./App.css";

class App extends React.Component {
  state = { grades: [] }

  componentDidMount() {
    // Fetch grade data
    axios.get('http://localhost:8000/grade/')
      .then(res => {
        const grades = res.data;
        this.setState({ grades });

        // Fetch unit data for each grade
        grades.forEach(grade => {
          axios.get(`http://localhost:8000/units/${grade.grade_id}/`)
            .then(res => {
              const units = res.data;
              const updatedGrades = this.state.grades.map(g => {
                if (g.grade_id === grade.grade_id) {
                  return { ...g, units: units };
                }
                return g;
              });
              this.setState({
                grades: updatedGrades
              });
            })
            .catch(err => {
              console.error(`Error fetching unit data for grade ${grade.grade_id}:`, err);
            });
        });
      })
      .catch(err => {
        console.error('Error fetching grade data:', err);
      });
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Grades" element={<Grades data={this.state.grades} />} />
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
