import styles from "./Sobre.module.css"
import foto from "../img/pessoa.jpg"
import Skills from "./Skills";
import LogoSkills from "./LogoSkills";

function Sobre(){
    return(
        <div className={styles.container}>
            <h1>Sobre Mim</h1>
            <img src={foto} />
            <p>Me chamo Kael Lucas Pinheiro Cordeiro, Bacharel em Ciências da Computação, tenho 25 anos, sou autista.
               Atualmente estou procurando emprego para Desenvolvimento Web com React, motivado pelos estudos e cursos que realizei na área. 
               Possuo nível de inglês intermediário, e gosto de trabalhar em equipe, me esforço para me comunicar e aprender sempre que possível.
            </p>
            <Skills />
            <LogoSkills />
        </div>
    );
}

export default Sobre;