"use client";

import styles from "./nav.module.css";
import Link from "next/link";


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
                    <Link href="/gallery" className={styles.sidebarLink}>
                    Gallery
                    </Link>
                    <Link href="#projects" onClick={scrollToProjects }className={styles.sidebarLink}>
                    Projects
                    </Link>
                    <Link href="#" className={styles.sidebarLink}>
                    Contact
                    </Link>
                </div>
            </div>
        </>
    );
}