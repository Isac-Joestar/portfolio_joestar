import styles from './index.module.css'
export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.content_logo}>
                <p><a href="/#">Isac Joestar</a></p>
            </div>
            <ul className={styles.nav}>
                <li><a href="/#oqfaco">O que faço</a></li>
                <li><a href="/#habilidades">Habilidades</a></li>
                <li><a href="/#quemsou">Quem sou</a></li>
                <li><a href="/#contato">Contato</a></li>
            </ul>
        </header>
    )
}