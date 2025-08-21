import { useState } from 'react';

function Register({ onRegister, goToLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({ username, password });
  }

  return (
    <>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <button type="button" onClick={goToLogin}>Back to Login</button>
    </>
  );
}

export default Register;