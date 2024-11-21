import styles from "./index.module.css"
export default function Home(){
    return(
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.content_text}>
                    <h1>Joestar Code</h1>
                    <h2>front-end</h2>
                    <p> Potencialize sua presença online com um site 
                        personalizado que atrai e cativa seus clientes, 
                        impulsionando seu negócio  para o sucesso.</p>
                </div>
                <div className={styles.content_img}>
                    <img src="/images/ilustracao1.svg"/>
                </div>
            </div>
           
        </main>
    )
}