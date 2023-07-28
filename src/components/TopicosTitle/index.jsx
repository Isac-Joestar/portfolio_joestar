import styles from './index.module.css'
export default function topicosTitle({title}){
    return(
        <div className={styles.topico}>
            <h3>{title}</h3>
        </div>
    )
}