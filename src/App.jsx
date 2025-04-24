import { useState } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState(0);

  function Next() {
    if (step < 4) {
      setStep(step + 1);
    }
  }

  function Back() {
    if (step > 0) {
      setStep(step - 1);
    }
  }

  const input = [
    <div className='main' key={1}>
      <h1>Step 1</h1>
      <input type="text" placeholder='Enter your first name' />
      <input type="text" placeholder='Enter your last name' />
    </div>,

    

    <div className='main' key={2}>
      <h1>Step 2</h1>
      <input type="text" placeholder='Enter your father name' />
      <input type="text" placeholder='Enter your mother name' />
    </div>,

    <div className='main' key={3}>
      <h1>Step 3</h1>
      <input type="email" placeholder='Enter email' />
      <input type="password" placeholder='Enter your password' />
    </div>,

    <div className='main' key={4}>
      <h1>Step 4</h1>
      <input type="date" placeholder='Enter your date of birth' />
      <input type="text" placeholder='Enter your Aadhaar card number' />
    </div>
  ];

  return (
    <>
      {input[step]}

      <div className='buttons'>
        <button onClick={Back} >Back</button>
        <button onClick={Next} >Next</button>
      </div>
    </>
  );
}

export default App;
