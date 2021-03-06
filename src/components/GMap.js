import React, { useEffect, useRef } from 'react';



import cblue from '../assets/img/cir-blue.png';
import cred from '../assets/img/red.gif';
import cgreen from '../assets/img/cir-green.png';
import cgrey from '../assets/img/cir-grey.png';
import cpin from '../assets/img/transparan.png';

const GMap = ({ koordinat }) => {
    const googleMapRef = useRef(null);
    let googleMap = null;

    var marker = []


    const pilihIcon = (i) => {
        switch (i) {
            case 0: return cred
            case 1: return cred
            case 2: return cred
            case 3: return cblue
            case 4: return cgreen
            case 5: return cgrey
            case 6: return cgrey
            case 100: return cpin

        }

    }





    for (var i = 0; i < koordinat.length; i++) {
        marker.push(
            { lat: parseFloat(`${koordinat[i].lat}`), lng: parseFloat(`${koordinat[i].lng}`), icon: pilihIcon(koordinat[i].status_pasien), status: koordinat[i].nama_status }
        )
    }
    marker.push(
        { lat: 1.071355, lng: 104.216962, icon: cpin, status: "" },
        { lat: 1.052278, lng: 104.675537, icon: cpin, status: "" }
    )




    const markerList = marker

    useEffect(() => {
        googleMap = initGoogleMap();
        var bounds = new window.google.maps.LatLngBounds();
        markerList.map(x => {
            const marker = createMarker(x);
            bounds.extend(marker.position);
        });
        googleMap.fitBounds(bounds); // the map to contain all markers
    }, []);

    // create marker on google map
    const createMarker = (markerObj) => new window.google.maps.Marker({
        position: { lat: markerObj.lat, lng: markerObj.lng },
        map: googleMap,
        icon: {
            url: markerObj.icon,
            // set marker width and height
            scaledSize: new window.google.maps.Size(30, 30)
        },
        title: markerObj.status
    });

    // initialize the google map
    const initGoogleMap = () => {
        return new window.google.maps.Map(googleMapRef.current, {
            // center: { lat: 1.014682, lng: 104.469781 },
            zoom: 10,
            maxZoom: 14
        });
    }



    return <div
        ref={googleMapRef}
        style={{ width: '100%', height: 600 }}
    />
}

export default GMap;