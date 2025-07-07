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
  const workTime = useRef<HTMLInputElement>(null);
  const shortBreakTime = useRef<HTMLInputElement>(null);
  const longBreaktime = useRef<HTMLInputElement>(null);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    dispatch({
      type: TaskActionTypes.CHANGE_CONFIG,
      payload: {
        worktime: parseInt(workTime.current?.value || '25'),
        shortbreaktime: parseInt(shortBreakTime.current?.value || '5'),
        longbreaktime: parseInt(longBreaktime.current?.value || '15'),
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
              ref={workTime}
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
              ref={shortBreakTime}
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
              ref={longBreaktime}
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
