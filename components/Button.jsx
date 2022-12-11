import styles from '../styles/Button.module.css'

const Button = ({ name, disabled, type }) => {
    return (
        <div className={styles.container}>
            <button className={styles.pushable} disabled={disabled} type={type}>
                <span className={styles.shadow}></span>
                <span className={styles.edge}></span>
                <span className={styles.front}>
                    {name}
                </span>
            </button>
        </div>
    )
}

export default Button