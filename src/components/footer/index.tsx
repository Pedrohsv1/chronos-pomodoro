import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href='/pomodoro-info'>Undestand how Pomodoro works</a>
      <a href='/'>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Made with ❤️ by
        Pedrohsv1
      </a>
    </footer>
  );
}
