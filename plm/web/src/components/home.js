import React, { useState, useEffect } from 'react';
import Footer from './../templates/footer';
import './../style/home.css';
import kinkaku from './../images/kinkaku.png';
import samurai2 from './../images/samurai2.png';
import katana from './../images/katana.png';
import samurai3 from './../images/samurai3.png';
import japan_map from './../images/japan_map.svg';

export default function Home() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => { 
        setOffsetY(window.pageYOffset);
    }

    useEffect(()=>{

        window.addEventListener('scroll',handleScroll);
    
        return() =>window.removeEventListener('scroll',handleScroll); 
    },[]);

    return (
        <div className="mainHome">
        <section className="theMountain" >
            <img src= {samurai2} id="samurai2" style={{transform: `translateY(${offsetY * 0.25}px)`}} />
            <img src= {kinkaku} id="kinkaku" />
            <img src= {katana} id="katana" />
        </section>
        <div className='secondSection'>
            <h4 style={{transform: `translateX(${offsetY * -0.3}px)`}}>死ぬ準備はできたか！</h4>
            <img src= {samurai3} id="samurai3"/>
        </div>
        <div className='map'>
            <div className='map_container'>
             <img src={japan_map} alt="Japan Map" />
             <div className='p-map_regions'>
                 <div className='p-map_regions_text is-hokkaido '>
                     <a href='map_hokkaido.html'> Hokkaido Region</a>
                 </div>
                 <div className='p-map_regions_text is-tohoku '>
                     <a href='map_tohoku.html'> Tohoku Region</a>
                 </div>
                 <div className='p-map_regions_text is-kanto '>
                     <a href='map_kanto.html'> Kanto Region</a>
                 </div>
                 <div className='p-map_regions_text is-chubu '>
                     <a href='map_chubu.html'> Chubu Region</a>
                 </div>
                 <div className='p-map_regions_text is-kinki '>
                     <a href='map_kinki.html'> Kinki Region</a>
                 </div>
                 <div className='p-map_regions_text is-chugoku '>
                     <a href='map_chugoku.html'> Chugoku Region</a>
                 </div>
                 <div className='p-map_regions_text is-shikoku '>
                     <a href='map_shikoku.html'> Shikoku Region</a>
                 </div>
                 <div className='p-map_regions_text is-okinawa '>
                     <a href='map_okinawa.html'> Okinawa Region</a>
                 </div>
             </div>
             </div>
        </div>
        <Footer />
        </div>
    )
}
