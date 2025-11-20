import Styles from "./skills.module.css";
import GitHubCalendarSection from "@/components/GitHubCalendarSection";

export default function Skills(){
    return(
        <div className={Styles.skills}>
            <div className={Styles.updiv}>
                <div className={Styles.contain}>
                    <div className={Styles.up} id={Styles.upa}>
                        <h1>Skills</h1>
                        <div className={Styles.skillscontain}>
                            
                        </div>
                    </div>
                    <div className={Styles.up} id={Styles.upb}>

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