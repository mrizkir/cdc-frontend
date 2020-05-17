import React, { Component } from "react";
import { connect } from "react-redux";

class UbahPassword extends Component {
  state = {
    name: "",
    username: "",
    nomor_hp: "",
    alamat: "",
    password: "",
    passwordbc: "",
    passwordbaru: "",
  };

  componentDidMount = () => {
    // this.setState({
    //   name: this.props.user.name,
    //   username: this.props.user.username,
    //   nomor_hp: this.props.user.nomor_ho,
    //   alamat: this.props.user.alamat,
    //   passwordbc: this.props.user.password,
    // });
  };

  onchangeText = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = () => {
    console.log(this.state);
  };

  render() {
    if (!this.props.user) return null;

    const user = this.props.user;
    return (
      <>
        <div className="card shadow mb-4">
          <div className="card-header py-3 ">
            <h6 className="m-0 font-weight-bold text-primary">Ubah Profil</h6>
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
                    <th>
                      <label htmlFor="name">Nama</label>
                    </th>
                    <td>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          id="nama"
                          onChange={this.onchangeText}
                          value={this.state.name}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label htmlFor="username">Username</label>
                    </th>
                    <td>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="username"
                          id="username"
                          onChange={this.onchangeText}
                          value={this.state.username}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label htmlFor="nomor_hp">Nomor Hp</label>
                    </th>
                    <td>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="nomor_hp"
                          id="nomor_hp"
                          onChange={this.onchangeText}
                          value={this.state.nomor_hp}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label htmlFor="alamat">Alamat</label>
                    </th>
                    <td>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="alamat"
                          id="alamat"
                          onChange={this.onchangeText}
                          value={this.state.alamat}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label htmlFor="password">Password Lama</label>
                    </th>
                    <td>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="password"
                          id="password"
                          onChange={this.onchangeText}
                          value={this.state.password}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label htmlFor="passwordbaru">Password Baru</label>
                    </th>
                    <td>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          name="passwordbaru"
                          id="passwordbaru"
                          onChange={this.onchangeText}
                          value={this.state.passwordbaru}
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const stateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(stateToProps)(UbahPassword);
