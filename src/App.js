import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("Anukrati");

  return (
    <div className="App">
      <h1>Class Component</h1>
      <ClassComponent />
      <h1>Functional Component</h1>
      <FunctionalComponent name={name} number={15} setName={setName} />
    </div >
  );
}

export default App;
