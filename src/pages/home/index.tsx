import { useEffect } from 'react';
import { Container } from '../../components/container';
import { CountDown } from '../../components/countDown';
import { TaskForm } from '../../components/taskForm';
import { MainTemplate } from '../../templates/mainTemplate';

export default function Home() {
  useEffect(() => {
    document.title = 'Home | Chronos Pomodoro';
  }, []);
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <TaskForm />
      </Container>
    </MainTemplate>
  );
}
