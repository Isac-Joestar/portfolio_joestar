import styles from './index.module.css'
export default function Email(){
    return(
        <>
        <form action="" className={styles.form}>
            <label htmlFor="">Nome:</label>
            <input type="text" name="" id="" required/>
            <label htmlFor="">Email:</label>
            <input type="email" required/>
            <label htmlFor="">Mensagem:</label>
            <textarea name="" id="" cols="30" rows="10" required></textarea>
            <div className={styles.content_btn}><button>Enviar</button></div>    
        </form>
    
        </>
    )
}