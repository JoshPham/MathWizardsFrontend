import React from 'react';
import Navbar from "../components/Navbar";

function Grades({ details }) {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1>Grades</h1>
                {/* Use the details prop as needed */}
                {details.map((output, id) => (
                    <div key={id}>
                        <h1>Question: {output.question}</h1>
                        <h2>Answer: {output.answer}</h2>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Grades;