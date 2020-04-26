import React, { useEffect, useRef } from 'react';

import { BASE_URL } from '../../components/constant'
import cblue from '../../assets/img/cir-blue.png';
import cred from '../../assets/img/red.gif';
import cgreen from '../../assets/img/cir-green.png';
import cgrey from '../../assets/img/cir-grey.png';
import cpin from '../../assets/img/transparan.png';


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



    if (koordinat.length > 0) {

        for (var i = 0; i < koordinat.length; i++) {

            marker.push(
                { nama: koordinat[i].name, status: koordinat[i].nama_status, foto: koordinat[i].foto, usia: koordinat[i].usia, id: koordinat[i].id, lat: parseFloat(`${koordinat[i].lat}`), lng: parseFloat(`${koordinat[i].lng}`), icon: pilihIcon(koordinat[i].status_pasien), }
            )
        }
        marker.push(
            { lat: 1.071355, lng: 104.216962, icon: cpin, nama: '', status: "", foto: "", usia: "", id: "" },
            { lat: 1.052278, lng: 104.675537, icon: cpin, nama: '', status: "", foto: "", usia: "", id: "" }
        )

    }


    const markerList = marker


    useEffect(() => {
        googleMap = initGoogleMap();
        var bounds = new window.google.maps.LatLngBounds();
        markerList.map(x => {

            const marker = createMarker(x);
            bounds.extend(marker.position);
            marker.addListener('click', () => {

                var infowindow = new window.google.maps.InfoWindow({
                    content: `<div id="test" className="card mb-3 text-center" >
                                <div className=" text-center"  >
                                    <img src="${BASE_URL}/${x.foto}" atl="" width="150px" />
                                </div>
                                <br />
                                <div className="card-body">
                                    <h5 className="card-title">${x.status}</h5>
                                   <p  style="margin:2px;font-weight:bold !important;text-transform:uppercase"> NAMA: ${x.nama} </p>
                                    <p  style="margin:2px">Usia ${x.usia} Tahun</p>
                                    <br/>
                                    <a class="btn btn-sm btn-info" href="detailpasien/${x.id}">Lihat Detail</a>
                                </div>

                            </div>`
                });
                infowindow.open(googleMap, marker);
            });


        });
        googleMap.fitBounds(bounds); // the map to contain all markers
    }, []);


    // create marker on google map
    const createMarker = (markerObj) => new window.google.maps.Marker({
        position: { lat: markerObj.lat, lng: markerObj.lng },
        map: googleMap,
        title: markerObj.status,
        icon: {
            url: markerObj.icon,
            // set marker width and height
            scaledSize: new window.google.maps.Size(30, 30)
        },

    },

    );

    // initialize the google map
    const initGoogleMap = () => {
        return new window.google.maps.Map(googleMapRef.current, {
            // center: { lat: 1.014682, lng: 104.469781 },
            zoom: 10
        });
    }



    return <div
        ref={googleMapRef}
        style={{ width: '100%', height: 600 }}
    />


}

export default GMap;