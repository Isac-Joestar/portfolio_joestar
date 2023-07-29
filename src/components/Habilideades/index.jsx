'use client';

import TopicosTitle from '../TopicosTitle/index'
import styles from './index.module.css'
import React, { useState } from 'react';


export default function Habilidades(){
  
    const [itemAtivo, setItemAtivo] = useState(0);
    // Função para lidar com o clique em um elemento <li>
    const handleItemClick = (indice) => {
        setItemAtivo(indice);
        
    };
    console.log(itemAtivo)
        return (
        <section className={styles.section}>
        <TopicosTitle title="Habilidades" />
        <div className={styles.container}>
            <ul className={styles.content_habilidades}>
           
            <li onClick={() => handleItemClick(0)}><img src="/images/React.svg" alt="" /></li>
            <li onClick={() => handleItemClick(1)}><img src="/images/JS.svg" alt="" /></li>
            <li onClick={() => handleItemClick(2)}><img src="/images/HTML.svg" alt="" /></li>
            <li onClick={() => handleItemClick(3)}><img src="/images/Css.svg" alt="" /></li>
            <li onClick={() => handleItemClick(4)}><img src="/images/Figma.svg" alt="" /></li>
            </ul>
            
            <div className={styles.content}>
            <p className={styles.name_hab}>React</p>
            <div className={styles.proj_left}>
                <ul>
                {itemAtivo === 0 && (
                    <li className={styles.proj}>
                        <div className={styles.proj_img}>
                            <img src="/images/ToDoListProj.jpg" alt="" />
                        </div>
                        <div className={styles.content_infs}>
                            <p className={styles.proj_title}>To Do List</p>
                            <div></div>
                            <p className={styles.proj_data}>31/07/2005</p>
                        </div>
                    </li>
                )}
                </ul>
            </div>
            <div className={styles.proj_right}>
                <ul>
                {itemAtivo === 0 && (
                    <li className={styles.proj}>
                    <div className={styles.content_infs}>
                        <p className={styles.proj_title}>Pokedéx</p>
                        <div></div>
                        <p className={styles.proj_data}>37/05/1999</p>
                    </div>
                    <div className={styles.proj_img}>
                        <img src="/images/pokedex.avif" alt="" />
                    </div>
                    </li>
                )}
                </ul>
            </div>
            </div>
        </div>
        </section>
    )
}
