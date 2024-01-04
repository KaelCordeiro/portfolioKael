import {Link} from "react-router-dom"
import Container from "./Container"
import styles from "./Navbar.module.css"
import logo from "../..//src/img/computer-science.png"

function Navbar(){
    return(
    <nav class={styles.navbar}>
      <Container>
        <Link to="/">
            <img src={logo} alt="Computer" /> 
        </Link>
        <ul className={styles.list}>
            <li className={styles.item}>
                <Link to="/home">Home</Link>
            </li>
            <li className={styles.item}>
                <Link to="/sobre">Sobre</Link>
            </li>
            <li className={styles.item}>
                <Link to="/projeto">Projetos</Link>
            </li>
            <li className={styles.item}>
                <Link to="/certificados">Certificados</Link>
            </li>
            <li className={styles.item}>
                <Link to="/contato">Contatos</Link>
            </li>
        </ul>
      </Container>
    </nav>
    )
}

export default Navbar