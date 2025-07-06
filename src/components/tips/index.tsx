import { useTaskContext } from '../../contexts/taskcontext';
import { getNextCycle } from '../../utils/getnextcycle';
import { getNextCycleType } from '../../utils/getnextcycletype';

export function Tips() {
  const { state } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  const tipsForWhenActiveTask = {
    worktime: <span>Foque por {state.config.worktime} min</span>,
    shortbreaktime: (
      <span>Pausa pequena de {state.config.shortbreaktime} min</span>
    ),
    longbreaktime: <span>Pausa longa {state.config.longbreaktime} min</span>,
  };

  const tipsForNoActiveTask = {
    worktime: <span>Próximo ciclo é de {state.config.worktime} min</span>,
    shortbreaktime: (
      <span>
        Próximo ciclo é uma pausa de {state.config.shortbreaktime} min
      </span>
    ),
    longbreaktime: (
      <span>Próximo é pausa longa de {state.config.longbreaktime} min</span>
    ),
  };

  return (
    <>
      {state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
