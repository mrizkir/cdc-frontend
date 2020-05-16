import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import bgGugus from "../../assets/img/bggugus.jpg";
import { tambahPetugas } from "../../actions/actionPetugas";
import { getKecamatan, getDesa } from "../../actions/actionSystem";

import ModalKecamatan from "./ModalKecamatan";
import ModalDesa from "./ModalDesa";

export class TambahPetugas extends Component {
  state = {
    onSubmit: false,

    submit: false,
    Nm_Kecamatan: "",
    PmKecamatanID: "",
    PmDesaID: "",
    Nm_Desa: "",
    modalKecamatan: false,
  };

  styles = {
    bg: {
      background: `url(${bgGugus})`,
      backgroundSize: "cover",
    },
  };

  componentDidMount() {
    this.props.getKecamatan();
  }

  modalKecamatanClose = () =>
    this.setState({
      modalKecamatan: false,
    });
  modalDesaClose = () =>
    this.setState({
      modalDesa: false,
    });

  modalKecamatanOpen = () => {
    this.setState({
      modalKecamatan: true,
    });
  };
  modalDesaOpen = () => {
    this.setState({
      modalDesa: true,
    });
  };

  onChangeKecamatan = async (id, nama) => {
    this.setState({
      Nm_Kecamatan: nama,
      PmKecamatanID: id,
    });
    this.props.getDesa(id);
    this.setState({
      Nm_Desa: "--",
      PmDesaID: "--",
    });
  };
  onChangeDesa = async (id, nama) => {
    this.setState({
      Nm_Desa: nama,
      PmDesaID: id,
    });
  };

  renderInput = ({ input, label, type, meta, dataToggle, dataTarget }) => {
    if (label === "Desa") {
      return (
        <div className="form-group">
          <label htmlFor={label}>{label}</label>
          <select
            className="form-control "
            id={label}
            {...input}
            type={type}
            onClick={this.onChangeDesa}
          >
            <option value="">--- Pilih Desa ---</option>
            {this.renderListDesa()}
          </select>
          {this.renderError(meta)}
        </div>
      );
    }

    if (label === "Kecamatan") {
      return (
        <div className="form-group">
          <label htmlFor={label}>{label}</label>
          <select
            className="form-control "
            id={label}
            {...input}
            type={type}
            onClick={this.onChangeKecamatan}
          >
            <option value="wow">--- Pilih Kecamatan ---</option>
            {this.renderListKecamatan()}
          </select>
          {this.renderError(meta)}
        </div>
      );
    }

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
    this.setState({ submit: true });

    if (this.state.Nm_Kecamatan === "") return;

    const formD = {
      ...formValues,
      ...this.state,
    };

    await this.props.tambahPetugas(formD, () => {
      this.setState({ onSubmit: true });
    });
  };

  contentRender = () => {
    return (
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Tambah Petugas</h6>
        </div>
        <div className="card-body">
          <div className="container">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row justify-content-center">
                  <div className="col-lg-7">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Data Petugas </h1>
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
                            type="number"
                          />
                          <Field
                            name="alamat"
                            component={this.renderInput}
                            label="Alamat"
                            type="text"
                          />
                          <div
                            className="form-group"
                            onClick={() => this.modalKecamatanOpen()}
                          >
                            <label htmlFor="Nm_Kecamatan">Kecamatan</label>
                            <input
                              id="Nm_Kecamatan"
                              type="text"
                              name="Nm_Kecamatan"
                              value={
                                this.state.Nm_Kecamatan === ""
                                  ? ""
                                  : this.state.Nm_Kecamatan
                              }
                              disabled
                              className="form-control"
                            />
                            {this.state.Nm_Kecamatan == "" &&
                            this.state.submit ? (
                              <small className="text-danger">
                                Kecamatan Harus dipilih
                              </small>
                            ) : (
                              ""
                            )}
                          </div>
                          <div
                            className="form-group"
                            onClick={() => this.modalDesaOpen()}
                          >
                            <label htmlFor="Nm_Desa">Desa</label>
                            <input
                              id="Nm_Desa"
                              type="text"
                              name="Nm_Desa"
                              value={
                                this.state.Nm_Desa === ""
                                  ? ""
                                  : this.state.Nm_Desa
                              }
                              disabled
                              className="form-control"
                            />
                          </div>

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
                                to="/admin/petugas"
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
    if (this.state.onSubmit) {
      return <Redirect to="/admin/petugas" />;
    }

    return (
      <>
        {" "}
        <div>{this.contentRender()}</div>
        <ModalKecamatan
          modalKecamatan={this.state.modalKecamatan}
          modalKecamatanClose={this.modalKecamatanClose}
          selected={
            this.state.Nm_Kecamatan === "" ? "" : this.state.Nm_Kecamatan
          }
          onChange={this.onChangeKecamatan}
        />
        <ModalDesa
          modalDesa={this.state.modalDesa}
          modalDesaClose={this.modalDesaClose}
          selected={this.state.Nm_Desa === "" ? "" : this.state.Nm_Desa}
          onChange={this.onChangeDesa}
          labelDefault="--"
        />
      </>
    );
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
  if (!formValue.nomor_hp) {
    errors.nomor_hp = "Nomor Handphone Harus diisi";
  }

  return errors;
};

const formWrap = reduxForm({
  form: "tambahPetugas",
  enableReinitialize: true,
  validate,
})(TambahPetugas);

const stateToProps = (state) => {
  return {
    listKecamatan: state.listKecamatan,
    listDesa: state.listDesa,
  };
};

export default connect(stateToProps, { tambahPetugas, getKecamatan, getDesa })(
  formWrap
);
