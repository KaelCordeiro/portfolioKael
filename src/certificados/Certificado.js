import styles from "./Certificado.module.css"

import ingles from "../img/certificado_ingles.jpg"
import IPM2020 from "../img/IPM SISTEMAS 2020.jpg"
import empreendedor from "../img/IF MAIS EMPREENDEDOR.jpg"
import computacao from "../img/BCC.jpg"
import IPM2023 from "../img/IPM SISTEMAS 2023.jpg"
import rocket from "../img/rocketseat.jpg"
import alura from "../img/alura.jpg"

function Certificado() {
    return (
        <div>
            <img className={styles.container} src={computacao}/>
            <img className={styles.container} src={rocket}/>
            <img className={styles.container} src={IPM2023}/>
            <img className={styles.container} src={alura}/>
            <img className={styles.container} src={ingles}/>
            <img className={styles.container} src={IPM2020}/>
            <img className={styles.container} src={empreendedor}/>
        </div>
    );
}

export default Certificado;