"use client";

import { FaAngleUp } from "react-icons/fa";
import styles from './index.module.css'

export default function BtnVoltar(){
    const handleReturnToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    return(
        <div className={styles.content_voltar} onClick={handleReturnToTop}>
            <p>Voltar para o topo</p>
            <div>
                <FaAngleUp/>
            </div>
        </div>
    )
}