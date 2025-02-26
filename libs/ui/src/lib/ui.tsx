import styles from './ui.module.scss';

export function Ui({ name }: { name: string }) {
  return (
    <div className={styles['container']}>
      <h1>Welcome {name}!</h1>
    </div>
  );
}

export default Ui;
