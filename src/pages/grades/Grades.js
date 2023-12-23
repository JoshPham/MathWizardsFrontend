import React from 'react';
import Navbar from '../../components/Navbar';
import './Grades.css';

class Grades extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <>
        <Navbar />
        <div className="container">
          <h1>All Grades</h1>
          {data ? (
            data.length > 0 ? (
              data.map((grade) => (
                <div key={grade.grade_id}>
                  <h2>{grade.title}</h2>
                  <p>Description: {grade.description}</p>
                  <h3>Units:</h3>
                  <ul>
                    {grade.units.map((unit) => (
                      <li key={unit.unit_id}>{unit.title}</li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p>No grades available.</p>
            )
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </>
    );
  }
}

export default Grades;