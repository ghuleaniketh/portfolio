import Style from './projects.module.css';
import FlowingMenu from '@/components/FlowingMenu'



export default function Projects(){


const demoItems = [
  { link: 'https://github.com/ghuleaniketh/moro', text: 'Moro', image: '/project/moro.png' },
  { link: 'https://github.com/ghuleaniketh/web_games', text: 'Web-Game', image: '/project/webgame.png' },
  { link: 'https://github.com/ghuleaniketh/AtithiSetu-MSC', text: 'AtithiSetu', image: '/project/atithiSetu.png' },
  { link: 'https://github.com/ghuleaniketh/GreenHive', text: 'Green-Hive', image: '/project/greenHive.png' }
];

    return(
        <div className={Style.Project}>
            <div className={Style.heading}>
                <h1>Projects</h1>
            </div>
            <div className={Style.content}>
                <div style={{ height: '600px', position: 'relative' ,cursor:"none"}}>
                    <FlowingMenu items={demoItems} />
                </div>
            </div>
        </div>
    );
}