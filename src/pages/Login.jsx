import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username && password) {
      setUser({ username });
      navigate("/");
    } else {
      alert("Enter valid credentials");
    }
  };

  return (
    <div >
      <form
        onSubmit={handleLogin}
        
      >
        <h2 >Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
         
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          
        />
        <button
          type="submit"
          
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
