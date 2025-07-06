import styles from './styles.module.css';
import { RouterLink } from '../routerLink';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href='/pomodoro-info'>
        Undestand how Pomodoro works
      </RouterLink>
      <RouterLink href='/'>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Made with ❤️ by
        Pedrohsv1
      </RouterLink>
    </footer>
  );
}
