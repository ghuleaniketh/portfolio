import Styles from "./skills.module.css";
import GitHubCalendarSection from '@/components/GitHubCalendarSection';
import PixelCard from '@/components/PixelCard';
import { color } from "motion";




export default function Skills(){
    return(
        <div className={Styles.skills}>
            <div className={Styles.updiv}>
                <div className={Styles.contain}>
                    <div className={Styles.up} id={Styles.upa}>
                        <h1>Skills</h1>
                        <div className={Styles.skillscontain}>
                            <PixelCard className={Styles.card1} variant="blue"></PixelCard>
                            <div className={Styles.skillslists}>
                                <div>
                                    <p>Core Skills</p>
                                    <div className={Styles.skillsimg} id={Styles.coreskills}>
                                        <img src="https://img.shields.io/badge/C-00599C?style=for-the-badge&logo=c&logoColor=white" />
                                        <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
                                        <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
                                        <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white" />
                                        <img src="https://img.shields.io/badge/C++-3776AB?style=for-the-badge&logo=c%2B%2B&logoColor=white" />
                                    </div>
                                </div>
                                <div>
                                    <p>Frameworks & Backend Tools</p>
                                    <div className={Styles.skillsimg}>
                                        <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
                                        <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" />
                                        <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
                                        <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
                                        <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
                                    </div>
                                </div>
                                <div>
                                    <p>Tech Tools</p>
                                    <div className={Styles.skillsimg} id={Styles.techtools}>
                                        <img src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white" />
                                        <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" />
                                        <img src="https://img.shields.io/badge/Arch_Linux-1793D1?style=for-the-badge&logo=arch-linux&logoColor=white" />
                                        <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" />
                                        <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
                                        <img src="https://img.shields.io/badge/VS%20Code-0078D4?style=for-the-badge&logo=visual-studio-code&logoColor=white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.up} id={Styles.upb}>
                        <h1>Git Hub</h1>
                        <div className={Styles.githubcontain}>
                            <PixelCard className={Styles.card2} variant="blue"></PixelCard>
                            <div className={Styles.demo}>
                                <img src="https://streak-stats.demolab.com/?user=ghuleaniketh&theme=tokyonight" alt="GitHub Demo" />
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
            <div className={Styles.downdiv}>
                <div>
                    <GitHubCalendarSection/>
                </div>
                
            </div>
        </div>
    )
}