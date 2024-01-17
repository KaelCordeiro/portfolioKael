import {React, useRef} from "react";
import styles from "./Certificado.module.css"

import alura from "../img/alura.jpg"
import computacao from "../img/BCC.jpg"
import ingles from "../img/certificado_ingles.jpg"
import empreendedor from "../img/IF MAIS EMPREENDEDOR.jpg"
import rocketseat from "../img/rocketseat.jpg"
import ipm2020 from "../img/IPM SISTEMAS 2020.jpg"
import ipm2023 from "../img/IPM SISTEMAS 2023.jpg"
import { GrPrevious, GrNext } from "react-icons/gr";

const Certificado = () => {

    let containerImagemRef = useRef(null);

    const imagens = [computacao, rocketseat, ipm2023, alura, ingles, ipm2020, empreendedor]

    const prev = () => containerImagemRef.current.scrollLeft -= containerImagemRef.current.clientWidth;
    const next = () => containerImagemRef.current.scrollLeft += containerImagemRef.current.clientWidth;

    return (
      <div className={styles.conteudo}>
        <div className={styles.prev} onClick={prev}><GrPrevious/></div>
            <div className={styles.slides} ref={containerImagemRef}>
                {imagens.map(image => {return (<img src={image} />)})}
            </div>
        <div className={styles.next} onClick={next}><GrNext/></div>
      </div>
      
    );
  };
  
export default Certificado;



