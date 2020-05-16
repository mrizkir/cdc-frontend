import React, { Component } from "react";
import noImage from "../../assets/img/no_photo.jpg";
import { BASE_URL } from "../constant";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getPasien } from "../../actions";

export class Pasien extends Component {
  state = {
    prosesLoad: 0,
  };

  componentDidMount = async () => {
    await this.props.getPasien();
    this.setState({
      prosesLoad: 1,
    });
  };

  renderPasien() {
    return this.props.pasiens.userspasien.map((pasien, index) => {
      var foto = "";
      if (pasien.foto === "storage/images/users/no_photo.png") {
        foto = noImage;
      } else {
        foto = `${BASE_URL}/${pasien.foto}`;
      }
      return (
        <tr key={pasien.id}>
          <td>{index + 1}</td>
          <td>
            <img alt="bg" src={foto} style={{ width: "50px" }} />
          </td>
          <td>{pasien.username}</td>

          <td>
            {" "}
            <Link to={`/admin/detailpasien/${pasien.id}`} className="link">
              {pasien.name}
            </Link>
          </td>
          <td>{pasien.nomor_hp}</td>
          <td>{pasien.Nm_Kecamatan}</td>
          <td>{pasien.nama_status}</td>
          <td>
            <Link
              to={`/admin/ubahpasien/${pasien.id}`}
              className="btn btn-warning mr-2"
            >
              <i className="fas fa-edit"></i>
            </Link>
            <Link
              to={`/admin/detailpasien/${pasien.id}`}
              className="btn btn-info"
            >
              <i className="far fa-eye"></i>
            </Link>
          </td>
        </tr>
      );
    });
  }

  renderContent = () => {
    if (!this.props.pasiens) {
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
    if (this.props.pasiens.userspasien.length === 0) {
      return (
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Daftar Pasien</h6>
          </div>
          <div className="card-body">
            <div className="alert alert-info">Tidak ada data pasien.</div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Daftar Pasien</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Foto</th>
                    <th>NIK</th>
                    <th>Nama</th>
                    <th>No Hp</th>
                    <th>Kecamatan</th>
                    <th>Status Pasien</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>{this.renderPasien()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
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

    return <>{this.renderContent()}</>;
  }
}

const stateToProps = (state) => {
  return {
    pasiens: state.pasien,
  };
};

export default connect(stateToProps, { getPasien })(Pasien);
