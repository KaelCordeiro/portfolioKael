import styles from "./Projetos.module.css"
import { FaHtml5, FaReact } from "react-icons/fa"
import { IoLogoCss3 } from "react-icons/io"
import optimus from "../img/Optimus.jpg"
import linkedin from "../img/Linkedin.jpg"

function Projetos(){
    return(
        <div>
            <p className={styles.escrita}>Projetos:</p>
            <h3 className={styles.subtitulo}>Este Portfólio</h3>
            <h4 className={styles.tech}>Tecnologias Utilizadas:</h4>
            <div className={styles.container_react}><FaReact /></div>
            <hr className={styles.linha}></hr>
            <h3 className={styles.subtitulo}>7 Days of Code</h3>
            <hr className={styles.linha}></hr>
            <div className={styles.container}>
                <h3>Optimus Tech:</h3>
                <p>Projeto de página para empresa fictícia OptimusTech, onde mostra vagas abertas para</p>
                <p className={styles.linha_branco}>Design e Desenvolvimento de Software, 100% remoto.</p>
                <div className={styles.container_imagem}>
                    <img src={optimus} />
                </div>
                <h4>Tecnologias Utilizadas:</h4>
                <div className={styles.container_1}><FaHtml5 /></div>
                <div className={styles.container_2}><IoLogoCss3 /></div>
                <br></br>
                <h3>Projeto:<a className={styles.link} href="https://kaelcordeiro.github.io/projetoSiteOptimusTech/" target="_blank" rel="noopener noreferrer">OptimusTech</a></h3>
                <h3>Código fonte:<a className={styles.link} href="https://github.com/KaelCordeiro/projetoSiteOptimusTech" target="_blank" rel="noopener noreferrer">https://github.com/KaelCordeiro/projetoSiteOptimusTech</a></h3>
            </div>
            <div className={styles.linha_traco}></div>
            <div className={styles.container}>
                <h3>Clone Linkedin:</h3>
                <p className={styles.linha_branco}>Projeto de clone da página perfil do Linkedin.</p>
                <div className={styles.container_imagem1}>
                    <img src={linkedin} />
                </div>
                <h4>Tecnologias Utilizadas:</h4>
                <div className={styles.container_1}><FaHtml5 /></div>
                <div className={styles.container_2}><IoLogoCss3 /></div>
                <br></br>
                <h3>Projeto:<a className={styles.link} href="https://kaelcordeiro.github.io/projetoLinkedin/" target="_blank" rel="noopener noreferrer">Linkedin</a></h3>
                <h3>Código fonte:<a className={styles.link} href="https://github.com/KaelCordeiro/projetoLinkedin" target="_blank" rel="noopener noreferrer">https://github.com/KaelCordeiro/projetoLinkedin</a></h3>
            </div>
        </div>
    );
}

export default Projetos;