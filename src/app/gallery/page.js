import Masonry from '@/components/Masonry';
import style from './gallery.module.css';
import Cursor from '@/components/cursor';

const items = [
    {
      id: "1",
      img: "https://res.cloudinary.com/dethahoug/image/upload/v1767375244/pic1_g78wzy.jpg",
      height: 400,
    },
    {
      id: "2",
      img: "https://res.cloudinary.com/dethahoug/image/upload/v1767375241/pic3_jtlb5x.jpg",
      height: 250,
    },
    {
      id: "3",
      img: "https://res.cloudinary.com/dethahoug/image/upload/v1767375238/pic5_v9ddmq.jpg",
      height: 325,
    },
    {
      id: "4",
      img: "https://res.cloudinary.com/dethahoug/image/upload/v1767375241/pic4_pchste.jpg",
      height: 600,
    },
    {
      id: "5",
      img: "https://res.cloudinary.com/dethahoug/image/upload/v1767375243/pic2_ij9iw7.jpg",
      height: 600,
    },
    {
        id: "6",
        img: "https://res.cloudinary.com/dethahoug/image/upload/v1767375239/pic6_vn2ze2.jpg",
        height: 400,
      },
      {
        id: "7",
        img: "https://res.cloudinary.com/dethahoug/image/upload/v1767375242/pic7_tzpudo.jpg",
        height: 500,
      },
      {
        id: "8",
        img: "https://res.cloudinary.com/dethahoug/image/upload/v1767375241/pic8_syycus.jpg",
        height: 600,
      },      
      {
        id: "9",        
        img: "https://res.cloudinary.com/dethahoug/image/upload/v1767375238/pic9_qd3ar3.jpg",
        height: 400,    
      },
      {
        id: "10",       
        img: "https://res.cloudinary.com/dethahoug/image/upload/v1767375237/pic10_gcpceo.jpg",
        height: 500,
      },
      {
        id: "11",       
        img: "https://res.cloudinary.com/dethahoug/image/upload/v1767375236/pic11_qzroj4.jpg",
        height: 700,
      }
];


export default function GalleryPage() {
    return (
        <div className={style.container}>
            <Cursor />
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