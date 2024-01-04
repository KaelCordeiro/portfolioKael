import styles from "./Projetos.module.css"
import { FaHtml5 } from "react-icons/fa"
import { IoLogoCss3 } from "react-icons/io"
import optimus from "../img/Optimus.jpg"
import linkedin from "../img/Linkedin.jpg"

function Projetos(){
    return(
        <div>
            <p className={styles.escrita}>Projetos:</p>
            <h3 className={styles.subtitulo}>7 Days of Code</h3>
            <hr className={styles.linha}></hr>
            <div className={styles.container}>
                <h3>Optimus Tech:</h3>
                <p>Projeto de página para empresa fictícia OptimusTech, onde mostra as vagas abertas em busca do</p>
                <p>Design e Desenvolvimento de Software, e o trabalho em equipe 100% remota com pessoas do Brasil inteiro.</p>
                <p>Brasil inteiro.</p>
                <div className={styles.container_imagem}>
                    <img src={optimus} />
                </div>
                <h3>Tecnologias Utilizadas:</h3>
                <div className={styles.container_1}><FaHtml5 /></div>
                <div className={styles.container_2}><IoLogoCss3 /></div>
            </div>
            <div className={styles.container}>
                <h3>Clone Linkedin:</h3>
                <p>Projeto foi desenvolvido pelo site da rede social Linkedin, onde o seu perfil vai conter</p>
                <p>os seus destaques, atividades, sobre, experiências (pela empresa), formação acadêmica e idiomas.</p>
                <p>Com essa rede social ajuda a buscar uma oportunidade para a sua vaga de emprego.</p>
                <div className={styles.container_imagem}>
                    <img src={linkedin} />
                </div>
                <h3>Tecnologias Utilizadas:</h3>
                <div className={styles.container_1}><FaHtml5 /></div>
                <div className={styles.container_2}><IoLogoCss3 /></div>
            </div>
        </div>
    );
}

export default Projetos;