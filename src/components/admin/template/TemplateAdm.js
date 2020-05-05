import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import "../../../assets/admin/css/sb-admin-2.min.css";
import "../../../assets/admin/vendor/fontawesome-free/css/all.min.css";
import "../../../assets/css/StyleAdmin.css";

import { getUser } from "../../../actions";
import { Dasboard } from "../Dasboard";
import { Sidebar } from "./Sidebar";
import NavbarAdmin from "./NavbarAdmin";
import GugusTugas from "../GugusTugas";
import Petugas from "../Petugas";
import ListPasien from "../ListPasien";
import DetailPasien from "../DetailPasien";
import UbahPasienx from "../UbahPasien";
import TambahGugusTugas from "../TambahGugusTugas";
import UbahGugusTugas from "../UbahGugusTugas";
import TambahPetugas from "../TambahPetugas";
import UbahPetugas from "../UbahPetugas";
import Fasilitas from "../Fasilitas";
import TambahFasilitas from "../TambahFasilitas";
import UbahFasilitas from "../UbahFasilitas";
import DetailPetugas from "../DetailPetugas";
import Laporan from "../Laporan";

export class TemplateAdm extends Component {
  componentDidMount = () => {
    this.props.getUser();
  };

  pilihanMenu = () => {
    if (this.props.match.params.id) {
      switch (this.props.match.params.menu) {
        case "detailpasien":
          return <DetailPasien id={this.props.match.params.id} />;
        case "ubahpasien":
          return <UbahPasienx id={this.props.match.params.id} />;
        case "ubahgugustugas":
          return <UbahGugusTugas id={this.props.match.params.id} />;
        case "ubahpetugas":
          return <UbahPetugas id={this.props.match.params.id} />;
        case "detailpetugas":
          return <DetailPetugas id={this.props.match.params.id} />;
        case "ubahfasilitas":
          return <UbahFasilitas id={this.props.match.params.id} />;
      }
    } else {
      switch (this.props.match.params.menu) {
        case "dasboard":
          return <Dasboard />;
        case "gugustugas":
          return <GugusTugas />;
        case "petugas":
          return <Petugas />;
        case "pasien":
          return <ListPasien />;
        case "tambahgugustugas":
          return <TambahGugusTugas />;
        case "tambahpetugas":
          return <TambahPetugas />;
        case "fasilitas":
          return <Fasilitas />;
        case "tambahfasilitas":
          return <TambahFasilitas />;
        case "laporan":
          return <Laporan />;
      }
    }
  };

  renderContent = () => {
    if (this.props.statusLogin !== "Berhasil") {
      return <Redirect to="/" />;
    } else {
      var nama = "";
      if (this.props.user) {
        nama = this.props.user.name;
      }

      return (
        <div id="wrapper">
          <Sidebar />

          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <NavbarAdmin namaAdmin={nama} />
              <div className="container-fluid">{this.pilihanMenu()}</div>
            </div>
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>
                    Copyright &copy; Data Center Covid-19 Kabupaten Bintan
                  </span>
                </div>
              </div>
            </footer>
          </div>
        </div>
      );
    }
  };

  render() {
    if (!this.props.statusLogin) {
      return <div>Loading..</div>;
    }

    return <div id="page-top">{this.renderContent()}</div>;
  }
}

const stateToProps = (state) => {
  return {
    user: state.user,
    statusLogin: state.statusLogin,
  };
};

export default connect(stateToProps, { getUser })(TemplateAdm);
