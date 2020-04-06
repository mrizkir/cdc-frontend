import React, { useState, useEffect } from 'react';
import GMap from './GMap';

import cblue from '../img/cir-blue.png';
import cred from '../img/cir-red.png';
import cgreen from '../img/cir-green.png';
import cgrey from '../img/cir-grey.png';




// API key of the google map
const GOOGLE_MAP_API_KEY = 'AIzaSyBOeHuAzdy0K8kaHyaoI8zRxIo6HAqp9Tk';

// load google map script
const loadGoogleMapScript = (callback) => {
    if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
        callback();
    } else {
        const googleMapScript = document.createElement("script");
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
        window.document.body.appendChild(googleMapScript);
        googleMapScript.addEventListener("load", callback);
    }
}

const App = () => {
    const [loadMap, setLoadMap] = useState(false);

    useEffect(() => {
        loadGoogleMapScript(() => {
            setLoadMap(true)
        });
    }, []);

    return (

        <>
            {!loadMap ? <div>Loading...</div> : <GMap />}
            <div className="legenda">
                <span className="legenda-title">Legenda</span>
                <img src={cred} className="App-logo" alt="logo" width="20px" /> Positif
                <img src={cblue} className="App-logo" alt="logo" width="20px" /> PDP
                <img src={cgreen} className="App-logo" alt="logo" width="20px" /> OPD
                <img src={cgrey} className="App-logo" alt="logo" width="20px" /> Sembuh
            </div>
        </>


    );
}

export default App;