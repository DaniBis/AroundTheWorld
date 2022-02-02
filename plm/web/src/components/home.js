import React, { useState, useEffect } from 'react';
import footer from './../templates/footer';
import './../style/home.css';
import kinkaku from './../images/kinkaku.png';
import samurai2 from './../images/samurai2.png';
import katana from './../images/katana.png';

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

    
        
        <div className="text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br></br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br></br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br></br>
        </div>
        <footer />
        </div>
    )
}
