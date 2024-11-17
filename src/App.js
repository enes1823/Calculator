import './App.css';

const App = () => {
  return (
    <div className='content'>
      <div className='calculator_body'>
        <div className='calculator_header'>
         <h1 className='score'>0</h1>
        </div>
        <div className='calculator_bottom'>
          <div className='row'>
            <button className='button_calculator'>+</button>
            <button className='button_calculator'>-</button>
            <button className='button_calculator'>*</button>
            <button className='button_calculator'>/</button>
          </div>
          <div className='row'>
            <button className='button_calculator'>7</button>
            <button className='button_calculator'>8</button>
            <button className='button_calculator'>9</button>
            <button className='button_calculator'>√</button>
          </div>
          <div className='row'>
            <button className='button_calculator'>4</button>
            <button className='button_calculator'>5</button>
            <button className='button_calculator'>6</button>
            <button className='button_calculator'>^</button>
          </div>
          <div className='row'>
            <button className='button_calculator'>1</button>
            <button className='button_calculator'>2</button>
            <button className='button_calculator'>3</button>
            <button className='button_calculator'>%</button>
          </div>
          <div className='row'>
            <button className='button_calculator_0'>0</button>
            <button className='button_calculator'>.</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
