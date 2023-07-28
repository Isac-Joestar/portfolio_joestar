import TopicosTitle from '../TopicosTitle/index'
import styles from './index.module.css'
export default function Habilidades(){
    return(
        <section className={styles.section}>
            <TopicosTitle title="Habilidades"/>
            <div className={styles.container}>
                <ul className={styles.content_habilidades}>
                    <li><img src="/images/React.svg" alt="" /></li>
                    <li><img src="/images/JS.svg" alt="" /></li>
                    <li><img src="/images/HTML.svg" alt="" /></li>
                    <li><img src="/images/Css.svg" alt="" /></li>
                    <li><img src="/images/Figma.svg" alt="" /></li>
                </ul>
                <div className={styles.content}>
                    <p className={styles.name_hab}>React</p>
                    <div className={styles.proj_left}>
                       <ul>
                            <li className={styles.proj}>
                                <div className={styles.proj_img}>
                                    <img src="/images/ToDoListProj.jpg" alt="" />
                                </div>
                                <div className={styles.content_infs}>
                                    <p className={styles.proj_title}>To Do List</p>
                                    <div></div>
                                    <p className={styles.proj_data}>31/07/2005</p>
                                </div>
                            </li>
                       </ul>
                    </div>
                    <div className={styles.proj_right}>
                        <ul>
                            <li className={styles.proj}>
                               
                                <div className={styles.content_infs}>
                                    <p className={styles.proj_title}>Pokedéx</p>
                                    <div></div>
                                    <p className={styles.proj_data}>37/05/1999</p>
                                </div>
                                <div className={styles.proj_img}>
                                    <img src="/images/pokedex.avif" alt="" />
                                </div>
                            </li>
                            
                       </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}