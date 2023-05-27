import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './SignUp';
import Profile from './Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <PrivateRoute path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/signup" />} />
      </Routes>
     
    </Router>
   
  );
}

// Custom PrivateRoute component to handle authentication
const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = () => {
    const accessToken = localStorage.getItem('accessToken');
    return !!accessToken; // Convert to boolean
  };

  return (
    <Route
      {...rest}
      element={
        isAuthenticated() ? (
          <Element />
        ) : (
          <Navigate to="/signup" />
        )
      }
    />
  );
};

export default App;
