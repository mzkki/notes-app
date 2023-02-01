import React from "react";
import { Container } from "react-bootstrap";
import LoginPage from "./pages/auth/LoginPage";

function App() {
  return (
    <main>
      <Container className="notes-app mt-4">
        <LoginPage />
      </Container>
    </main>
  )
}

export default App