import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import './css/style.css';
import './css/toast.css';
import '@sweetalert2/themes/dark';
import MyNavbar from './components/etc/Navbar';
import Homepage from './pages/notes/Homepage';
import AddNote from './pages/notes/AddNote';
import { getUserLogged, putAccessToken } from './utils/api';
import DetailPage from './pages/notes/DetailPage';
import NotFound from './pages/etc/NotFound';
import LocaleContext from './context/LocaleContext';
import ModeContext from './context/ModeContext';

function App() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);

  const getCurrentTheme = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const [locale, setLocale] = React.useState(
    localStorage.getItem('locale') || 'id'
  );
  const [mode, setMode] = React.useState(
    localStorage.getItem('theme') || getCurrentTheme() ? 'dark' : 'light'
  );

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === 'id' ? 'en' : 'id';
      localStorage.setItem('locale', newLocale);
      return newLocale;
    });
  };

  const toggleMode = () => {
    setMode((prevMode) => {
      const newTheme = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  const localeContextValue = React.useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  const modeContextValue = React.useMemo(() => {
    return {
      mode,
      toggleMode,
    };
  }, [mode]);

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
      <ModeContext.Provider value={modeContextValue}>
        <LocaleContext.Provider value={localeContextValue}>
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
        </LocaleContext.Provider>
      </ModeContext.Provider>
    );
  }
  return (
    <ModeContext.Provider value={modeContextValue}>
      <LocaleContext.Provider value={localeContextValue}>
        <main>
          <MyNavbar logout={onLogout} authed={authedUser} />
          <Container className="notes-app mt-4">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/archived" element={<Homepage />} />
              <Route path="/note/:id" element={<DetailPage />} />
              <Route path="/add" element={<AddNote />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </main>
      </LocaleContext.Provider>
    </ModeContext.Provider>
  );
}

export default App;
