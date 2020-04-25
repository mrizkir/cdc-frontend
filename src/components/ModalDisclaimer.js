import React, { Component } from 'react'
import ReactModal from 'react-modal'

import '../assets/css/ModalDisklaimer.css'

export class ModalDisclaimer extends Component {
    constructor() {
        super();
        this.state = {
            showModal: true
        };


        this.handleCloseModal = this.handleCloseModal.bind(this);
    }


    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <div>

                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Disclaimer"
                >


                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel" style={{ 'color': '#4e73df' }}>   Disclaimer</h5>

                        </div>
                        <div className="modal-body text-justify">

                            <p>Titik lokasi merupakan titik acak (random by system) pada wilayah yang memiliki kasus dan tidak menunjuk pada alamat persis masing-masing kasus. Data yang ditampilakn pada CDC-Bintan berasal dari sinkronisasi data dengan Dinas Kesehatan Kabupaten/Kecamatan. Proses sinkronisasi data ini paling lama memakan waktu 48 jam.</p>
                            <p>
                                Selama proses sinkronisasi berlangsung, untuk sementara Anda mungkin melihat perbedaan antara angka yang tampil pada CDC-Bintan dengan yang diumumkan di kabupaten/kecamatan. Silakan periksa kembali 1-2 hari setelah perbaruan data dari masing-masing kabupaten/kecamatan. Terima kasih dan mohon untuk dimaklumi.
                            </p>
                        </div>
                        <div className="modal-footer text-center">

                            <button type="button" className="btn btn-primary" onClick={this.handleCloseModal}>Ya, Saya Mengerti</button>
                        </div>

                    </div>
                </ReactModal>
            </div>
        );
    }
}

const props = {};


export default ModalDisclaimer
