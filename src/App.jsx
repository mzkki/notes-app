import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import './css/style.css';
import './css/toast.css';
import MyNavbar from './components/etc/Navbar';
import Homepage from './pages/notes/Homepage';
import AddNote from './pages/notes/AddNote';
import { getUserLogged, putAccessToken } from './utils/api';
import DetailPage from './pages/notes/DetailPage';

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
        <MyNavbar authed={authedUser} />
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
      <MyNavbar logout={onLogout} authed={authedUser} />
      <Container className="notes-app mt-4">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/archived" element={<Homepage />} />
          <Route path="/note/:id" element={<DetailPage />} />
          <Route path="/add" element={<AddNote />} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;
