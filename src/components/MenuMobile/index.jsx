"use client";
// 

import styles from './index.module.css'
import { useState } from 'react'
export default function MenuMobile(){
    const [menu, setMenu] = useState(false)
    const MenuMobile = ()=>{
        setMenu(!menu)      
    }
    return(
        <>
            <ul className={`${styles.nav_mobile} ${menu ? styles.on : styles.off}`} >
                <li><a href="/#">Home</a></li>
                <li><a href="/#oqfaco">O que faço</a></li>
                <li><a href="/#habilidades">Habilidades</a></li>
                <li><a href="/#quemsou">Quem sou</a></li>
                <li><a href="/#contato">Contato</a></li>
            </ul>
            <div className={styles.btn_mobile} onClick={()=> MenuMobile()}>
                <div className={`${styles.line1} ${menu ? styles.on : styles.off}`}></div>
                <div className={`${styles.line2} ${menu ? styles.on : styles.off}`}></div>
                <div className={`${styles.line3} ${menu ? styles.on : styles.off}`}></div>
            </div>
        </>
    )
}