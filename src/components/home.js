import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const loaction = useLocation();

  return (
    <div className="homepage">
      <h1>Hello {loaction.state.id} and welcome to the home</h1>
    </div>
  );
}

export default Home;
