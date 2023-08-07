import styles from './index.module.css'
import MenuMobile from '../MenuMobile/index'

export default function Header(){
 
    return(
        <header className={styles.header}>
            <div className={styles.content_logo}>
                <a href="#">
                    <img src="/images/logo/LogoTransparente.png" alt="" />
                </a>
            </div>
            <ul className={styles.nav}>
                <li><a href="/#">Home</a></li>
                <li><a href="/#oqfaco">O que faço</a></li>
                <li><a href="/#habilidades">Habilidades</a></li>
                <li><a href="/#quemsou">Quem sou</a></li>
                <li><a href="/#contato">Contato</a></li>
            </ul>
           <MenuMobile/>
        </header>
    )
}