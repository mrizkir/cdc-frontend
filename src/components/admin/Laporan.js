import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

export class Laporan extends Component {
  state = {
    prosesLoad: 0,
  };

  componentDidMount = async () => {
    // await this.props.getPasien();
    this.setState({
      prosesLoad: 1,
    });
  };

  renderLaporan() {
    return this.props.laporan.map((laporan) => {
      return (
        <tr key={laporan.id}>
          <td> </td>
          <td> </td>
          <td></td>
        </tr>
      );
    });
  }

  renderContent = () => {
    if (!this.props.laporan) {
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
    if (this.props.laporan.length === 0) {
      return (
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Laporan</h6>
          </div>
          <div className="card-body">
            <div className="alert alert-info">Tidak ada data Laporan.</div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Laporan</h6>
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
                    <th>Jenis Laporan</th>
                    <th>File Download</th>
                  </tr>
                </thead>
                <tbody>{this.renderLaporan()}</tbody>
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
    laporan: state.laporan,
  };
};

export default connect(stateToProps)(Laporan);
