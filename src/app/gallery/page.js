import Masonry from '@/components/Masonry';
import style from './gallery.module.css';

const items = [
    {
      id: "1",
      img: "/pic/pic1.jpg",
      height: 400,
    },
    {
      id: "2",
      img: "/pic/pic3.jpg",
      height: 250,
    },
    {
      id: "3",
      img: "/pic/pic5.jpg",
      height: 325,
    },
    {
      id: "4",
      img: "/pic/pic4.jpg",
      height: 600,
    },
    {
      id: "5",
      img: "/pic/pic2.jpg",
      height: 600,
    },
    {
        id: "6",
        img: "/pic/pic6.jpg",
        height: 400,
      },
      {
        id: "7",
        img: "/pic/pic7.jpg",
        height: 500,
      },
      {
        id: "8",
        img: "/pic/pic8.jpg",
        height: 600,
      },      
      {
        id: "9",        
        img: "/pic/pic9.jpg",
        height: 400,    
      },
      {
        id: "10",       
        img: "/pic/pic10.jpg",
        height: 500,
      },
      {
        id: "11",       
        img: "/pic/pic11.jpg",
        height: 700,
      }
];


export default function GalleryPage() {
    return (
        <div className={style.container}>
            <h1 className={style.heading}>Gallery</h1>
            <div className={style.masonry}>
                  <Masonry
                        items={items}
                        ease="power3.out"
                        duration={0.6}
                        stagger={0.05}
                        animateFrom="bottom"
                        scaleOnHover={true}
                        hoverScale={0.95}
                        blurToFocus={true}
                        colorShiftOnHover={false}
                        />
            </div>
              
        </div>
    );
}       