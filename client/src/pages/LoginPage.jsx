import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import { useLocation, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  return (
    <div className="container mx-auto">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
