import { Save } from 'lucide-react';
import { Button } from '../../components/button';
import { Container } from '../../components/container';
import { Heading } from '../../components/heading';
import { DefaultInput } from '../../components/input';
import { MainTemplate } from '../../templates/mainTemplate';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/taskcontext';
import { TaskActionTypes } from '../../contexts/taskcontext/taskAction';
import { showToast } from '../../adapters/showToast';

export function SettingsPage() {
  const { state, dispatch } = useTaskContext();
  const workTimeRef = useRef<HTMLInputElement>(null);
  const shortBreakTimeRef = useRef<HTMLInputElement>(null);
  const longBreaktimeRef = useRef<HTMLInputElement>(null);

  const formErrors: string[] = [];

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    showToast.dismiss();

    const workTime = Number(workTimeRef.current?.value);
    const shortBreakTime = Number(shortBreakTimeRef.current?.value);
    const longBreakTime = Number(longBreaktimeRef.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push('Digite apenas números para TODOS os campos');
    }

    if (workTime < 1 || workTime > 99) {
      formErrors.push('Digite valores entre 1 e 99 para foco');
    }

    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formErrors.push('Digite valores entre 1 e 30 para descanso curto');
    }

    if (longBreakTime < 1 || longBreakTime > 60) {
      formErrors.push('Digite valores entre 1 e 60 para descanso longo');
    }

    if (formErrors.length > 0) {
      formErrors.forEach(error => {
        showToast.error(error);
      });
      formErrors.length = 0; // Clear errors after displaying
      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_CONFIG,
      payload: {
        worktime: workTime,
        shortbreaktime: shortBreakTime,
        longbreaktime: longBreakTime,
      },
    });

    showToast.success('Configurações salvas com sucesso!');
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>
      <Container>
        <p style={{ textAlign: 'center' }}>
          Modifique as configurações do Pomodoro.
        </p>
      </Container>
      <Container>
        <form action='' onSubmit={onSubmit} className='form'>
          <div className='formRow'>
            <DefaultInput
              labelText='Foco'
              id='worktime'
              type='number'
              placeholder='25'
              defaultValue={state.config.worktime}
              ref={workTimeRef}
              min={0}
            />
          </div>
          <div className='formRow'>
            <DefaultInput
              labelText='Intervalo Curto'
              id='shortbreaktime'
              type='number'
              placeholder='5'
              defaultValue={state.config.shortbreaktime}
              ref={shortBreakTimeRef}
              min={0}
            />
          </div>
          <div className='formRow'>
            <DefaultInput
              labelText='Intervalo Longo'
              id='longbreaktime'
              type='number'
              placeholder='15'
              defaultValue={state.config.longbreaktime}
              ref={longBreaktimeRef}
              min={0}
            />
          </div>
          <div className='formRow'>
            <Button
              type='submit'
              className='primary'
              icon={<Save />}
              aria-label='Salvar configurações'
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
