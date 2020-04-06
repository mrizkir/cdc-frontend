import React, { Component } from 'react'

import gbrCorona from '../img/corona.png'

export class Runningtext extends Component {
    render() {
        return (
            <>
                <div className="runtext-container">
                    <div className="main-runtext">
                        <marquee onmouseover="this.stop();" onmouseout="this.start();">

                            <div className="holder">

                                <div className="text-container">
                                    &nbsp; &nbsp;  &nbsp; Mencuci tangan dengan benar adalah cara paling sederhana namun efektif untuk mencegah penyebaran Covid-19. |
                    </div>


                                <div className="text-container">
                                    &nbsp; &nbsp;  &nbsp; Untuk menjaga dan meningkatkan daya tahan tubuh, Anda disarankan untuk mengonsumsi makanan sehat, seperti sayuran dan buah-buahan, dan makanan berprotein, seperti telur, ikan, dan daging tanpa lemak. |
                    </div>

                                <div className="text-container">
                                    &nbsp; &nbsp;  &nbsp; Lakukan physical distancing dengan cara menjaga jarak minimal 1 meter saat berinteraksi dengan orang lain dan hindari bepergian ke tempat yang ramai.
                    </div>



                            </div>

                        </marquee>
                    </div>
                </div>
                <img src={gbrCorona} width="100%" />
            </>
        )
    }
}

export default Runningtext
