import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const handleSignup = () => {
    // Perform signup logic
    // ...
    navigate('/profile'); // Redirect to profile page after successful signup
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default SignUp;
