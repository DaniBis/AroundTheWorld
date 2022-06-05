import React from 'react';
//import ContactForm from './../components/contactForm/ContactForm';
import {
    MapContainer,
    TileLayer
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './../style/travel.css';

let centre = [51.51915892590293, -0.10778446830574064];

export default function Travel() {
    return (
        <div>
            <MapContainer
            center={centre}
            zoom={10}
            style={{width:'100vw', height:'100vh'}}
            >
            <TileLayer
            url ="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=1EWe6HIL5gCQQozP2ZEm"
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            /> 
            </MapContainer>
        </div>
    )
}