import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getFasilitas, hapusFasilitas } from "../../actions/actionFasilitas";
import KonfirmasiHapus from "./template/KonfirmasiHapus";

export class Fasilitas extends Component {
  state = {
    prosesLoad: 0,
    dataHapus: {
      id: "",
      name: "",
    },
  };

  setKonfirmasiHapus = (data) => {
    const dat = {
      ...data,
      name: data.Nm_Fasilitas,
      id: data.FasilitasKarantinaID,
    };
    this.setState({
      dataHapus: dat,
    });
  };

  componentDidMount = async () => {
    await this.props.getFasilitas();
    this.setState({
      prosesLoad: 1,
    });
  };

  renderFasilitas() {
    return this.props.listFasilitas.map((fasilitas, index) => {
      return (
        <tr key={index}>
          <td className="text-center">{index + 1}</td>
          <td>{fasilitas.Nm_Fasilitas}</td>
          <td> {fasilitas.alamat}</td>
          <td> {fasilitas.Nm_Kecamatan}</td>
          <td> {fasilitas.Nm_Desa ? fasilitas.Nm_Desa : "-"}</td>

          <td className="text-center">
            <Link
              className="btn btn-warning mr-2"
              to={`/admin/ubahfasilitas/${fasilitas.FasilitasKarantinaID}`}
            >
              <i className="fas fa-edit"></i>
            </Link>
            <button
              type="button"
              className="btn btn-danger"
              data-toggle="modal"
              data-target="#modalDelete"
              onClick={() => this.setKonfirmasiHapus(fasilitas)}
            >
              <i className="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      );
    });
  }

  renderContent = () => {
    if (!this.props.listFasilitas) {
      return (
        <tr>
          <td colspan="6">
            <div
              className="spinner-border text-light text-center"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </td>
        </tr>
      );
    }
    if (this.props.listFasilitas.length === 0) {
      return (
        <div className="alert alert-info">
          Tidak ada data Fasilitas Karantina.
        </div>
      );
    }

    return (
      <div>
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr className="text-light bg-primary">
                <th style={{ width: "50px" }}>No</th>
                <th>Nama Fasilitas</th>
                <th>Alamat </th>
                <th>Kecamatan </th>
                <th>Desa </th>
                <th style={{ width: "150px" }} className="text-center">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>{this.renderFasilitas()}</tbody>
          </table>
        </div>
      </div>
    );
  };

  deleteHandler = async (id) => {
    await this.props.hapusFasilitas(id);
    window.location.reload();
  };

  render() {
    if (this.state.prosesLoad === 0) {
      return (
        <div
          className="spinner-border text-light text-center"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      );
    }

    return (
      <div className="card shadow mb-4">
        <div className="card-header py-3 ">
          <h6 className="m-0 font-weight-bold text-primary">
            Daftar Fasilitas Karantina
            <Link
              to="/admin/tambahfasilitas"
              className="btn btn-primary float-right"
            >
              Tambah Fasilitas Karantina
            </Link>
          </h6>
        </div>
        <div className="card-body">
          {this.renderContent()}
          <KonfirmasiHapus
            data={this.state.dataHapus}
            onClickProses={this.deleteHandler}
            judul="Fasilitas Karantina"
          />
        </div>
      </div>
    );
  }
}

const stateToProps = (state) => {
  return {
    listFasilitas: state.listFasilitas,
  };
};

export default connect(stateToProps, { getFasilitas, hapusFasilitas })(
  Fasilitas
);
