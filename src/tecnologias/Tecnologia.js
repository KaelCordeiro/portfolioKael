import styles from "./Tecnologia.module.css"
import { FaHtml5 } from "react-icons/fa"
import { IoLogoCss3 } from "react-icons/io"
import { TbBrandJavascript } from "react-icons/tb"
import { FaReact } from "react-icons/fa"

function Tecnologia(){
    return(
        <div>
            <p className={styles.escrita}>Tecnologias Utilizadas:</p>
            <h3 className={styles.subtitulo}>HTML:</h3>
            <div className={styles.tamanho_1}><FaHtml5 /></div>
            <h3 className={styles.subtitulo}>CSS:</h3>
            <div className={styles.tamanho_2}><IoLogoCss3 /></div>
            <h3 className={styles.subtitulo}>JavaScript:</h3>
            <div className={styles.tamanho_3}><TbBrandJavascript /></div>
            <h3 className={styles.subtitulo}>React:</h3>
            <div className={styles.tamanho_4}><FaReact /></div>
        </div>
    );
}

export default Tecnologia;