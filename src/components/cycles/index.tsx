import { useTaskContext } from '../../contexts/taskcontext';
import { getNextCycle } from '../../utils/getnextcycle';
import { getNextCycleType } from '../../utils/getnextcycletype';
import styles from './styles.module.css';

export function Cycles() {
  const { state } = useTaskContext();

  const cycleDesciptionMap = {
    worktime: 'foco',
    shortbreaktime: 'descanso curto',
    longbreaktime: 'descanso longo',
  };
  const cycleSteps = Array(state.currentCycle).fill(null);

  return (
    <div className={styles.cycles}>
      <span>
        <strong>Ciclos</strong>
      </span>
      <div className={styles.cyclesDots}>
        {cycleSteps.length >= 1 ? (
          cycleSteps.map((_, index) => {
            const nextCycle = getNextCycle(index);
            const type = getNextCycleType(nextCycle);

            return (
              <span
                key={`${nextCycle}-${type}`}
                className={`${styles.cyclesDot} ${styles[type]}`}
                aria-label={`Indicador de ciclo de ${cycleDesciptionMap[type]}`}
                title={`Indicador de ciclo de ${cycleDesciptionMap[type]}`}
              />
            );
          })
        ) : (
          // Empty state
          <p>Comece uma atividade!</p>
        )}
      </div>
    </div>
  );
}
