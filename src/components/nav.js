import styles from "./nav.module.css";


export default function Nav(){
    return(
        <>
        <div className={styles.navbar}>
            <div>
                <p className={styles.name} >Ghule Aniketh</p>
            </div>
            <div className={styles.links}>
                <a className={styles.a} href="#">gallery</a>
                <a className={styles.a} href="#">Projects</a>
                <a className={styles.a} href="#">Contact</a>
            </div>
            
        </div>
        </>
    )
}