import {FaInstagram, FaLinkedin, FaDiscord} from "react-icons/fa"
import styles from "./Footer.module.css"

function Footer(){
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href="https://www.instagram.com/kael.cordeiro/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/kael-cordeiro-2a4910296/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </li>
                <li>
                    <a href="https://discord.com/kael_cordeiro" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
                </li>
            </ul>
            <p className={styles.telefone}>
                Contato: (47)991977942
            </p>
        </footer>
    )
}

export default Footer