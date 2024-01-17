import styles from "./Contatos.module.css"

import {FaInstagram, FaLinkedin, FaDiscord} from "react-icons/fa"
import { SiGmail } from "react-icons/si";

function Contatos(){
    return(
        <div className={styles.container}>
            <h3>Meus Contatos:</h3>
            <p>Instagram:</p>
            <div className={styles.container_1}>
                <a href="https://www.instagram.com/kael.cordeiro/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
            <p>Linkedin:</p>
            <div className={styles.container_2}>
                <a href="https://www.linkedin.com/in/kael-cordeiro-2a4910296/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
            <p>Gmail:</p>
            <div className={styles.container_3}>
                <a href="mailto:kaellucaspinheirocordeiro@gmail.com" target="_blank" rel="noopener noreferrer"><SiGmail /></a>
            </div>
            <p>Discord:</p>
            <div className={styles.container_4}>
                <a href="https://discord.com/kael_cordeiro" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
            </div>
        </div>
    );
}

export default Contatos;