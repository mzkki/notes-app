import React from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import './css/style.css'

function App() {
  return (
    <main>
      <Container className="notes-app mt-4">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Container>
    </main>
  )
}

export default App