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

import axios from 'axios';
import React from 'react';

class App extends React.Component {
  state = { details: [] }

  componentDidMount() {
    let data;
    axios.get('http://localhost:8000')
      .then(res => {
        data = res.data;
        this.setState({
          details: data
        });
      })
      .catch(err => {})
  }

  render() {
    return (
      // <div>
      //   <h1>django generated</h1>
      //   {/* {this.state.details.map((output, id) => (
      //     <div key={id}>
      //       <h1>{output.question}</h1>
      // </div>
      //   ))} */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Grades" element={<Grades details={this.state.details} />} />
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