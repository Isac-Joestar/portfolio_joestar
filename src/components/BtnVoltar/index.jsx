import { FaAngleUp } from "react-icons/fa";
import styles from './index.module.css'
export default function BtnVoltar(){
    return(
        <div className={styles.content_voltar}>
            <p>Voltar para o topo</p>
            <div>
                <FaAngleUp/>
            </div>
        </div>
    )
}