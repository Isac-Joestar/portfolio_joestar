'use client';

import TopicosTitle from '../TopicosTitle/index'
import styles from './index.module.css'
import React, { useState } from 'react';

const ProjetsConfig = [
    {
        name: "To Do List",
        thumb: "/images/ToDoListProj.jpg",
        date: "01/12/2022",
        tecs: ["REACT", "JS", "HTML", "CSS", "FIGMA"],
        url: "LINKDOPROJETO",
    },
    {
        name: "Pokedex",
        thumb: "/images/pokedex.avif",
        date: "01/12/2022",
        tecs: ["REACT", "JS", "HTML", "CSS"],
        url: "LINKDOPROJETO",
    },
    {
        name: "Loopstudio",
        thumb: "/images/Loopstudio.jpg",
        date: "01/12/2022",
        tecs: [ "JS", "HTML", "CSS"],
        url: "LINKDOPROJETO",
    },
    {
        name: "Joestar Geek's",
        thumb: "/images/JoestarGeek.jpg",
        date: "01/12/2022",
        tecs: [ "JS", "HTML", "CSS", "FIGMA"],
        url: "LINKDOPROJETO",
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
                                            mappedProjects.map(({ thumb, name, date }, i) => {
                                                if (i % 2 == 0) return (
                                                    <li className={styles.proj}>
                                                        <div className={styles.proj_img}>
                                                            <img src={thumb} alt="" />
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
                                            mappedProjects.map(({ thumb, name, date }, i) => {
                                                if (i % 2 != 0) return (
                                                    <li className={styles.proj}>
                                                        <div className={styles.content_infs}>
                                                            <p className={styles.proj_title}>{name}</p>
                                                            <div></div>
                                                            <p className={styles.proj_data}>{date}</p>
                                                        </div>
                                                        <div className={styles.proj_img}>
                                                            <img src={thumb} alt="" />
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>

                                <ul className={styles.content_mobile}>
                                    <li className={styles.proj_mobile}>
                                        <div className={styles.mobile_img}>
                                            <img src="/images/ToDoListProj.jpg" alt="" />
                                        </div>
                                        <p className={styles.mobile_title}>To do List</p>
                                        <p className={styles.mobile_visitar}>Visitar</p>
                                        <p className={styles.mobile_data}>31/07/2005</p>   
                                    </li> 
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
