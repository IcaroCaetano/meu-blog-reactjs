import React from 'react';
import styles from './Banner.module.css';
import circuloColorido from './../../assets/circulo_colorido.png';
import minhaFoto from './../../assets/minha_foto.jpg';

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
                Meu Blog!
            </h1>

            <p className={styles.paragrafo}>
                Blog de Dev!
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
