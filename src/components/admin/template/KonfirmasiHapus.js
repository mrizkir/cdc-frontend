import React, { Component } from 'react'

export class KonfirmasiHapus extends Component {


    render() {
        return (
            <div>
                <div className="modal fade" id="modalDelete" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Konfirmasi Hapus {this.props.judul}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Apakah Anda yakin akan menghapus {this.props.judul} : {this.props.data.name}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Batal</button>
                                <button type="submit" className="btn btn-danger" data-dismiss="modal" onClick={this.props.onClickProses.bind(this, this.props.data.id)}> Hapus</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default KonfirmasiHapus
