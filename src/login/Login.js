import { TextField } from "@mui/material";
import "./Login.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="B">
      <div className="B1">
        <button onClick={() => navigate("/home")}>GET STARTED</button>
      </div>
    </div>
  );
};

export default Login;
