import { useState } from 'react';
import './App.css';
 import Header from "./Header";

function App() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fatherName: '',
    motherName: '',
    email: '',
    password: '',
    dob: '',
    aadhaar: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({...prev,
      [name]: value
    }));
  };

  const Next = () => {
    if (step < 3) setStep(step + 1);
    else {
      alert('Please fill in all required fields.');
    }
  };

  const Back = () => {
    if (step > 0) setStep(step - 1);
  };

  const submit = () => {
    
    if (Object.values(formData).includes('')) {
      alert('Please fill all fields.');
      return;
    }

    let prevData = JSON.parse(localStorage.getItem("userData")) || [];
    prevData.push(formData);

    localStorage.setItem("userData", JSON.stringify(prevData));
    setFormData({
      firstName: '',
      lastName: '',
      fatherName: '',
      motherName: '',
      email: '',
      password: '',
      dob: '',
      aadhaar: ''
    });

    alert('Form submitted successfully!');
    setStep(0);
  };

  const inputSteps = [
    <div className='main' key={1}>
      <h1>Step 1</h1>
      <input
        type="text"
        placeholder='Enter your first name'
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder='Enter your last name'
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
    </div>,

    <div className='main' key={2}>
      <h1>Step 2</h1>
      <input
        type="text"
        placeholder='Enter your father name'
        name="fatherName"
        value={formData.fatherName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder='Enter your mother name'
        name="motherName"
        value={formData.motherName}
        onChange={handleChange}
      />
    </div>,

    <div className='main' key={3}>
      <h1>Step 3</h1>
      <input
        type="email"
        placeholder='Enter email'
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder='Enter your password'
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
    </div>,

    <div className='main' key={4}>
      <h1>Step 4</h1>
      <input
        type="date"
        name="dob"
        value={formData.dob}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder='Enter your Aadhaar card number'
        name="aadhaar"
        value={formData.aadhaar}
        onChange={handleChange}
      />
    </div>
  ];

  return (
    <>
      {<Header /> }
      {inputSteps[step]}

      <div className='buttons'>
        <button onClick={Back} disabled={step === 0}>Back</button>
        <button onClick={Next}disabled={step === inputSteps.length - 1}>Next</button>
        <button onClick={submit}>Submit</button>
      </div>
    </>
  );
}

export default App;




