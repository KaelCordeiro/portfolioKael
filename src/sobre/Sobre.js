import styles from "./Sobre.module.css"
import foto from "../img/pessoa.jpg"
import Skills from "./Skills";

function Sobre(){
    return(
        <section className={styles.container}>
            <h1>Sobre Mim</h1>
            <img src={foto} />
            <p>Meu nome é Kael Lucas Pinheiro Cordeiro, tenho 25 anos e sou formado em Ciências da Computação
               com o título de bacharel. Eu estou buscando o meu emprego para eu trabalhar na área de Desenvolvedor Web
               do Front-End com o React. No ano passado, eu participei dos cursos e oportunidades para aprimorar o meu aprendizado.
               E eu busquei os estudos com o React.
            </p>
            <Skills />
        </section>
    );
}

export default Sobre;