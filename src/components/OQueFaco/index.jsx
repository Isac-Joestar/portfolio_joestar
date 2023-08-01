import styles from './index.module.css'
import TopicosTitle from '../TopicosTitle/index'
export default function OQueFaco(){
    return(
        <section className={styles.container} id='oqfaco'>
            <TopicosTitle title="O que faço"/>

            <div className={styles.content_itens}>
                <div className={styles.text}>
                    <p>Com habilidades em design e programação, eu crio sites exclusivos que são visualmente 
                atraentes e altamente funcionais. Do layout ao desenvolvimento, cada etapa é cuidadosamente 
                executada para garantir que seu site seja uma representação fiel da sua marca, destacando-se 
                da concorrência e deixando uma impressão duradoura nos seus clientes.</p>
                <br/>
                <p className={styles.p2}>Além disso, meu foco está em oferecer uma experiência de usuário excepcional. 
                Com designs responsivos e otimizados para dispositivos móveis, seu site se adaptará perfeitamente a qualquer tela, 
                garantindo uma navegação suave e agradável. Além disso, utilizo as melhores práticas de SEO para que seu site seja 
                facilmente encontrado nos motores de busca, aumentando sua visibilidade online e atraindo mais tráfego qualificado.
                 Não perca a oportunidade de alcançar seu público-alvo de forma eficaz e transmitir sua mensagem com estilo através
                  de um site personalizado e profissional.</p>
                
                </div>
                <div className={styles.imagem}>
                        <img src="/images/ilustracao2.svg" alt="ilustação programador" />
                </div>
            </div>
        </section>
    )
}