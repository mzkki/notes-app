import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import './css/style.css';
import MyNavbar from './components/etc/Navbar';
import Homepage from './pages/notes/Homepage';
import AddNote from './pages/notes/AddNote';
import { getUserLogged, putAccessToken } from './utils/api';

function App() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);

  React.useEffect(() => {
    async function getData() {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    }
    getData();
  }, []);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    setAuthedUser(data);
  }

  function onLogout() {
    setAuthedUser(null);
    putAccessToken('');
  }

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <main>
        <MyNavbar />
        <Container className="notes-app mt-4">
          <Routes>
            <Route
              path="*"
              element={<LoginPage loginSuccess={onLoginSuccess} />}
            />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Container>
      </main>
    );
  }
  return (
    <main>
      <MyNavbar logout={onLogout} name={authedUser.name} />
      <Container className="notes-app mt-4">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/add" element={<AddNote />} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;
