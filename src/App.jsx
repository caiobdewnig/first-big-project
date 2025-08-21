import Home from './components/home.jsx';
import React, { useState, useEffect } from 'react';
import Categories from './components/categories.jsx';
import About from './components/about.jsx';
import Login from './components/login.jsx';
import Plans from './components/plans.jsx';
import logo from './assets/images/logo.svg'
import Register from './components/register.jsx';

import './App.css';


export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [users, setUsers] = useState([{ username: 'admin', password: '123' }]);
  const [loggedUser, setLoggedUser] = useState(null);

  function handleLogin(username, password) {
    const found = users.find(u => u.username === username && u.password === password);
    if (found) setLoggedUser(username);
    else alert('Usuário ou senha inválidos');
  }

  function handleRegister(newUser) {
    setUsers([...users, newUser]);
    setCurrentPage('login');
  }

  function renderPage() {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'categories':
        return <Categories />;
      case 'about':
        return <About />;
      case 'login':
        return <Login onLogin={handleLogin} goToRegister={() => setCurrentPage('register')} />;
      case 'register':
        return <Register onRegister={handleRegister} goToLogin={() => setCurrentPage('login')} />;
      case 'plans':
        return <Plans />;
      default:
        return <Home />;
    }
  }

  return (
    <div>
      <header className="main-header">
        <img src={logo} alt="Logo" />
        <nav className="main-nav">
          <button onClick={() => setCurrentPage('home')}>Home</button>
          <button onClick={() => setCurrentPage('categories')}>Categories</button>
          <button onClick={() => setCurrentPage('about')}>About</button>
          <button onClick={() => setCurrentPage('login')}>Login/Register</button>
          <button onClick={() => setCurrentPage('plans')}>Plans</button>
        </nav>
      </header>
      {loggedUser ? <h2>Bem-vindo, {loggedUser}!</h2> : renderPage()}
      <footer>© 2023 News Homepage</footer>
    </div>
  );
}

/* 
fazer middleware para esconder chave de API
fazer middleware para esconder dados do usuário
achar uma forma de conseguir o texto a partir da url dada pela API
*/
