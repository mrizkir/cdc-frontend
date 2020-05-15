import React, { Component } from "react";
import { getKecamatan } from "../../actions/actionSystem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class Kecamatan extends Component {
  state = {
    prosesLoad: 0,
  };

  componentDidMount = async () => {
    await this.props.getKecamatan();
    this.setState({
      prosesLoad: 1,
    });
  };

  renderContent = () => {
    if (!this.props.listKecamatan) {
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
    if (this.props.listKecamatan.length === 0) {
      return (
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Daftar Kecamatan
            </h6>
          </div>
          <div className="card-body">
            <div className="alert alert-info">Tidak ada data kecamatan.</div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Daftar Kecamatan
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th className="text-center">No</th>
                    <th className="text-center">Kecamatan</th>
                    <th className="text-center">Latitude 1</th>
                    <th className="text-center">Longitude 1</th>
                    <th className="text-center">Latitude 2</th>
                    <th className="text-center">Longitude 2</th>
                    <th className="text-center"></th>
                  </tr>
                </thead>
                <tbody>{this.renderKecamatan()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderKecamatan() {
    return this.props.listKecamatan.kecamatan.map((kec, i) => {
      return (
        <tr key={kec.PmKecamatanID}>
          <td className="text-center" width="40">
            {i + 1}
          </td>
          <td>{kec.Nm_Kecamatan}</td>
          <td className="text-center">{kec.lat}</td>
          <td className="text-center">{kec.lng}</td>
          <td className="text-center">{kec.lat2}</td>
          <td className="text-center">{kec.lng2}</td>
          <td className="text-center" width="70">
            <Link
              to={`/admin/ubahkecamatan/${kec.PmKecamatanID}`}
              className="btn btn-warning mr-2"
            >
              <i className="fas fa-edit"></i>
            </Link>
          </td>
        </tr>
      );
    });
  }

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
    listKecamatan: state.listKecamatan,
  };
};

export default connect(stateToProps, { getKecamatan })(Kecamatan);
