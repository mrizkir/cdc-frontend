import React, { Component } from "react";
import noImage from "../../assets/img/no_photo.jpg";
import { BASE_URL } from "../constant";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getPasien } from "../../actions";
import { getKecamatan } from "../../actions/actionSystem";

export class Pasien extends Component {
  state = {
    prosesLoad: 0,
    filterKecamatan: "",
  };

  componentDidMount = async () => {
    await this.props.getPasien();
    await this.props.getKecamatan();
    this.setState({
      prosesLoad: 1,
    });
  };

  onChangeKecamatan = (x) => {
    this.setState({
      filterKecamatan: x.target.value,
    });
  };

  renderPasien() {
    const dataPasien =
      this.state.filterKecamatan === ""
        ? this.props.pasiens.userspasien
        : this.props.pasiens.userspasien.filter((pas) => {
            return pas.Nm_Kecamatan === this.state.filterKecamatan;
          });

    return dataPasien.map((pasien, index) => {
      var foto = "";
      if (pasien.foto === "storage/images/users/no_photo.png") {
        foto = noImage;
      } else {
        foto = `${BASE_URL}/${pasien.foto}`;
      }

      if (this.props.user) {
        if (
          this.props.user.role[0] === "petugas" &&
          this.props.user.PmKecamatanID !== pasien.PmKecamatanID
        ) {
          return;
        }
      }

      return (
        <tr key={pasien.id}>
          <td className="text-center">{index + 1}</td>
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

          <td>{pasien.Nm_Kecamatan}</td>
          <td className="text-center" style={{ textTransform: "capitalize" }}>
            {pasien.nama_status}
          </td>
          <td width="130px" className="text-center">
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

  renderKecamatan = () => {
    if (this.props.listKecamatan) {
      return this.props.listKecamatan.kecamatan.map((kec) => {
        return <option value={kec.Nm_Kecamatan}>{kec.Nm_Kecamatan}</option>;
      });
    }
  };

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
            <div className="row">
              <div className="col-lg-6">
                <h6 className="m-0 font-weight-bold text-primary">
                  Daftar Pasien
                </h6>
              </div>
              <div className="col-lg-6 text-right">
                <select
                  className="form-control"
                  onChange={(x) => {
                    this.onChangeKecamatan(x);
                  }}
                >
                  <option>--Filter Kecamatan --</option>
                  {this.renderKecamatan()}
                </select>
              </div>
            </div>
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
                  <tr className="bg-primary text-light">
                    <th className="text-center">No</th>
                    <th className="text-center">Foto</th>
                    <th>NIK</th>
                    <th>Nama</th>

                    <th>Kecamatan</th>
                    <th width="200px" className="text-center">
                      Status Pasien
                    </th>
                    <th className="text-center">Aksi</th>
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
    user: state.user,
    listKecamatan: state.listKecamatan,
  };
};

export default connect(stateToProps, { getPasien, getKecamatan })(Pasien);
