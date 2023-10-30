import React from "react";
import styled from "styled-components";

const HomePage = styled.h1`
  text-align: center;
  padding-top: 5rem;
  color: #0000ff;
`;

const Home = () => {
  return <HomePage>Welcome, you Logged in successfully!.</HomePage>;
};

export default Home;
