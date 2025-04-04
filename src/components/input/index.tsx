import styles from "styles.css"

type InputProps = React.ComponentProps<'input'> & {
  label: string;
}

export function Input({label, ...props}: InputProps) {

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input {...props} placeholder=`${label}` className={styles.input}/>
    <div/>
  )
}
