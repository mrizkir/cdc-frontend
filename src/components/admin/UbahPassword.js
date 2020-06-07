import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ubahPassword } from "../../actions";

class UbahPassword extends Component {
  state = {
    password: "",
    passwordKonfirm: "",
    passwordError: "",
    complete: false,
  };

  componentDidMount = () => {
    this.setState({
      username: this.props.user ? this.props.user.username : "",
    });
  };

  onchangeText = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = async () => {
    console.log(this.state);
    if (this.state.password !== this.state.passwordKonfirm) {
      this.setState({ passwordError: "Password tidak sama." });
    } else {
      this.setState({ passwordError: "" });
      const formData = { ...this.props.user, password: this.state.password };
      await this.props.ubahPassword(this.props.user.id, formData);
      this.setState({ complete: true });
      console.log(this.state);
    }
  };

  render() {
    if (!this.props.user) return null;

    if (this.state.complete) {
      return <div className="alert alert-success">Berhasil Ubah Password</div>;
    }

    return (
      <div className="col-lg-7">
        <div className="card shadow mb-4">
          <div className="card-header py-3 ">
            <h6 className="m-0 font-weight-bold text-primary">
              Ubah Password {this.props.user.username}
            </h6>
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
                      <label htmlFor="passwordbaru">Password Baru</label>
                    </th>
                    <td>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="password"
                          name="password"
                          id="password"
                          onChange={this.onchangeText}
                          value={this.state.passwordbaru}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label htmlFor="passwordKonfirm">
                        Ulang Ketik Password Baru
                      </label>
                    </th>
                    <td>
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="password"
                          name="passwordKonfirm"
                          id="passwordKonfirm"
                          onChange={this.onchangeText}
                          value={this.state.passwordKonfirm}
                        />
                        {this.state.passwordError === "" ? null : (
                          <div className="text-danger">
                            {this.state.passwordError}
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button className="btn btn-primary mr-2" onClick={this.onSubmit}>
                Ubah
              </button>
              <Link to="/admin/dasboard" className="btn btn-secondary">
                Batal
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const stateToProps = (state) => {
  return {};
};

export default connect(stateToProps, { ubahPassword })(UbahPassword);
