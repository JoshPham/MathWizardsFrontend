import Navbar from "../../components/Navbar";
import React from 'react';
import { useParams } from 'react-router-dom';

const GradePage = ({ grades }) => {
  const { gradeNumber } = useParams();
  const gradeData = grades.find(grade => grade.grade_id.toString() === gradeNumber);

  // Check if gradeData or gradeData.units is undefined
  if (!gradeData || !gradeData.units) {
    return <p>Loading...</p>;
  }

  // Render grade content
  return (
    <>
      <Navbar />
      <h1>{gradeData.title}</h1>
      <p>Description: {gradeData.description}</p>

      {/* Render Units */}
      <h2>Units:</h2>
      <ul>
        {Array.isArray(gradeData.units) && gradeData.units.length > 0 ? (
          gradeData.units.map(unit => (
            <li key={unit.unit_id}>
              <strong>{unit.title}</strong>
              <p>Description: {unit.description}</p>

              {/* Render Lessons */}
              <h3>Lessons:</h3>
              <ul>
                {Array.isArray(unit.lessons) && unit.lessons.length > 0 ? (
                  unit.lessons.map(lesson => (
                    <li key={lesson.lesson_id}>
                      <strong>{lesson.title}</strong>
                      <p>Description: {lesson.description}</p>
                      <p>Content: {lesson.content}</p>

                      {/* Render Problems */}
                      <h4>Problems:</h4>
                      <ul>
                        {Array.isArray(lesson.problems) && lesson.problems.length > 0 ? (
                          lesson.problems.map(problem => (
                            <li key={problem.id}>
                              <p>Question: {problem.text_question}</p>
                              <p>Answer: {problem.num_answer}</p>
                              {/* Add more details based on your data structure */}
                            </li>
                          ))
                        ) : (
                          <p>No problems available</p>
                        )}
                      </ul>
                    </li>
                  ))
                ) : (
                  <p>No lessons available</p>
                )}
              </ul>
            </li>
          ))
        ) : (
          <p>No units available</p>
        )}
      </ul>
    </>
  );
};

export default GradePage;