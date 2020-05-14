import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import bgGugus from "../../assets/img/bggugus.jpg";
import { tambahGugusTugas } from "../../actions/actionGugusTugas";

export class TambahGugusTugas extends Component {
  state = {
    onSubmit: false,
  };

  styles = {
    bg: {
      background: `url(${bgGugus})`,
      backgroundSize: "cover",
    },
  };

  renderInput = ({ input, label, type, meta, dataToggle, dataTarget }) => {
    if (dataToggle) {
      return (
        <div className="form-group">
          <label htmlFor={label}>{label}</label>
          <input
            className="form-control  "
            id={label}
            {...input}
            type={type}
            autoComplete="off"
            placeholder={label}
            data-toggle="modal"
            data-target="#exampleModal"
          />
          {this.renderError(meta)}
        </div>
      );
    }
    return (
      <div className="form-group">
        <label htmlFor={label}>{label}</label>
        <input
          className="form-control  "
          id={label}
          {...input}
          type={type}
          autoComplete="off"
          placeholder={label}
        />
        {this.renderError(meta)}
      </div>
    );
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <small className="text-danger">{error}</small>
        // <span className="focus-input100" data-placeholder="&#xe82a;">{error}</span>
      );
    }
  }

  onSubmit = async (formValues) => {
    await this.props.tambahGugusTugas(formValues);
    this.setState({ onSubmit: true });
  };

  contentRender = () => {
    return (
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Tambah Gugus Tugas
          </h6>
        </div>
        <div className="card-body">
          <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row justify-content-center">
                  <div className="col-lg-7">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">
                          Data Gugus Tugas{" "}
                        </h1>
                      </div>

                      <div>
                        <form
                          onSubmit={this.props.handleSubmit(this.onSubmit)}
                          className="user"
                        >
                          <Field
                            name="name"
                            component={this.renderInput}
                            label="Nama"
                            type="text"
                          />
                          <Field
                            name="email"
                            component={this.renderInput}
                            label="Email"
                            type="email"
                          />
                          <Field
                            name="username"
                            component={this.renderInput}
                            label="Username"
                            type="text"
                          />
                          <Field
                            name="password"
                            component={this.renderInput}
                            label="Password"
                            type="password"
                          />
                          <Field
                            name="nomor_hp"
                            component={this.renderInput}
                            label="Nomor HP"
                            type="text"
                          />
                          <Field
                            name="alamat"
                            component={this.renderInput}
                            label="Alamat"
                            type="text"
                          />

                          <hr />

                          <div className="row">
                            <div className="col-6">
                              <button
                                className="btn btn-primary"
                                style={{ width: "100%" }}
                              >
                                {" "}
                                OK
                              </button>
                            </div>
                            <div className="col-6">
                              <Link
                                to="/admin/gugustugas"
                                className="btn btn-secondary"
                                style={{ width: "100%" }}
                              >
                                {" "}
                                Batal
                              </Link>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    console.log(this.props);

    if (this.state.onSubmit) {
      return <Redirect to="/admin/gugustugas" />;
    }

    return <div>{this.contentRender()}</div>;
  }
}

const validate = (formValue) => {
  const errors = {};
  if (!formValue.username) {
    errors.username = "Username Harus diisi";
  }
  if (!formValue.name) {
    errors.name = "Nama Harus diisi";
  }
  if (!formValue.password) {
    errors.password = "Password Harus diisi";
  }
  if (!formValue.email) {
    errors.email = "Email Harus diisi";
  }
  if (!formValue.alamat) {
    errors.alamat = "Alamat Harus diisi";
  }

  return errors;
};

const formWrap = reduxForm({
  form: "tambahGugusTugas",
  enableReinitialize: true,
  validate,
})(TambahGugusTugas);

export default connect(null, { tambahGugusTugas })(formWrap);
