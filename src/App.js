import './App.css';
import { useState } from 'react';

const App = () => {

  const [result, setResult] = useState(0);

  return (
    <div className='content'>
      <div className='calculator_body'>
        <div className='calculator_header'>
         <h1 className='result'>{result}</h1>
        </div>
        <div className='calculator_bottom'>
          <div className='row'>
            <button className='button_calculator'>+</button>
            <button className='button_calculator'>-</button>
            <button className='button_calculator'>*</button>
            <button className='button_calculator'>/</button>
          </div>
          <div className='row'>
            <button className='button_calculator_number'>7</button>
            <button className='button_calculator_number'>8</button>
            <button className='button_calculator_number'>9</button>
            <button className='button_calculator'>√</button>
          </div>
          <div className='row'>
            <button className='button_calculator_number'>4</button>
            <button className='button_calculator_number'>5</button>
            <button className='button_calculator_number'>6</button>
            <button className='button_calculator'>^</button>
          </div>
          <div className='row'>
            <button className='button_calculator_number'>1</button>
            <button className='button_calculator_number'>2</button>
            <button className='button_calculator_number'>3</button>
            <button className='button_calculator'>%</button>
          </div>
          <div className='row'>
          <button className='button_calculator' id='clear_button'>C</button>
            <button className='button_calculator_number' id='zero_button'>0</button>
            <button className='button_calculator' id='equal_button'>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
