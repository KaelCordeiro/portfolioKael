import styles from "./Contatos.module.css"

import {FaInstagram, FaLinkedin, FaDiscord} from "react-icons/fa"
import { SiGmail } from "react-icons/si";

function Contatos(){
    return(
        <div>
            <p className={styles.titulo}>Meus Contatos:</p>
            <p className={styles.sub_social}>Instagram:</p>
            <div className={styles.container_1}><FaInstagram /></div>
            <p className={styles.descricao_contato}>@kael.cordeiro</p>
            <p className={styles.sub_social1}>Linkedin:</p>
            <div className={styles.container_2}><FaLinkedin /></div>
            <p className={styles.descricao_contato}>Kael Cordeiro</p>
            <p className={styles.sub_social2}>Gmail:</p>
            <div className={styles.container_3}><SiGmail /></div>
            <p className={styles.descricao_contato1}>kaellucaspinheirocordeiro@gmail.com</p>
            <p className={styles.sub_social3}>Discord:</p>
            <div className={styles.container_4}><FaDiscord /></div>
            <p className={styles.descricao_contato2}>Kael Cordeiro - kael_cordeiro</p>
        </div>
    );
}

export default Contatos;