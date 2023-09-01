import PostModelo from "../../componentes/PostModelo";
import fotoCapa from "./../../assets/imagens/sobre_mim_capa.png";
import styles from "./Sobremim.module.css";
import fotoSobreMim from "./../../assets/imagens/sobre_mim_minha_foto.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Ícaro!</h3>

      <img
        src={fotoSobreMim}
        alt="Foto do Ícaro Caetano de Figueiredo"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Olá, tudo bem? Eu sou desenvolvedor fullstack e trabalho atualmente na
        companhia Atos como analista sênior.
      </p>

      <p className={styles.paragrafo}>
        Minha história como programador começou em 2001 na entrada da
        universidade Unifor . Cursando o curso Informática. Lá tive o primerio
        contato com a lógica de programação e a linguagem java. Desde então
        formado algum tempo depois venho ganhando experi~encia com essa
        tecnologia.
      </p>

      <p className={styles.paragrafo}>
        Tranferi meu curso para a faculdade Christus por ser mais barata e
        próxima da minha residência. Lá me formei.
      </p>

      <p className={styles.paragrafo}>
        Ao longo da faculdade pecorri por várias empresas como estagiário como
        banco do nordeste, banco do brasil, Synapse, Regional I da prefeitura de
        Fortaleza. Mas o meu primeiro emprego de fato foi no núcleo de
        tecnologia do Grupo Cristus.
      </p>

      <p className={styles.paragrafo}>
        Durante 6 anos trabalhei no Grupo Cristus como desenvolvedor Java
        backend. Progrando num ERP Open Source desenvolvido em Java o Adempiere
        que foi um sistema herdado do Compiere. Esse ERP integrava diverso
        setors da empresa como RH, o financeiro, e outras empresa do próprio
        grupo como construtora, a escola de hipismo, o refeitorio dos colégios,
        dentre outras.
      </p>

      <p className={styles.paragrafo}>
        Saindo do grupo fui para a HapVIda uma empresa de plano de Saude lider
        no Brasil. Lá tive contato com as ferramentas do mundo Oracle. Como
        PL/SQL, o forms, reports.
      </p>

      <p className={styles.paragrafo}>
        Após 2 anos nessa empresa fui para a Unimed de Fortaleza. Onde fui
        alocado a um produto de autorização desenvolvido com a tecnologia Java
        no framework Struts. E la fiquei durante 1 ano e meio.
      </p>

      <p className={styles.paragrafo}>
        Saindo da unimed Fortaleza fui para a Atos com um contrato no modelo
        homeoffice. A Atos é uma empresa de cnsultoria francesa famosa
        mudialmente. Com isso venho drndo alocados em contratos/clientes na
        função de desenvolvedor backend Java e diversas outras tecnologias.
      </p>

      <p className={styles.paragrafo}>
        Após uma proposta do grupo de fornecimento de cursos. Tive a felicidade
        de me inscrever e venho dia após dia me profundando no mundo frontend
        mais especificamente com a tecnologia React.
      </p>
    </PostModelo>
  );
}
