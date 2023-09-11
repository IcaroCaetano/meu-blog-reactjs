import PostModelo from "../../componentes/PostModelo";
import fotoCapa from "./../../assets/imagens/sobre_mim_capa.png";
import styles from "./Sobremim.module.css";
import fotoSobreMim from "./../../assets/imagens/sobre_mim_minha_foto.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="About me">
      <h3 className={styles.subtitulo}>Hi, I'm Ícaro!</h3>

      <img
        src={fotoSobreMim}
        alt="Foto do Ícaro Caetano de Figueiredo"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Hello everything is fine? I am a fullstack developer and currently work at 
        Atos as a senior analyst.
      </p>

      <p className={styles.paragrafo}>
        My story as a programmer began in 2001 when I entered Unifor University. 
        Studying the IT course. There I had my first contact with programming logic 
        and the Java language. Since then I graduated some time later and have been 
        gaining experience with this technology.
      </p>

      <p className={styles.paragrafo}>
        I transferred my course to Christus College because it was cheaper and closer 
        to my residence. I graduated there.
      </p>

      <p className={styles.paragrafo}>
        Throughout college, I worked for several companies as an intern, such as Banco 
        do Nordeste, Banco do Brasil, Synapse, Regional I of the city of Fortaleza. 
        But my first real job was at the Christus Group's technology center.
      </p>

      <p className={styles.paragrafo}>
        For 6 years I worked at Grupo Christus as a Java backend developer. 
        Programming in an Open Source ERP developed in Java, Adempiere, which was a 
        system inherited from Compiere. This ERP integrated several sectors of the 
        company such as human resources, finance, and other companies within the group 
        such as the construction company, the equestrian school, the school cafeteria, 
        among others.
      </p>

      <p className={styles.paragrafo}>
        Leaving the group I went to HapVida, a leading health plan company in Brazil. 
        There I had contact with the tools of the Oracle world. Like PL/SQL, forms, 
        reports.
      </p>

      <p className={styles.paragrafo}>
        After 2 years at this company I went to Unimed in Fortaleza. Where I was 
        allocated authorization software developed with Java technology in the Struts 
        framework. And I stayed there for 1 and a half years.
      </p>

      <p className={styles.paragrafo}>
        Leaving Unimed Fortaleza I went to Atos with a home office contract. 
        Atos is a world-famous French consultancy company. As a result, I have been 
        allocated contracts/clients in the role of Java backend developer and several 
        other technologies such as Spring and its entire range of products.
      </p>

      <p className={styles.paragrafo}>
        After a proposal from Acts of providing courses. I was fortunate to sign up 
        for Alura and day after day I have been delving deeper into the frontend world, 
        more specifically with React technology.
      </p>

      <p className={styles.paragrafo}>
        With this gain of knowledge in frontend, I have already been working on some 
        activities on the current client with React native. And thus gaining experience 
        in this new stack.
      </p>
    </PostModelo>
  );
}
