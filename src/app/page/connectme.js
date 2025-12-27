import style from './connectme.module.css';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function ConnectMePage() {
    return(
        <>
        <div className={style.connectMeSection}>
            <div className={style.left}>
                <h2>Connect With Me</h2>
                <div className={style.socialLinks}>
                    <Link href="https://github.com/ghuleaniketh" target="_blank" className={style.socialIcon}>
                        <FaGithub />
                    </Link>
                    <Link href="https://instagram.com/ghule_aniketh" target="_blank" className={style.socialIcon}>
                        <FaInstagram />
                    </Link>
                    <Link href="https://linkedin.com/in/aniketh-ghule-111b2a326" target="_blank" className={style.socialIcon}>
                        <FaLinkedin />
                    </Link>
                    <Link href="https://x.com/AnikethGhu18657" target="_blank" className={style.socialIcon} aria-label="X">
                        <span className={style.xLogo} aria-hidden="true">X</span>
                    </Link>
                    
                </div>
            </div>
            <div className={style.right}>
                <h2>Get In Touch</h2>
                <p>Have a question or project idea? Send me a message!</p>
                <form className={style.contactForm}>
                    <input 
                        type="text" 
                        placeholder="Your Name" 
                        className={style.input}
                        required
                    />
                    <textarea 
                        placeholder="Your Message" 
                        className={style.textarea}
                        rows="4"
                        required
                    />
                    <button type="submit" className={style.submitBtn}>
                        Send message
                    </button>
                </form>
            </div>
        </div>

        </>
    )
}