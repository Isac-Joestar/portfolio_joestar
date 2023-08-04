import styles from './index.module.css'
import BtnVoltar from '../BtnVoltar/index'
export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.content_nav}>
                <p>Navegação</p>
                <ul>
                    <li><a href="/#">Home</a></li>
                    <li><a href="/#oqfaco">O que faço</a></li>
                    <li><a href="/#habilidades">Habilidades</a></li>
                    <li><a href="/#quemsou">Quem sou</a></li>
                    <li><a href="/#contato">Contato</a></li>
                </ul>
            </div>

            <div className={styles.content_bottom}>
                <p className={styles.copy}>© Copyright 2023 Isac Joestar. Todos os direitos reservados.</p>
                <BtnVoltar/>
            </div>
        </footer>
    )
}