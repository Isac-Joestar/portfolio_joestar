import styles from './index.module.css'
import TopicosTitle from '../TopicosTitle/index'
import Email from '../Email/index'
export default function Contato(){
    return(
        <section className={styles.section} id='contato'>
            <TopicosTitle title="Contato"/>
            <div className={styles.container}>
                <div className={styles.content_text}>
                    <p>
                        Estou aqui para tornar sua visão uma realidade! Como programador front-end 
                        especializado em criação de sites, estou ansioso para ouvir sobre seu projeto.  
                        Entre em contato hoje mesmo e vamos começar a construir algo incrível juntos!
                    </p>
                </div>
                <div className={styles.content_form}>
                 <h3>Entre em contato</h3>
                 <Email/>
                </div>
               
            </div>
        </section>
    )
}