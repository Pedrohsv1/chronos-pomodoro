import './styles/global.css';
import './styles/theme.css';

import Home from './pages/home';
import { TaskContextProvider } from './contexts/taskcontext/taskcontextprovider';

export function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
