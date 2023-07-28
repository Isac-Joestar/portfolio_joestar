import styles from './index.module.css'
import BtnVoltar from '../BtnVoltar/index'
export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.content_nav}>
                <p>Navegação</p>
                <ul>
                    <li>Home</li>
                    <li>O que faço</li>
                    <li>Habilidades</li>
                    <li>Quem sou</li>
                    <li>Contato</li>
                </ul>
            </div>

            <div className={styles.content_bottom}>
                <p className={styles.copy}>© Copyright 2023 Isac Joestar. Todos os direitos reservados.</p>
                <BtnVoltar/>
            </div>
        </footer>
    )
}