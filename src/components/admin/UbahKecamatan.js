import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { getKecamatan, ubahKecamatan } from "../../actions/actionSystem";

export class UbahKecamatan extends Component {
  state = {
    onSubmit: false,
  };

  componentDidMount = () => {
    this.props.getKecamatan();
  };

  renderInput = ({ input, label, type, meta }) => {
    return (
      <div className="form-group">
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

  onSubmit = async (formValues) => {
    await this.props.ubahKecamatan(this.props.id, formValues);
    this.setState({
      onSubmit: true,
    });
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return <small className="text-danger">{error}</small>;
    }
  }

  contentRender = (kecamatan) => {
    return (
      <div className="card shadow mb-4 col-md-8">
        <div className="card-header py-3">
          <h4 className="m-0 font-weight-bold text-primary">
            {kecamatan.Nm_Kecamatan}
          </h4>
        </div>
        <div className="card-body">
          <form
            onSubmit={this.props.handleSubmit(this.onSubmit)}
            className="user"
          >
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th></th>
                  <th>LATITUDE</th>
                  <th>LONGITUDE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>PIN 1</td>
                  <td>
                    <Field
                      name="lat"
                      component={this.renderInput}
                      label="LATITUDE 1"
                      type="text"
                    />
                  </td>
                  <td>
                    <Field
                      name="lng"
                      component={this.renderInput}
                      label="LONGITUDE 1"
                      type="text"
                    />
                  </td>
                </tr>
                <tr>
                  <td>PIN 2</td>
                  <td>
                    <Field
                      name="lat2"
                      component={this.renderInput}
                      label="LATITUDE 2"
                      type="text"
                    />
                  </td>
                  <td>
                    <Field
                      name="lng2"
                      component={this.renderInput}
                      label="LONGITUDE 2"
                      type="text"
                    />
                  </td>
                </tr>
                <tr>
                  <td colspan="3"></td>
                </tr>
              </tbody>
            </table>

            <hr />

            <div className="row">
              <div className="col-6">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                >
                  OK
                </button>
              </div>
              <div className="col-6">
                <Link
                  to="/admin/kecamatan"
                  className="btn btn-secondary"
                  style={{ width: "100%" }}
                >
                  Batal
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };

  render() {
    if (this.state.onSubmit) {
      return <Redirect to="/admin/kecamatan" />;
    }

    const { id, listKecamatan, initialValues } = this.props;
    console.log(initialValues);
    if (!listKecamatan.kecamatan) {
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

    const kecamatan = listKecamatan.kecamatan.filter((kec) => {
      return kec.PmKecamatanID === id;
    });

    return <>{this.contentRender(kecamatan[0])}</>;
  }
}

const validate = (formValue) => {
  const errors = {};
  if (!formValue.lat) {
    errors.lat = "Tatitude 1 Harus diisi";
  }
  if (!formValue.lat2) {
    errors.lat2 = "Tatitude 2 Harus diisi";
  }
  if (!formValue.lng) {
    errors.lng = "Longitude 1 Harus diisi";
  }
  if (!formValue.lng2) {
    errors.lng2 = "Longitude 2 Harus diisi";
  }

  return errors;
};

const stateToProps = (state, myprops) => {
  return {
    listKecamatan: state.listKecamatan,
    initialValues: state.listKecamatan.kecamatan
      ? state.listKecamatan.kecamatan.find((us) => {
          if (us.PmKecamatanID === myprops.id) {
            return us;
          }
        })
      : "null",
  };
};

const formWrap = reduxForm({
  form: "formUbahKecamatan",
  enableReinitialize: true,
  validate,
})(UbahKecamatan);

export default connect(stateToProps, { getKecamatan, ubahKecamatan })(formWrap);
