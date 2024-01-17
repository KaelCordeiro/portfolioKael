import Descricao from "./Descricao";
import styles from "./Home.module.css"

function Home(){
    return(
        <p className={styles.escrita}>
            Kael Lucas Pinheiro Cordeiro
            <Descricao />
        </p>

    );
}

export default Home;