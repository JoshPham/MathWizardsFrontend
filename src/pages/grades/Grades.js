import React from 'react';
import Navbar from '../../components/Navbar';
import './Grades.css';

class Grades extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    // Simulate a delay to demonstrate loading
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  render() {
    const { data } = this.props;
    const { loading } = this.state;

    return (
      <>
        <Navbar />
        <div className="container">
          <h1>All Grades</h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            data ? (
              data.length > 0 ? (
                data.map((grade) => (
                  <div key={grade.grade_id}>
                    <div className="grade">
                      <h2 className="grade-title">{grade.title}</h2>
                      <p>Description: {grade.description}</p>
                    </div>

                    <h3 className="unit-list">Units:</h3>
                    <ul>
                      {grade.units.map((unit) => (
                        <li key={unit.unit_id}>
                          <p className="unit-title">{unit.title}</p>
                          <p className="unit-description">{unit.description}</p>
                        </li>
                      ))}
                      <hr className="line" />
                    </ul>
                  </div>
                ))
              ) : (
                <p>No grades available.</p>
              )
            ) : (
              <p>Error loading data.</p>
            )
          )}
        </div>
      </>
    );
  }
}

export default Grades;