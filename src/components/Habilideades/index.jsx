'use client';

import TopicosTitle from '../TopicosTitle/index'
import styles from './index.module.css'
import React, { useState } from 'react';

const ProjetsConfig = [
    {
        name: "NomeDoProjeto",
        thumb: "linkdafoto",
        date: "01/12/2022",
        tecs: ["REACT", "JS", "HTML", "CSS"],
        url: "LINKDOPROJETO",
    },
    {
        name: "Projeto2SuperFoda",
        thumb: "linkdafoto",
        date: "01/12/2022",
        tecs: ["REACT", "JS", "HTML", "CSS"],
        url: "LINKDOPROJETO",
    }
]

const TecConfig = [
    {
        name: "JS",
        label: "Javascript",
        icon: "",
    },
    {
        name: "REACT",
        label: "React JS",
        icon: "",
    },
    {
        name: "HTML",
        label: "Html5",
        icon: "",
    },
    {
        name: "CSS",
        label: "CSS 3",
        icon: "",
    },
    {
        name: "FIGMA",
        label: "Figma",
        icon: "",
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
        <section className={styles.section}>
            <TopicosTitle title="Habilidades" />
            <div className={styles.container}>
                <ul className={styles.content_habilidades}>
                    {
                        TecConfig.map(({ name, icon }) => (
                            <li className={activeTec == name && styles.selected} onClick={() => handleSelectTec(name)}>
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
