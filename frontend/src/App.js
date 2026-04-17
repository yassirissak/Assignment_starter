import { useState, useEffect } from 'react';

function App() {
  const [students, setStudents] = useState([]);
  //fetching students from backend
  useEffect(() => {
    fetch('http://127.0.0.1:5000/students')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  return (
    <div className="App">
      <h1>Students List</h1>
      <ul>
        {students.map(student => (
          <li key={student.id}>{student.name} - {student.course}</li>
        ))}
      </ul>
    </div>
  );


}

export default App ;