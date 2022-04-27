import React, { useState, useEffect } from 'react';
import Footer from './../templates/footer';
import './../style/home.css';
import kinkaku from './../images/kinkaku.png';
import samurai2 from './../images/samurai2.png';
import katana from './../images/katana.png';
import samurai3 from './../images/samurai3.png';

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
        <Footer />
        </div>
    )
}
