import React, { Component } from "react";
import { connect } from "react-redux";
import { getTotalKasus } from "../actions/actionSystem";

export class Sidebar extends Component {
  componentDidMount = () => {
    this.props.getTotalKasus();
  };

  render() {
    const listTotal = this.props.listTotalKasus
      ? this.props.listTotalKasus.ringkasan
      : null;

    const jumlahTotal = this.props.listTotalKasus
      ? this.props.listTotalKasus.total
      : null;

    if (!listTotal) {
      return (
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
      );
    }

    return (
      <>
        <div className="widget-box total">
          <h2 className="text-danger">Total Kasus Terdaftar</h2>
          <p className="text-dark"> {jumlahTotal}</p>
        </div>

        <div className="widget-box">
          {listTotal.map((list) => {
            return (
              <>
                <button
                  className="btn  mb-1"
                  style={{
                    width: "100%",
                    background: "black",
                    color: "yellow",
                  }}
                  type="button"
                  data-toggle="collapse"
                  data-target="#c1"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  {list.nama_status} ({list.jumlah})
                </button>
                {/* <div className="collapse mb-2" id="c1">
                  <div className="card card-body">
                    <small>KECAMATAN</small>
                    <hr className="garis" />
                    <div className="list-grup"></div>
                  </div>
                </div> */}
              </>
            );
          })}
        </div>
      </>
    );
  }
}

const stateToProps = (state) => {
  return {
    listTotalKasus: state.listTotalKasus,
  };
};

export default connect(stateToProps, { getTotalKasus })(Sidebar);
