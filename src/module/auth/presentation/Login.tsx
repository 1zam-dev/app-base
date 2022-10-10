import { Button } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "src/store/auth/AuthProvider";

export default function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  const auth = useAuth();

  let from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    auth.signin("admin", () => {
      navigate(from, { replace: true });
    });
  };

  return <Button onClick={handleLogin}>Login</Button>;
}
