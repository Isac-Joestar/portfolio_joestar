'use client';

import TopicosTitle from '../TopicosTitle/index'
import styles from './index.module.css'
import React, { useState } from 'react';

var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
const dataAtual = dia + '/' + mes + '/' + ano;

const ProjetsConfig = [
    {
        name: "To Do List",
        thumb: "/images/ToDoListProj.jpg",
        date: `${dataAtual}`,
        tecs: ["REACT", "JS", "HTML", "CSS", "FIGMA"],
        url: "https://to-do-list-two-kappa.vercel.app/",
    },
    {
        name: "Pokedex",
        thumb: "/images/Pokedex.jpg",
        date: "Em Breve",
        tecs: ["REACT", "JS", "HTML", "CSS"],
        url: "LINKDOPROJETO",
    },
    {
        name: "Loopstudio",
        thumb: "/images/Loopstudio.jpg",
        date: "28/01/2023",
        tecs: [ "JS", "HTML", "CSS"],
        url: "https://loopstudio-vr.vercel.app/",
    },
    {
        name: "Joestar Geek's",
        thumb: "/images/JoestarGeek.jpg",
        date: "08/03/2023",
        tecs: [ "JS", "HTML", "CSS", "FIGMA"],
        url: "https://catalogo-de-animes-eta.vercel.app/",
    }
]

const TecConfig = [
    {
        name: "JS",
        label: "Javascript",
        icon: "/images/JS.svg",
    },
    {
        name: "REACT",
        label: "React JS",
        icon: "/images/React.svg",
    },
    {
        name: "HTML",
        label: "Html5",
        icon: "/images/HTML.svg",
    },
    {
        name: "CSS",
        label: "CSS 3",
        icon: "/images/Css.svg",
    },
    {
        name: "FIGMA",
        label: "Figma",
        icon: "/images/Figma.svg",
    }
]

export default function Habilidades() {

    const [activeTec, setActiveTec] = useState(TecConfig[0].name);

    const handleSelectTec = (tecName) => {
        setActiveTec(tecName)
    }

    const mappedProjects = ProjetsConfig.filter(({ tecs }) => {
        if (activeTec == null) return false;
        if (tecs.findIndex((sTec) => sTec == activeTec) == -1) return false
        return true
    })

    const selectedTecConfig = TecConfig.find(({ name }) => {
        return name == activeTec
    })

    return (
        <section className={styles.section} id='habilidades'>
            <TopicosTitle title="Habilidades" />
            <div className={styles.container}>
                <ul className={styles.content_habilidades}>
                    {
                        TecConfig.map(({ name, icon }) => (
                            <li className={activeTec == name && styles.selected} onClick={() => handleSelectTec(name)} key={name}>
                                <img src={icon} />
                            </li>
                        ))
                    }
                </ul>
                <div className={styles.content}>
                    <p className={styles.name_hab}>{selectedTecConfig.label}</p>
                    {
                        mappedProjects.length >= 1 ? 
                        <>
                                <div className={styles.proj_left}>
                                    <ul>
                                        {
                                            mappedProjects.map(({ thumb, name, date, url }, i) => {
                                                if (i % 2 == 0) return (
                                                    <li className={styles.proj} key={name}>
                                                        <div className={styles.content_desk_proj}>
                                                            <div className={styles.proj_img}>
                                                                <img src={thumb} alt="" />
                                                                <div className={styles.content_visitar}>
                                                                    <a href={url} target="_blank">Visitar</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={styles.content_infs}>
                                                            <p className={styles.proj_title}>{name}</p>
                                                            <div></div>
                                                            <p className={styles.proj_data}>{date}</p>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className={styles.proj_right}>
                                    <ul>
                                        {
                                            mappedProjects.map(({ thumb, name, date, url }, i) => {
                                                if (i % 2 != 0) return (
                                                    <li className={styles.proj} key={name}>
                                                        <div className={styles.content_infs}>
                                                            <p className={styles.proj_title}>{name}</p>
                                                            <div></div>
                                                            <p className={styles.proj_data}>{date}</p>
                                                        </div>
                                                        <div className={styles.content_desk_proj}>
                                                            <div className={styles.proj_img}>
                                                                <img src={thumb} alt="" />
                                                                <div className={styles.content_visitar}>
                                                                    <a href={url} target="_blank">Visitar</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <ul className={styles.content_mobile}>
                                    {
                                        mappedProjects.map(({ thumb, name, date }) => {
                                            return (
                                                <li className={styles.proj_mobile} key={name}>
                                                    <div className={styles.content_mobile_proj}>
                                                        <div className={styles.mobile_img}>
                                                            <img src={thumb} alt="" />
                                                        </div>
                                                        <div className={styles.mobile_text}>
                                                            <p className={styles.mobile_title}>{name}</p>
                                                            <a href="#" className={styles.mobile_visitar}>
                                                                <p>Visitar</p>
                                                            </a>
                                                            <p className={styles.mobile_data}>{date}</p>   
                                                        </div>
                                                    </div>
                                                </li> 
                                            )
                                        })
                                    }
                                </ul>
                        </>
                        :
                        <div>
                            NÃO TEM PROJETOS PARA ESSA TECNOLOGIA
                        </div>
                    }
                    
                </div>
            </div>
        </section>
    )
}
