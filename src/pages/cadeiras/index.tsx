
import styles from './Cadeira.module.scss'
import Logo from 'assets/logo.png'
import Buscador from './buscador';
import React, { useState } from 'react';
import Filtros from './filtros';

export default function Cardapio(){
  const [buscar, setBusca] = useState("");
    return (
        <main>
            <nav className={ styles.menu }>

            {/*opcoes de cadeiras*/}
            </nav>
            <header className={ styles.header }>
                <div className= { styles.header__text }>
                  "cadeiras lindas"
                </div>
            </header>
            <section className={styles.cadeira}>
              <h3 className={styles.cadeira__titulo} >catalogo</h3>
              <Buscador busca={buscar} setBusca={setBusca}/>
              <div className={styles.cadeira__filtros}>
                <Filtros/>
              </div>
            </section>
        </main>
    );
}
