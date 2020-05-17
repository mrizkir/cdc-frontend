import React from "react";
import { connect } from "react-redux";

const Profil = ({ user }) => {
  if (!user) return null;

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3 ">
          <h6 className="m-0 font-weight-bold text-primary">Profil Saya</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <tbody>
                <tr>
                  <th>Nama</th>
                  <td>{user.name}</td>
                </tr>
                <tr>
                  <th>Username</th>
                  <td>{user.username}</td>
                </tr>
                <tr>
                  <th>Nomor Hp</th>
                  <td>{user.nomor_hp}</td>
                </tr>
                <tr>
                  <th>Alamat</th>
                  <td>{user.alamat}</td>
                </tr>
                <tr>
                  <th colSpan="2">Lokasi Tugas : </th>
                </tr>
                <tr>
                  <th>Kecamatan</th>
                  <td>{user.Nm_Kecamatan}</td>
                </tr>
                <tr>
                  <th>Kelurahan</th>
                  <td>{user.Nm_Desa}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

const stateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(stateToProps)(Profil);
