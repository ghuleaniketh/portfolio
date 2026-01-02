import Style from "./home.module.css"
import Stack from '@/components/Stack';

export default function AboutMePage(){

    const images = [
  { id: 1, img: "https://res.cloudinary.com/dethahoug/image/upload/v1767375238/pic5_v9ddmq.jpg" },
  { id: 2, img: "https://res.cloudinary.com/dethahoug/image/upload/v1767375243/pic2_ij9iw7.jpg" },
  { id: 3, img: "https://res.cloudinary.com/dethahoug/image/upload/v1767375241/pic3_jtlb5x.jpg" },
  { id: 4, img: "https://res.cloudinary.com/dethahoug/image/upload/v1767375241/pic4_pchste.jpg" },
  { id: 5, img: "https://res.cloudinary.com/dethahoug/image/upload/v1767375244/pic1_g78wzy.jpg" },
];
    return(
        <> 
            <div className={Style.Aboutme}>
                <div className={Style.boxA}>
                <div className={Style.boxAcontent}>
                    <div className={Style.aboutmediv}>
                        <p className={Style.aboutmetext}>About me:</p>
                    </div>
                    {/* <Pixel variant="pink"> */}
                    <div className={Style.boxAtext}>
                        <div>
                            <h1>Hi, I'm Ghule Aniketh</h1> 
                            <p>I'm an Engineering student passionate about exploring the endless 
                            possibilities of technology. From building web apps to experimenting 
                            with hardware projects like drones, I love turning ideas into real, 
                            working creations.When I'm not coding, I'm probably editing videos, 
                            creating educational content, or learning something new about how things
                            work.</p>
                        </div>
                        <div className={Style.pic}>
                            <Stack
                                randomRotation={false}
                                sensitivity={80}
                                sendToBackOnClick={false}
                                cardDimensions={{ width: 380, height: 380 }}
                                cardsData={images}
                            />
                        </div>
                    {/* </Pixel> */}
                    </div>
                </div>
                </div>
                <div className={Style.boxB}>
                    <div>
                        <div className={Style.boxBa}>
                            <h1>What I Do : </h1>
                            <div className={Style.boxBaCard}>
                            <p className={Style.boxBaTitle}>Developer</p>
                            <ul className={Style.boxBaList}>
                                <li>Build responsive and dynamic web applications</li>
                                <li>Explore modern frameworks and tools</li>
                                <li>Learn and experiment with Web3 concepts</li>
                                <li>Enjoy video editing as a hobby outside of coding</li>
                            </ul>
                            </div>
                        </div>
                        <div className={Style.boxBb}>
                            <h1>Education :  </h1>
                            <div className={Style.boxBbCard}>
                            <p className={Style.boxBbTitle}>B.Tech in Computer Science and Engineering SRM University, AP</p>
                            <ul className={Style.boxBbList}>
                                <li>Build responsive and dynamic web applications</li>
                                <li>Explore modern frameworks and tools</li>
                                <li>Learn and experiment with Web3 concepts</li>
                                <li>Enjoy video editing as a hobby outside of coding</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                        
                        </div>
            </div>   
            
           
        </>
    )
}