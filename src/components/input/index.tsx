import styles from './styles.module.css';

type InputProps = React.ComponentProps<'input'> & {
  id: string;
  labelText?: string;
};

export function DefaultInput({ labelText, id, ...inputprops }: InputProps) {
  return (
    <>
      {labelText && (
        <label htmlFor={id} className={styles.label}>
          {labelText}
        </label>
      )}
      <input {...inputprops} id={id} className={styles.input} />
    </>
  );
}
