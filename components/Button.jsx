import styles from '../styles/Button.module.css'

const Button = ({ name, onClick = null, disabled = null, type = null }) => {
    return (
        <div className={styles.container}>
            <button className={styles.pushable} onClick={onClick} disabled={disabled} type={type}>
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