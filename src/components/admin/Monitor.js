import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "../../assets/css/StyleAdmin.css";
import { getKoordinat, getUser } from "../../actions";
import { getStatus, getTotalKasus } from "../../actions/actionSystem";
import ChartTotal from "./chart/ChartTotal";
import FooterHome from "../FooterHome";
import { ContainerKeterangan } from "./template/ContainerKeterangan";
import NavbarMonitor from "./template/NavbarMonitor";
import ScrollToTop from "./template/ScrollToTop";

export class Monitor extends Component {
  state = {
    namaAdmin: "",
  };

  async componentDidMount() {
    this.props.getUser();
    this.props.getStatus();
    this.props.getTotalKasus();
    await this.props.getKoordinat();

    if (this.props.user) {
      this.setState({
        namaAdmin: this.props.user.name,
      });
    }
  }

  renderContent = () => {
    if (this.props.statusLogin !== "Berhasil") {
      return <Redirect to="/" />;
    } else {
      return (
        <div id="wrapper">
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <NavbarMonitor namaUser={this.state.namaAdmin} />
              <ContainerKeterangan
                jumlah={this.props.jumlah}
                listStatus={this.props.listStatus}
                listTotalKasus={this.props.listTotalKasus}
              />

              <div className="container-fluid">
                {this.props.contentRender}

                {/* <ChartTotal /> */}
                <FooterHome />
              </div>
            </div>

            <Link className="scroll-to-top rounded" to="#page-top">
              <i className="fas fa-angle-up"></i>
            </Link>
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div id="page-top" className="body-monitor">
        {this.renderContent()}
        <ScrollToTop />
      </div>
    );
  }
}

const stateToProps = (state) => {
  return {
    ListKoordinat: state.ListKoordinat,
    user: state.user,
    statusLogin: state.statusLogin,
    jumlah: state.jumlah,
    enableReinitialize: true,
    listStatus: state.listStatus,
    listTotalKasus: state.listTotalKasus,
  };
};

export default connect(stateToProps, {
  getKoordinat,
  getUser,
  getStatus,
  getTotalKasus,
})(Monitor);
