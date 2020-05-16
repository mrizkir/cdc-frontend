import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import bgGugus from "../../assets/img/bggugus.jpg";
import { tambahFasilitas } from "../../actions/actionFasilitas";
import { getKecamatan, getDesa } from "../../actions/actionSystem";
import ModalKecamatan from "./ModalKecamatan";
import ModalDesa from "./ModalDesa";

export class TambahFasilitas extends Component {
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
    if (label === "Alamat") {
      return (
        <div className="form-group">
          <label htmlFor={label}>{label}</label>
          <textarea
            className="form-control  "
            id={label}
            {...input}
            placeholder={label}
          >
            {" "}
          </textarea>
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

    this.props.tambahFasilitas(formD, () => {
      this.setState({ onSubmit: true });
    });
  };

  contentRender = () => {
    return (
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Tambah Fasilitas Karantina
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
                          Data Fasilitas Karantina{" "}
                        </h1>
                      </div>

                      <div>
                        <form
                          onSubmit={this.props.handleSubmit(this.onSubmit)}
                          className="user"
                        >
                          <Field
                            name="Nm_Fasilitas"
                            component={this.renderInput}
                            label="Nama Fasilitas"
                            type="text"
                          />
                          <Field
                            name="alamat"
                            component={this.renderInput}
                            label="Alamat"
                            type="textarea"
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
                                to="/admin/fasilitas"
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
      return <Redirect to="/admin/fasilitas" />;
    }

    return (
      <>
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
  if (!formValue.Nm_Fasilitas) {
    errors.Nm_Fasilitas = "Nama Fasilitas Harus diisi";
  }

  if (!formValue.alamat) {
    errors.alamat = "Alamat Harus diisi";
  }
  if (!formValue.PmKecamatanID) {
    errors.PmKecamatanID = "Kecamatan Harus diisi";
  }

  return errors;
};

const formWrap = reduxForm({
  form: "tambahFasilitas",
  enableReinitialize: true,
  validate,
})(TambahFasilitas);

const stateToProps = (state) => {
  return {
    listKecamatan: state.listKecamatan,
    listDesa: state.listDesa,
  };
};

export default connect(stateToProps, {
  tambahFasilitas,
  getKecamatan,
  getDesa,
})(formWrap);
