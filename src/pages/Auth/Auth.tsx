import React, { useState } from "react";

import { UserName } from "../../domain/user";
import { useAuthenticate } from "../../application/authenticate";
import  "./Auth.scss";
import { Navigate } from "react-router-dom"; 
import { OutlinedInput, Button } from "@mui/material";

const Auth = () => {
  const [name, setName] = useState<UserName>("");
  const [email, setEmail] = useState<Email>("");
  const [loading, setLoading] = useState(false);

  const { user, authenticate } = useAuthenticate();
  if (!!user) return <Navigate to="/" replace />;


  async function handleSubmit(e: React.FormEvent) {
    setLoading(true);
    e.preventDefault();

    await authenticate(name, email);
    setLoading(false);
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label>
        <span>Name :</span>
        <OutlinedInput   
           type="text"
           name="name"
           value={name} 
            onChange={(e) => setName(e.target.value)} 
            autoFocus />
      </label>
      <label>
        <span>Email :</span>
        <OutlinedInput   
            type="email" 
            name="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} />
      </label>

      <Button variant="contained" type="submit" disabled={loading}>
        {loading ? "Trying to login..." : "Login"}
      </Button>
    </form>
  );
}

export default Auth;
