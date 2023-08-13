"use client";

import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './index.module.css';
import { MailValidator, MessageValidator, NameValidator } from '@/utils/validators';
import { BASE_URL } from '@/utils/constants';
import { useState, useEffect } from 'react';
// import Swal from 'sweetalert2'

interface IForm{
    name: string;
    email: string;
    message: string;
}
export default function Email(){

    const { register, formState, handleSubmit, reset } = useForm<IForm>()
    const [isLoading,setLoading] = useState<boolean>(false)
    const [success,setSuccess] = useState<string | null>(null)

    useEffect(() => {
        if(success){
            setTimeout(()=>{
                setSuccess(null)
            },5000)
        }
    }, [success])
    
    const Swal = require('sweetalert2')
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
            
            Swal.fire({
                icon:'success',
                title:'Obrigado pela preferência!',
                text:' Estou ansioso para trabalharmos juntos!',
            })   
            reset()
        }
    }

  
   
    console.log(formState.errors.name?.message)
    return(
        <>
            <form action="" className={styles.form} onSubmit={handleSubmit(handleMailSend)}>
                
                <label htmlFor="contact_name" >Nome:</label>
                <input type="text" {...register("name",NameValidator)} className={`${!!formState.errors.name && styles.erroInput}`}/>
                { (formState.errors.name && formState.errors.name.message) && <p className={styles.erro}>{ formState.errors.name.message }</p> }
                
                <label htmlFor="">Email:</label>
                <input type="email" {...register("email",MailValidator)} className={`${!!formState.errors.email && styles.erroInput}`}/>
                {(formState.errors.email && formState.errors.email.message) && <p className={styles.erro}>{formState.errors.email.message}</p>}
                
                <label htmlFor="">Mensagem:</label>
                <textarea {...register("message",MessageValidator)} cols={30} rows={10} className={`${!!formState.errors.message && styles.erroInput}`}></textarea>
                {(formState.errors.message && formState.errors.message.message) && <p className={styles.erro}>{formState.errors.message.message}</p>}
                
                <div className={styles.content_btn}>
                    <button onClick={AlertSucess}>
                        {isLoading ? <p className={styles.enviando}>Enviando...</p> : <p className={styles.enviar}>Enviar</p> }
                    </button>
                </div>   
            </form>
       
        </>
    )
}