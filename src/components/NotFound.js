import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NotFoundPage = styled.div`
  text-align: center;
  padding-top: 5rem;
  color: #ff0000;
`;

const NotFound = () => {
  return (
      <NotFoundPage>
        <h2>Page Not found</h2>
        <Link to="/"> Go to Login Page</Link>
      </NotFoundPage>
  );
};

export default NotFound;
