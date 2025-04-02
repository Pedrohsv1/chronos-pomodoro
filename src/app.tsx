import { Container } from './components/container';
import { CountDown } from './components/countDown';
import { Logo } from './components/logo';
import { Menu } from './components/menu';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
    </>
  );
}
