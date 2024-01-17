import styles from "./Skills.module.css"
import { FaHtml5 } from "react-icons/fa"
import { IoLogoCss3 } from "react-icons/io"
import { TbBrandJavascript } from "react-icons/tb"
import { FaReact } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import { SiPhp } from "react-icons/si"
import { FaJava } from "react-icons/fa"

function LogoSkills(){
    return(
        <div>
            <div className={styles.container_icon1}><FaHtml5 /></div>
            <div className={styles.container_icon2}><IoLogoCss3 /></div>
            <div className={styles.container_icon3}><TbBrandJavascript /></div>
            <div className={styles.container_icon4}><FaReact /></div>
            <div className={styles.container_icon5}><BiLogoPostgresql /></div>
            <div className={styles.container_icon6}><SiPhp /></div>
            <div className={styles.container_icon7}><FaJava /></div>
        </div>
    );
}

export default LogoSkills;