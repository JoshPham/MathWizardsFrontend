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
                  <div className="grade">
                    <h2 class="grade-title">{grade.title}</h2>
                    <p>Description: {grade.description}</p>
                  </div>

                  <h3 class="unit-list">Units:</h3>
                  <ul>
                    {grade.units.map((unit) => (
                      <li key={unit.unit_id}>
                        <p class="unit-title">{unit.title}</p>
                        <p class="unit-description">{unit.description}</p>
                      </li>
                    ))}
                    <hr class="line"/>
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