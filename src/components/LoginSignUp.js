import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './LoginSignUp.css'; // Import your custom CSS file
import GoogleLogin from 'react-google-login'; // Import GoogleLogin component
import LoginWithGoogle from "./LoginWithGoogle";
import LoginWithApple from './LoginWithApple'
import {useNavigate} from 'react-router-dom'


function LoginSignUp() {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    loginWithRedirect({
      screen_hint: "login", // Show the login screen
      login_hint: email, // Pre-fill email if provided
    });
  };

  const handleRegisterLinkClick = (event) => {
    event.preventDefault();
    loginWithRedirect({
      screen_hint: "signup", // Show the signup screen
    });
  };

  const responseGoogle = (response) => {
    console.log("here",response);
    const profilePicture = response.data.picture; // Extract the profile picture URL
    navigate(`/dashboard?profilePicture=${encodeURIComponent(profilePicture)}`);
    // navigate("/dashboard");
    // console.log(response);
    // Here you can handle the response from Google
  };


  


  return (
    <div className="row">
      <div className="col-md-4 black-bg d-flex justify-content-center align-items-center vh-100"> {/* Apply the black background */}
        <h1>Board.</h1>
      </div>
      <div className="col-md-8 d-flex justify-content-center align-items-center vh-100 container">
        <h2 className="text-left mb-3">Sign In</h2>
        <h4 className="style={{ textAlign: 'left' }} mb-3">Sign in to your account</h4>

        <div className="login-container"> {/* Add this div for Google login */}
          <div className="login-buttons">
              <LoginWithGoogle onGoogleLogin={responseGoogle}/>
              <LoginWithApple/>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow form-container">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                size="sm" // Larger input size
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                size="sm" // Larger input size
              />
              <Form.Text className="text-muted">
                <a href="#">Forgot Password?</a>
              </Form.Text>
            </Form.Group>

            <div className="d-grid gap-2" >
              <Button type="button" style={{ backgroundColor: 'black' }} onClick={handleLogin}>
                Sign In
              </Button>
            </div>
          </Form>
        </div>
          <p className="text-center mt-3">
            Don't have an account? <a href="#" onClick={handleRegisterLinkClick}>Register here</a>.
          </p>
          
      </div>
      {/* <button onClick={redirectToDashboard}>Go to Dashboard</button> */}

    </div>
  );
}

export default LoginSignUp;
