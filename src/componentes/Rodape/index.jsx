import React from 'react';
import styles from './Rodape.module';
import { ReactComponent as MarcaRegistrada} from './../../assets/imagens/marca_registrada.svg';

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
        <MarcaRegistrada/>
        Desenvolvido por Ícaro
    </footer>
  )
}
