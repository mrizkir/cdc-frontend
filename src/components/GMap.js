import React, { useEffect, useRef } from 'react';



import cblue from '../assets/img/cir-blue.png';
import cred from '../assets/img/red.gif';
import cgreen from '../assets/img/cir-green.png';
import cgrey from '../assets/img/cir-grey.png';

const GMap = ({ koordinat }) => {
    const googleMapRef = useRef(null);
    let googleMap = null;





    // list of the marker object along with icon
    // const markerList = [
    //     { lat: 1.014682, lng: 104.469791, icon: iconList.icon1 },
    //     { lat: 1.134982, lng: 104.369481, icon: iconList.icon2 },
    //     { lat: 1.114582, lng: 104.569081, icon: iconList.icon3 },
    //     { lat: 1.134622, lng: 104.519771, icon: iconList.icon4 },

    // ]

    const pilihIcon = (i) => {
        if (i === "Positif") {
            return cred
        } else if (i === "PDP") {
            return cblue
        } else if (i === "ODP") {
            return cgreen
        } else {
            return cgrey
        }

    }


    const markerList = koordinat.map(koor => ({

        lat: koor.lat, lng: koor.lng, icon: pilihIcon(koor.status)

    }))




    useEffect(() => {
        googleMap = initGoogleMap();
        var bounds = new window.google.maps.LatLngBounds();
        markerList.map(x => {
            const marker = createMarker(x);
            bounds.extend(marker.position);
        });
        googleMap.fitBounds(bounds); // the map to contain all markers
    }, []);


    // initialize the google map
    const initGoogleMap = () => {
        return new window.google.maps.Map(googleMapRef.current, {
            center: { lat: 1.014682, lng: 104.469781 },
            zoom: 10
        });
    }

    // create marker on google map
    const createMarker = (markerObj) => new window.google.maps.Marker({
        position: { lat: markerObj.lat, lng: markerObj.lng },
        map: googleMap,
        icon: {
            url: markerObj.icon,
            // set marker width and height
            scaledSize: new window.google.maps.Size(50, 50)
        }
    });

    return <div
        ref={googleMapRef}
        style={{ width: '100%', height: 600 }}
    />
}

export default GMap;