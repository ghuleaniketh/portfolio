"use client";

import styles from "./nav.module.css";


export default function Nav(){
    const scrollToProjects = (e) => {
        e.preventDefault();
        const el = document.getElementById('projects');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            if (typeof window !== 'undefined') {
                window.scrollBy({ top: 1900, behavior: 'smooth' });
            }
        }
    };

    return (
        <>
            <div className={styles.navbar}>
                <div>
                    <p className={styles.name}>Ghule Aniketh</p>
                </div>
                <div className={styles.links}>
                    <a className={styles.a} href="#gallery">gallery</a>
                    <a className={styles.a} href="#projects" onClick={scrollToProjects}>Projects</a>
                    <a className={styles.a} href="#contact">Contact</a>
                </div>
            </div>
        </>
    );
}