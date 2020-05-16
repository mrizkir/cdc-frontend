import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { getGugusTugas, hapusGugusTugas } from "../../actions/actionGugusTugas";
import KonfirmasiHapus from "./template/KonfirmasiHapus";

export class GugusTugas extends Component {
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
    await this.props.hapusGugusTugas(id);
    window.location.reload();
  };

  componentDidMount() {
    this.props.getGugusTugas();
  }

  renderContent = () => {
    if (this.props.listGugusTugas.length === 0) {
      return <div className="alert alert-info">Tidak ada data Gugus Tugas</div>;
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
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Username</th>
              <th width="300px" className="text-center">
                Aksi{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.listGugusTugas.map((gugus, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{gugus.name}</td>
                  <td>{gugus.email}</td>
                  <td>{gugus.username}</td>
                  <td className="text-center">
                    {/* <Link className="btn btn-success mr-2">Set Permision</Link> */}
                    <Link
                      to={`/admin/detailgugustugas/${gugus.id}`}
                      className="btn btn-info mr-2"
                    >
                      <i className="far fa-eye"></i>
                    </Link>
                    <Link
                      className="btn btn-warning mr-2"
                      to={`/admin/ubahgugustugas/${gugus.id}`}
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
          judul="Gugus Tugas"
        />
      </div>
    );
  };

  render() {
    return (
      <div className="card shadow mb-4">
        <div className="card-header py-3 ">
          <h6 className="m-0 font-weight-bold text-primary">
            Daftar Gugus Tugas
            <Link
              to="/admin/tambahgugustugas"
              className="btn btn-primary float-right"
            >
              Tambah Gugus Tugas
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
    listGugusTugas: state.listGugusTugas,
  };
};

export default connect(stateToProps, { getGugusTugas, hapusGugusTugas })(
  GugusTugas
);
