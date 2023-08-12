"use client";

import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './index.module.css';
import { MailValidator, MessageValidator, NameValidator } from '@/utils/validators';
import { BASE_URL } from '@/utils/constants';
import { useState, useEffect } from 'react';

interface IForm{
    name: string;
    email: string;
    message: string;
}

export default function Email(){

    const { register, formState, handleSubmit } = useForm<IForm>()
    const [isLoading,setLoading] = useState<boolean>(false)
    const [success,setSuccess] = useState<string | null>(null)

    useEffect(() => {
        if(success){
            setTimeout(()=>{
                setSuccess(null)
            },5000)
        }
    }, [success])
    

    const handleMailSend: SubmitHandler<IForm> = async({ email, message, name }) => {
        setLoading(true)
        const data = await fetch(`${BASE_URL}/api/sendmail`,{
            method: "POST",
            body: JSON.stringify({
                email,
                message,
                name
            })
        }).then(res=>res.json())
        setLoading(false)
        if(data.status){
            setSuccess("Enviado com sucesso")
        }
    }
   
    console.log(formState.errors.name?.message)
    return(
        <>
            <form action="" className={styles.form} onSubmit={handleSubmit(handleMailSend)}>
                
                <label htmlFor="contact_name" >Nome:</label>
                <input type="text" {...register("name",NameValidator)} className={`${styles.input_nome}${ formState.errors.name?.message != 'undefined' ? styles.erro : styles.ok}`}/>
                { (formState.errors.name && formState.errors.name.message) && <p className={styles.erro}>{ formState.errors.name.message }</p> }
                
                <label htmlFor="">Email:</label>
                <input type="email" {...register("email",MailValidator)}/>
                {(formState.errors.email && formState.errors.email.message) && <p className={styles.erro}>{formState.errors.email.message}</p>}
                
                <label htmlFor="">Mensagem:</label>
                <textarea {...register("message",MessageValidator)} cols={30} rows={10}></textarea>
                {(formState.errors.message && formState.errors.message.message) && <p className={styles.erro}>{formState.errors.message.message}</p>}
                
                <div className={styles.content_btn}>
                    <button>
                        {isLoading ? <p className={styles.enviando}>Enviando...</p> : <p className={styles.enviar}>Enviar</p> }
                    </button>
                </div>    
                {
                    success && <p>{success}</p>
                }
            </form>
        </>
    )
}