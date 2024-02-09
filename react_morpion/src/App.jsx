
import './App.css'
import { useState } from 'react';

function App() {


 function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X');
    console.log('square clicked')
    console.log(value)
  }
 

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );

 }   

  return (

    <div className='fragment'>

      <div className='resetButton'><button onClick={() =>{
        setValue(null)
      }}>reset</button></div>
  <div className="board-row">
        <Square  />
        <Square  />
        <Square  />
      </div>
      <div className="board-row">
        <Square  />
        <Square  />
        <Square  />
      </div>
      <div className="board-row">
        <Square  />
        <Square  />
        <Square  />
      </div>
    </div>
  )
}

export default App
