import logo from './logo.svg';
import './App.css';
import { Form } from './components/Form';
import { Todo } from './components/Todo';
import { Timer } from './components/Timer';
import { useState } from 'react';
function App() {
  const [show,setShow ] = useState()
  return (
    <div className="App">
      <Todo/>
     {show ?<Timer /> :null }
     <button onClick={()=>{setShow(!show)}}>{show?"HIde":"show"}</button>
    </div>
  );
}

export default App;
