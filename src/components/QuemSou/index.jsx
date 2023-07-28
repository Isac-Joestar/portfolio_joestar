import styles from './index.module.css'
import TopicosTitle from '../TopicosTitle/index'
import { FaGithub, FaInstagramSquare, FaLinkedin, FaDiscord } from "react-icons/fa";
export default function QuemSou(){

    return(
        <section className={styles.section}>
            <TopicosTitle title="Quem eu sou"/>
            <div className={styles.container}> 
                <div className={styles.content_img}>
                    <img src="/images/iconLuffy.jpg" alt="" />
                </div>
                <div className={styles.content_text}>
                    <h4>Isac Joestar</h4>
                    <p>Olá! Meu nome é Isac e desde cedo nutri o desejo de criar meus próprios jogos.
                         Foi assim que descobri o fascinante mundo da programação. Hoje, estou totalmente 
                         imerso no desenvolvimento na área de front-end, buscando constantemente aprimorar 
                         minhas habilidades e conhecimentos.</p>
                    <ul className={styles.list}>
                        <li><FaGithub/></li>
                        <li><FaInstagramSquare/></li>
                        <li><FaLinkedin/></li>
                        <li><FaDiscord/></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}