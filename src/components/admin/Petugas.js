import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { getPetugas, hapusPetugas } from "../../actions/actionPetugas";
import KonfirmasiHapus from "./template/KonfirmasiHapus";

export class Petugas extends Component {
  state = {
    dataHapus: {
      id: "",
      name: "",
    },
  };

  setKonfirmasiHapus = (data) => {
    this.setState({
      dataHapus: data,
    });
  };

  deleteHandler = async (id) => {
    await this.props.hapusPetugas(id);
    window.location.reload();
  };

  componentDidMount() {
    this.props.getPetugas();
  }

  renderContent = () => {
    if (this.props.listPetugas.length === 0) {
      return <div className="alert alert-info">Tidak ada data Petugas</div>;
    }

    return (
      <div className="table-responsive">
        <table
          className="table table-bordered"
          id="dataTable"
          width="100%"
          cellSpacing="0"
        >
          <thead>
            <tr className="text-light bg-primary">
              <th>No</th>
              <th>Nama</th>
              <th>Username</th>
              <th>Kecamatan</th>
              <th>Desa</th>

              <th width="300px" className="text-center">
                Aksi{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.listPetugas.map((gugus, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{gugus.name}</td>
                  <td>{gugus.username}</td>
                  <td>{gugus.Nm_Kecamatan}</td>
                  <td> {gugus.Nm_Desa ? gugus.Nm_Desa : "Semua Desa"}</td>

                  <td className="text-center">
                    {/* <Link className="btn btn-success mr-2"><i class="fas fa-key"></i></Link> */}
                    <Link
                      to={`/admin/detailpetugas/${gugus.id}`}
                      className="btn btn-info mr-2"
                    >
                      <i className="far fa-eye"></i>
                    </Link>
                    <Link
                      className="btn btn-warning mr-2"
                      to={`/admin/ubahpetugas/${gugus.id}`}
                    >
                      <i className="fas fa-edit"></i>
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-toggle="modal"
                      data-target="#modalDelete"
                      onClick={() => this.setKonfirmasiHapus(gugus)}
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <KonfirmasiHapus
          data={this.state.dataHapus}
          onClickProses={this.deleteHandler}
          judul="Petugas"
        />
      </div>
    );
  };

  render() {
    return (
      <div className="card shadow mb-4">
        <div className="card-header py-3 ">
          <h6 className="m-0 font-weight-bold text-primary">
            Daftar Petugas
            <Link
              to="/admin/tambahpetugas"
              className="btn btn-primary float-right"
            >
              Tambah Petugas
            </Link>
          </h6>
        </div>
        <div className="card-body">{this.renderContent()}</div>
      </div>
    );
  }
}

const stateToProps = (state) => {
  return {
    listPetugas: state.listPetugas,
  };
};

export default connect(stateToProps, { getPetugas, hapusPetugas })(Petugas);
