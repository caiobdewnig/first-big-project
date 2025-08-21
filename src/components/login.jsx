import { useState } from 'react';


function Login({ onLogin, goToRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(username, password);
  }

  return (
    <>
      <h1>Login Page</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input value={username} onChange={e => setUsername(e.target.value)} type="text" id="username" name="username" required />
        
        <label htmlFor="password">Password:</label>
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" id="password" name="password" required />
        
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{' '}
        <button type="button" onClick={goToRegister}>Register here</button>
      </p>
      <p>Note: we don't have a system to recover your password, keep that in mind!</p>
    </>
  );
}

export default Login;