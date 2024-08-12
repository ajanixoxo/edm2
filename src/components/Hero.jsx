
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './body.css'
import { useState, useEffect } from 'react';
import act1 from '../assets/act1.png'
import act2 from '../assets/act2.png'
import act3 from '../assets/act3.png'
import bg1 from '../assets/bg1.png'
import bg2 from '../assets/bg2.png'
import bg3 from '../assets/bg3.png'
import nm1 from '../assets/nm1.png'
import nm2 from '../assets/nm2.png'
import nm3 from '../assets/nm3.png'
import bg7 from '../assets/bg7.png'
import bg8 from '../assets/bg8.png'
import bg9 from '../assets/bg9.png'
function Hero() {
    const acts = [act1, act2, act3]
    const bgs = [bg1, bg2, bg3, bg7, bg8, bg9]
    const nms = [nm1, nm2, nm3]

    const [activeIndex, setActiveIndex] = useState(1); // Initialize with the second image as active

    // Function to handle click on a carousel image
    const handleCarouselClick = (index) => {
   
      setActiveIndex(index);
    };
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration (in milliseconds)
          easing: 'ease-in-out', // Easing function
        });
      }, []);
  return (
    <div className="hero flex flex-col justify-center items-center mt-44">
<div className="bg-cont absolute "
 data-aos="fade-up"
 data-aos-duration="1000"
 key={activeIndex} >
    <img src={bgs[activeIndex]} alt='' />
</div>
<div className=" details z-20 flex flex-col justify-center  "
 data-aos="fade-in"
 data-aos-duration="1000">
<div className="text flex justify-center flex-col items-center gap-8 "
   data-aos="zoom-in"
   data-aos-duration="1000">
    <h1>Dive into Digital Artistry</h1>
    <p>Explore Unique NFT Creations in a World of Color and Motion</p>
    <div className="btn-cover">
    <button>Explore</button>
    </div>
    
</div>
<div className="carousle ml-16  absolute bottom-8 flex justify-center items-center flex-col gap-8" >
    <div className="flex gap-6 "
    >
  
        {nms.map((nm, index) => (
               <img
                key={index}
                src={index === activeIndex ? acts[index] : nms[index]}
                alt={`Carousel item ${index + 1}`}
                onClick={() =>{ handleCarouselClick(index)}}
                data-aos="zoom-in"
                data-aos-duration="1000"
                className={index === activeIndex ? 'active' : ''}
                style={{ cursor: 'pointer' }}
           
               
                // Add a cursor pointer to indicate it's clickable
              />))}

           
            
    </div>
    <div className="car-btn flex gap-4">
    {nms.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 circle ${index === activeIndex ? 'bg-orange-400 w-10 rounded-sm activs'  : 'bg-white'}`}
              ></div>
            ))}

    </div>
</div>
</div>

    </div>
  )
}

export default Hero