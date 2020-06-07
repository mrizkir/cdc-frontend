import React, { Component } from "react";
import { connect } from "react-redux";

export class ContainerKeterangan extends Component {
  render() {
    const listStatus = this.props.listStatus;
    const listTotalKasus = !this.props.listTotalKasus
      ? null
      : this.props.listTotalKasus.ringkasan;
    const totalKasus = !this.props.listTotalKasus
      ? null
      : this.props.listTotalKasus.total;

    console.log(listTotalKasus);
    if (!listStatus || !listTotalKasus) {
      return (
        <div>
          <div className="text-center">
            <div className="spinner-border spinner-border-sm" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <div className="spinner-grow spinner-grow-sm" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <br></br>
            <br></br>
          </div>
        </div>
      );
    }

    return (
      <div>
        <h1 className="text-center">
          {" "}
          Corona Data Center Kabupaten Bintan
          <br />
          <strong className="text-danger h4 text-center">
            Total Kasus Terkonfirmasi : {totalKasus}
          </strong>
        </h1>
        <br />
        <div className="row mr-3 ml-3 justify-content-center">
          {listTotalKasus.map((total) => {
            return (
              <div className="col-xl-3 col-md-3 mb-4">
                <div className="card border-left-danger shadow h-60 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                          {total.nama_status}
                        </div>
                        <div className="h6 mb-0 font-weight-bold text-gray-800">
                          {total.jumlah} Orang
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default connect(null)(ContainerKeterangan);
