import styles from '../styles/Subdvisao.module.css'

export default function Subdivisao(props) {
    return (
        <div 
            style={{
                backgroundColor: props.preta ? "#000" : "#fff" 
            }}
            className={styles.subdivisao}>
        </div>
    )
}