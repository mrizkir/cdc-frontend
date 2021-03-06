import React, { useState, useEffect } from 'react';
import GMap from './GMapAdmin';

import cblue from '../../assets/img/cir-blue.png';
import cred from '../../assets/img/red.gif';
import cgreen from '../../assets/img/cir-green.png';
import cgrey from '../../assets/img/cir-grey.png';



// API key of the google map
// const GOOGLE_MAP_API_KEY = 'AIzaSyBOeHuAzdy0K8kaHyaoI8zRxIo6HAqp9Tk';
const GOOGLE_MAP_API_KEY = 'AIzaSyBgVtBigvi_59RitK-_97CGlXeer7HHgHM';

// load google map script
const loadGoogleMapScript = (callback) => {
    if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
        callback();
    } else {
        const googleMapScript = document.createElement("script");
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&callback=initMap&libraries=geometry,places`;
        window.document.body.appendChild(googleMapScript);
        googleMapScript.addEventListener("load", callback);
    }
}

const App = ({ koordinat }) => {
    const [loadMap, setLoadMap] = useState(false);

    useEffect(() => {
        loadGoogleMapScript(() => {
            setLoadMap(true)
        });
    }, []);


    if (!koordinat) return <div>Loading Map..</div>

    return (

        <>

            {!loadMap ? <div>LoadingMap...</div> : <GMap koordinat={koordinat} />}
            <div className="legenda">
                <span className="legenda-title">Legenda</span>
                <img src={cred} className="App-logo" alt="logo" width="20px" /> Meninggal
                <img src={cred} className="App-logo" alt="logo" width="20px" /> Positif
                <img src={cred} className="App-logo" alt="logo" width="20px" /> OTG
                <img src={cblue} className="App-logo" alt="logo" width="20px" /> PDP
                <img src={cgreen} className="App-logo" alt="logo" width="20px" /> OPD
                <img src={cgrey} className="App-logo" alt="logo" width="20px" /> Sembuh
            </div>
        </>


    );
}

export default App;