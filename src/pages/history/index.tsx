import { ChevronDown, ChevronUp, Trash } from 'lucide-react';
import { Container } from '../../components/container';
import { Heading } from '../../components/heading';
import { MainTemplate } from '../../templates/mainTemplate';

import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/taskcontext';
import { formatDate } from '../../utils/formatdate';
import { getTaskStatus } from '../../utils/gettaskstatus';
import { sortHistory, type sortHistoryType } from '../../utils/sortHistory';
import { useEffect, useState } from 'react';
import { showToast } from '../../adapters/showToast';
import { TaskActionTypes } from '../../contexts/taskcontext/taskAction';
import { Button } from '../../components/button';

export default function History() {
  const { state, dispatch } = useTaskContext();
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
  });
  const [sortTaskOptions, setSortTaskOptions] = useState<sortHistoryType>(
    () => {
      return {
        tasks: sortHistory({ tasks: state.tasks }),
        direction: 'desc',
        field: 'startDate',
      };
    },
  );

  useEffect(() => {
    setSortTaskOptions(prevState => ({
      ...prevState,
      tasks: sortHistory({
        tasks: state.tasks,
        direction: prevState.direction,
        field: prevState.field,
      }),
    }));
  }, [state.tasks]);

  function handleRemoveState() {
    showToast.dismiss();
    showToast.confirm(
      {
        title: 'Limpar Histórico',
        description: 'Tem certeza que deseja limpar o histórico?',
      },
      confirmation => {
        if (!confirmation) {
          return;
        }
        dispatch({ type: TaskActionTypes.RESET_TASKS });
        showToast.success('History cleared successfully!');
      },
    );
  }

  function handleChangeSortTask({ field }: Pick<sortHistoryType, 'field'>) {
    if (sortTaskOptions.field === field) {
      setSortTaskOptions(prev => ({
        ...prev,
        direction: prev.direction === 'asc' ? 'desc' : 'asc',
      }));
    } else {
      setSortTaskOptions(prev => ({
        ...prev,
        tasks: sortHistory({
          tasks: state.tasks,
          direction: prev.direction,
          field,
        }),
        field,
      }));
    }
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>History</span>
          <span>
            <button
              className={styles.buttonIcon}
              aria-label='Clear history'
              title='Clear history'
              onClick={handleRemoveState}
              type='button'
            >
              <Trash />
            </button>
          </span>
        </Heading>
      </Container>

      <Container>
        <div className={styles.responsiveTable}>
          <table>
            <thead>
              <tr>
                <th
                  className={styles.change}
                  onClick={() => handleChangeSortTask({ field: 'name' })}
                >
                  <div>
                    <span>Tarefa</span>
                    {sortTaskOptions.field === 'name' && (
                      <span className={styles.arrows}>
                        {sortTaskOptions.direction === 'asc' ? (
                          <ChevronUp />
                        ) : (
                          <ChevronDown />
                        )}
                      </span>
                    )}
                  </div>
                </th>
                <th
                  className={styles.change}
                  onClick={() => handleChangeSortTask({ field: 'duration' })}
                >
                  <div>
                    <span>Duração</span>
                    {sortTaskOptions.field === 'duration' && (
                      <span className={styles.arrows}>
                        {sortTaskOptions.direction === 'asc' ? (
                          <ChevronUp />
                        ) : (
                          <ChevronDown />
                        )}
                      </span>
                    )}
                  </div>
                </th>
                <th
                  className={styles.change}
                  onClick={() => handleChangeSortTask({ field: 'startDate' })}
                >
                  <div>
                    <span>Data</span>
                    {sortTaskOptions.field === 'startDate' && (
                      <span className={styles.arrows}>
                        {sortTaskOptions.direction === 'asc' ? (
                          <ChevronUp />
                        ) : (
                          <ChevronDown />
                        )}
                      </span>
                    )}
                  </div>
                </th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {sortTaskOptions.tasks
                .slice(pagination.page, pagination.pageSize)
                .map(task => {
                  const taskTypeDictionary = {
                    worktime: 'Foco',
                    shortbreaktime: 'Descanso curto',
                    longbreaktime: 'Descanso longo',
                  };

                  return (
                    <tr key={task.id}>
                      <td>{task.name}</td>

                      <td>{task.duration}min</td>

                      <td>{formatDate(task.startDate)}</td>

                      <td>
                        <span className={styles.tag}>
                          {getTaskStatus(task, state.activeTask)}
                        </span>
                      </td>

                      <td>{taskTypeDictionary[task.type]}</td>
                    </tr>
                  );
                })}
              <tr>
                <td>
                  <span className={styles.pagination}>
                    {pagination.page} /{' '}
                    {Math.ceil(
                      sortTaskOptions.tasks.length / pagination.pageSize,
                    )}
                  </span>
                </td>
                <td colSpan={4}>
                  <div className={styles.paginationButtons}>
                    <Button
                      type='button'
                      onClick={() =>
                        setPagination(prev => ({
                          ...prev,
                          page: Math.max(prev.page - 1, 1),
                        }))
                      }
                      disabled={pagination.page === 1}
                    >
                      Anterior
                    </Button>
                    <Button
                      type='button'
                      onClick={() =>
                        setPagination(prev => ({
                          ...prev,
                          page: Math.min(
                            prev.page + 1,
                            Math.ceil(
                              sortTaskOptions.tasks.length /
                                pagination.pageSize,
                            ),
                          ),
                        }))
                      }
                      disabled={
                        pagination.page >=
                        Math.ceil(
                          sortTaskOptions.tasks.length / pagination.pageSize,
                        )
                      }
                    >
                      Próximo
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </MainTemplate>
  );
}
