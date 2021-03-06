import React, { Component } from "react";

import { BASE_URL } from "../constant";
import { Link, Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { getDetailPasien, ubahPasien } from "../../actions";
import noImage from "../../assets/img/no_photo.jpg";
import ModalUbahPasien from "./ModalUbahPasien";
import ModalUploadFoto from "./ModalUploadFoto";
import { getKecamatan, getDesa } from "../../actions/actionSystem";
import ModalKecamatan from "./ModalKecamatan";
import ModalDesa from "./ModalDesa";

export class UbahPasienx extends Component {
  state = {
    prosesLoad: 0,
    onOk: false,
    submit: false,
    Nm_Kecamatan: "",
    PmKecamatanID: "",
    PmDesaID: "",
    Nm_Desa: "",
    modalKecamatan: false,
  };

  async componentDidMount() {
    await this.props.getDetailPasien(this.props.id);
    this.setState({
      prosesLoad: 1,
    });
    this.setState({
      Nm_Kecamatan: this.props.initialValues.Nm_Kecamatan,
      Nm_Desa: this.props.initialValues.Nm_Desa,
      PmKecamatanID: this.props.initialValues.PmKecamatanID,
      PmDesaID: this.props.initialValues.PmDesaID,
    });
    this.props.getDesa(this.state.PmKecamatanID);
  }

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
  renderInput = ({ input, label, type, meta, dataToggle, dataTarget }) => {
    if (dataToggle) {
      return (
        <div className="form-group">
          <label htmlFor={label}>{label}</label>
          <input
            className="form-control form-control-user"
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
          className="form-control "
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

  onSubmit = (formValues) => {
    this.setState({ submit: true });
    if (this.state.Nm_Desa === "" || this.state.Nm_Desa === "--") return;

    const formD = {
      ...formValues,
      ...this.state,
    };

    this.props.ubahPasien(this.props.id, formD, () => {
      this.setState({
        onOk: true,
      });
    });
  };

  render() {
    if (this.state.onOk) {
      return <Redirect to="/admin/pasien" />;
    }

    if (this.state.prosesLoad === 0) {
      return (
        <div
          className="spinner-border text-light text-center"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      );
    }

    if (this.props.initialValues === null) {
      return (
        <div>
          <div
            className="spinner-border text-light"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }

    const pasien = this.props.pasien;
    var foto = "";
    if (pasien.foto === "storage/images/users/no_photo.png") {
      foto = noImage;
    } else {
      foto = `${BASE_URL}/${pasien.foto}`;
    }
    const contentRender = (
      <div>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Ubah Pasien</h6>
          </div>
          <div className="card-body">
            <div className="container">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  <div className="row">
                    <div
                      className="col-lg-5   d-lg-block pr-0 text-center "
                      style={{ background: "#dddddd" }}
                    >
                      <img alt="bg" src={foto} style={{ width: "100%" }} />
                      <button
                        className="form-control form-control-user"
                        type="button"
                        autoComplete="off"
                        data-toggle="modal"
                        data-target="#exampleModal2"
                      >
                        <i className="fas fa-edit"></i> Ubah Foto
                      </button>
                    </div>
                    <div className="col-lg-7">
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h4 text-gray-900 mb-4">
                            Ubah Data Pasien{" "}
                          </h1>
                        </div>
                        <form
                          onSubmit={this.props.handleSubmit(this.onSubmit)}
                          className="user"
                        >
                          <Field
                            name="username"
                            component={this.renderInput}
                            label="NIK"
                            type="text"
                          />
                          <Field
                            name="name"
                            component={this.renderInput}
                            label="Nama"
                            type="text"
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
                                  ? this.props.initialValues.Nm_Kecamatan
                                  : this.state.Nm_Kecamatan
                              }
                              disabled
                              className="form-control"
                            />
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
                            />{" "}
                            {this.state.Nm_Desa == "--" && this.state.submit ? (
                              <small className="text-danger">
                                Desa / Kelurahan Harus dipilih
                              </small>
                            ) : (
                              ""
                            )}
                          </div>

                          <Field
                            name="tanggal_lahir"
                            component={this.renderInput}
                            type="hidden"
                          />
                          <Field
                            name="tempat_lahir"
                            component={this.renderInput}
                            type="hidden"
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
                                to="/admin/pasien"
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

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <ModalUbahPasien pasien={pasien} />
        </div>
        <div
          className="modal fade"
          id="exampleModal2"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel2"
          aria-hidden="true"
        >
          <ModalUploadFoto pasien={pasien} />
        </div>
      </div>
    );

    return (
      <>
        {contentRender}
        <ModalKecamatan
          modalKecamatan={this.state.modalKecamatan}
          modalKecamatanClose={this.modalKecamatanClose}
          selected={
            this.state.Nm_Kecamatan === ""
              ? this.props.initialValues.Nm_Kecamatan
              : this.state.Nm_Kecamatan
          }
          onChange={this.onChangeKecamatan}
        />
        <ModalDesa
          modalDesa={this.state.modalDesa}
          modalDesaClose={this.modalDesaClose}
          selected={
            this.state.Nm_Desa === ""
              ? this.props.initialValues.Nm_Desa
              : this.state.Nm_Desa
          }
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
    errors.username = "NIK Harus diisi";
  }
  if (!formValue.alamat) {
    errors.alamat = "Alamat Harus diisi";
  }

  return errors;
};

const stateToProps = (state) => {
  return {
    initialValues: state.detailPasien,
    pasien: state.detailPasien,
  };
};

const formWrap = reduxForm({
  form: "formUbahPasien",
  enableReinitialize: true,
  validate,
})(UbahPasienx);

export default connect(stateToProps, {
  getDetailPasien,
  ubahPasien,
  getKecamatan,
  getDesa,
})(formWrap);
