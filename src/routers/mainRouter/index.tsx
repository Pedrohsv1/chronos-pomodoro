import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import Home from '../../pages/home';
import NotFound from '../../pages/notFound';
import PomodoroAbout from '../../pages/pomodoroAbout';
import { useEffect } from 'react';
import History from '../../pages/history';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // Scroll to top when the route changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
};

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pomodoro-info' element={<PomodoroAbout />} />
        <Route path='/history' element={<History />} />

        {/* Catch-all route for 404 Not Found */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
};
