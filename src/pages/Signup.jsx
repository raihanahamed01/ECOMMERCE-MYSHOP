import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup({ setUser }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (username && email && password) {
      setUser({ username, email });
      navigate("/");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div >
      <form
        onSubmit={handleSignup}
        
      >
        <h2 >Signup</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
         
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
       
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
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
