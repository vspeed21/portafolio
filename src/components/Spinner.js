import styles from '../../styles/Spinner.module.css';

const Spinner = () => {
  return (
    <div className='flex justify-center items-center my-3'>
      <div className={styles.sk_chase}>
        <div className={styles.sk_chase_dot}></div>
        <div className={styles.sk_chase_dot}></div>
        <div className={styles.sk_chase_dot}></div>
        <div className={styles.sk_chase_dot}></div>
        <div className={styles.sk_chase_dot}></div>
        <div className={styles.sk_chase_dot}></div>
      </div>
    </div>
  )
}

export default Spinner
