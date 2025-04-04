import { Container } from './components/container';
import { CountDown } from './components/countDown';
import { Logo } from './components/logo';
import { Menu } from './components/menu';
import { DefaultInput } from './components/input/';
import './styles/global.css';
import './styles/theme.css';
import { Cycles } from './components/cycles';
import { Button } from './components/button';
import { Play } from 'lucide-react';

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
      <Container>
        <form action='' className='form'>
          <div className='formRow'>
            <p>
              Let's <strong>focus</strong> in the goals!
            </p>
          </div>
          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultInput
              id='taskpomodoro'
              labelText='Task'
              placeholder='What are you going to do?'
            />
          </div>

          <div className='formRow'>
            <Button type='button' variant='primary'>
              <Play />
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
}
