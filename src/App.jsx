import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import './css/style.css';
import MyNavbar from './components/etc/Navbar';
import Homepage from './pages/notes/Homepage';
import AddNote from './pages/notes/AddNote';

function App() {
  return (
    <main>
      <MyNavbar />
      <Container className="notes-app mt-4">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/add" element={<AddNote />} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;
