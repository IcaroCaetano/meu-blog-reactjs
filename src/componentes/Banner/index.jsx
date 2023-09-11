import React from 'react';
import styles from './Banner.module.css';
import circuloColorido from './../../assets/imagens/circulo_colorido.png';
import minhaFoto from './../../assets/imagens/minha_foto.jpg';

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
                Meu Blog Dev!
            </h1>

            <p className={styles.paragrafo}>
                Espaço utilizado para armazenar conteúdo do meu conhecimento adquirido 
                ao longo da carreira. E repassado no formato de artigos em cards individuais.
            </p>
        </div>

        <div className={styles.imagens}>
            <img className={styles.circuloColorido} 
                 src={circuloColorido} 
                 alt="Circulo Colorido"
                 aria-hidden={true}/>

                <img className={styles.minhaFoto} 
                 src={minhaFoto} 
                 alt="Minha Foto"/>     
        </div>
    </div>
  )
}
