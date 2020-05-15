import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Sidebar extends Component {
  render() {
    return (
      <div>
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <Link
            className="sidebar-brand d-flex align-items-center justify-content-center"
            to="/admin/dasboard"
          >
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-smile"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Admin Bintan CDC</div>
          </Link>
          <hr className="sidebar-divider my-0" />
          <li className="nav-item active">
            <Link className="nav-link" to="/admin/dasboard">
              <i className="fas fa-tachometer-alt  "></i>
              <span>Dasboard</span>
            </Link>
          </li>
          <hr className="sidebar-divider my-0" />
          <li className="nav-item  ">
            <Link className="nav-link" to="/adm/monitor">
              <i className="fas fa-tv  "></i>
              <span>Monitor</span>
            </Link>
          </li>

          <hr className="sidebar-divider" />

          <div className="sidebar-heading">Users</div>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/gugustugas">
              <i className="fas fa-fw fa-users"></i>
              <span>Gugus Tugas</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/admin/petugas">
              <i className="fas fa-fw fa-users"></i>
              <span>Petugas</span>
            </Link>
          </li>

          <hr className="sidebar-divider"></hr>

          <div className="sidebar-heading">Pasien</div>

          <li className="nav-item">
            <Link className="nav-link" to="/admin/pasien">
              <i className="fas fa-fw fa-procedures"></i>
              <span>Daftar Pasien</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/fasilitas">
              <i className="fas fa-fw fa-medkit"></i>
              <span>Fasilitas Karantina</span>
            </Link>
          </li>

          <hr className="sidebar-divider"></hr>

          <li className="nav-item">
            <Link className="nav-link" to="/admin/kecamatan">
              <i className="fas fa-fw fa-map-marked-alt"></i>
              <span>Lokasi Kecamatan</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/laporan">
              <i className="fas fa-fw fa-file-download"></i>
              <span>Laporan</span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
