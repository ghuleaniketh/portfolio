"use client";
import style from './connectme.module.css';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';

export default function ConnectMePage() {

const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_FORM_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      console.log(data);
      
      if (data.success) {
        setResult("aapka sandesh bhej diya gaya hai! :)");
        event.target.reset();
      } else {
        setResult("aare Ghadbad ho gai. Please try again.");
      }
    } catch (error) {
      setResult("Error sending message. Please try again.");
    }
  };


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
                <form className={style.contactForm} onSubmit={onSubmit}>
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Your Name" 
                        className={style.input}
                        required
                    />
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Your Email" 
                        className={style.input}
                        required
                    />
                    <textarea 
                        name="message"
                        placeholder="Your Message" 
                        className={style.textarea}
                        rows="4"
                        required
                    />
                    <button type="submit" className={style.submitBtn}>
                        Send message
                    </button>
                    {result && <p className={style.result}>{result}</p>}
                </form>
            </div>
        </div>

        </>
    )
}