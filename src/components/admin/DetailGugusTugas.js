import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { getGugusTugas } from "../../actions/actionGugusTugas";

export class DetailGugusTugas extends Component {
  componentDidMount = async () => {
    await this.props.getGugusTugas();
  };

  contentRender = () => {
    if (!this.props.gugusTugas) return null;

    const GugusTugas = this.props.gugusTugas;
    return (
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Detail Gugus Tugas
          </h6>
        </div>
        <div className="card-body">
          <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row justify-content-center">
                  <div className="col-lg-7">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">
                          Data Detail GugusTugas{" "}
                        </h1>
                      </div>

                      <div className="table-responsive">
                        <table
                          className="table table-bordered"
                          id="dataTable"
                          width="100%"
                          cellSpacing="0"
                        >
                          <tbody>
                            <tr>
                              <td>Nama</td>
                              <td> {GugusTugas.name}</td>
                            </tr>
                            <tr>
                              <td>Username </td>
                              <td>{GugusTugas.username}</td>
                            </tr>
                            <tr>
                              <td>Nomor HP</td>
                              <td>{GugusTugas.nomor_hp}</td>
                            </tr>

                            <tr>
                              <td>Alamat</td>
                              <td>{GugusTugas.alamat}</td>
                            </tr>

                            {/* <tr>
                              <td>Kecamatan</td>
                              <td>{GugusTugas.Nm_Kecamatan}</td>
                            </tr>
                            <tr>
                              <td>Desa</td>
                              <td>{GugusTugas.Nm_Desa}</td>
                            </tr> */}
                          </tbody>
                        </table>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-6">
                          <Link
                            to="/admin/gugustugas"
                            className="btn btn-secondary"
                            style={{ width: "100%" }}
                          >
                            {" "}
                            Kembali
                          </Link>
                        </div>
                        <div class="col-6">
                          <Link
                            className="btn btn-warning mr-2"
                            to={`/admin/ubahgugustugas/${GugusTugas.id}`}
                            style={{ width: "100%", color: "black" }}
                          >
                            <i className="fas fa-edit"></i> Ubah
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.contentRender()}</div>;
  }
}

const stateToProps = (state, myprops) => {
  return {
    gugusTugas: state.listGugusTugas.find((us) => {
      return parseInt(us.id) === parseInt(myprops.id);
    }),
  };
};

export default connect(stateToProps, { getGugusTugas })(DetailGugusTugas);
