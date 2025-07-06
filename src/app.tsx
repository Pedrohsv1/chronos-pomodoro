import './styles/global.css';
import './styles/theme.css';

import { TaskContextProvider } from './contexts/taskcontext/taskcontextprovider';
import { ShowToastContainer } from './components/toastContainer';
import { MainRouter } from './routers/mainRouter';

export function App() {
  return (
    <TaskContextProvider>
      <ShowToastContainer>
        <MainRouter />
      </ShowToastContainer>
    </TaskContextProvider>
  );
}
