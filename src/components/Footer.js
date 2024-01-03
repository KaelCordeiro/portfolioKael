import {FaInstagram, FaLinkedin, FaDiscord} from "react-icons/fa"
import styles from "./Footer.module.css"

function Footer(){
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
                <li>
                    <FaDiscord />
                </li>
            </ul>
            <p className={styles.telefone}>
                Contato: (47)991977942
            </p>
        </footer>
    )
}

export default Footer