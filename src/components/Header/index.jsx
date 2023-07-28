import styles from './index.module.css'
export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.content_logo}>
                <p>Isac Joestar</p>
            </div>
            <ul className={styles.nav}>
                <li>O que faço</li>
                <li>Habilidades</li>
                <li>Quem sou</li>
                <li>Contato</li>
            </ul>
        </header>
    )
}