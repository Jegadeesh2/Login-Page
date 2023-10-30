import styled from "styled-components";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import imageLeft from "../assets/left-image.svg";
import imageRight from "../assets/right-image.svg";

const Logo = styled.h2`
  position: fixed;
  top: 1rem;
  left: 1rem;
  padding: 6px 12px;
  border-radius: 6px;
  margin: 0;
  font-weight: bold;
  background-color: #0000ff;
  color: #f0f0f0;
`;

const BackgroundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
  padding: 0 20px;
`;

const ImageRight = styled.img`
  max-height: 100%;
  max-width: 40%;
  position: fixed;
  right: 0;
  bottom: 0;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const ImageLeft = styled.img`
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 10px;
  max-height: 100%;
  max-width: 35%;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const LoginForm = styled.div`
  padding: 0px 1rem;
  max-width: 400px;
  z-index: 1;
`;

const FormTitle = styled.h3`
  padding-left: 10px;
  margin: 0;
  color: #0056b3;
`;

const FormInput = styled.input`
  font-family: "Poppins", sans-serif;
  margin: 10px 0;
  padding: 8px 0px 8px 15px;
  width: 100%;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 15px;
  &:focus {
    outline: 2px solid #0056b3;
  }
`;

const FormButton = styled.button`
  font-family: "Poppins", sans-serif;
  width: 100%;
  padding: 8px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const FormText = styled.p`
  margin: 10px 0;
  text-align: center;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ErrorText = styled.div`
  color: red;
  text-align: center;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Please fill in all fields");
      return;
    }
    if (!email.includes("@")) {
      setError("Please provide a valid email address");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    setError("");
    navigate("/home");
  };

  const clearError = () => {
    setError("");
  };

  return (
    <BackgroundContainer>
      <Logo> Aimed Labs Task</Logo>
      <ImageLeft src={imageLeft} alt="financial-left" />
      <LoginForm>
        <FormTitle>Login</FormTitle>
        {error && <ErrorText>{error}</ErrorText>}
        <form onSubmit={handleFormSubmit}>
          <FormInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={clearError}
          />
          <FormInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={clearError}
          />
          <br />
          <FormButton type="submit">Login</FormButton>
        </form>
        <FormText>
          If you don't have an account, <Link to="/signup">Sign Up</Link>
        </FormText>
      </LoginForm>
      <ImageRight src={imageRight} alt="financial-right" />
    </BackgroundContainer>
  );
};

export default Login;
