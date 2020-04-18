import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


import { ubahStatusPasien } from '../../actions'

export class ModalUbahPasien extends Component {

    // state = {
    //     submit: 0
    // }

    onSubmit = async (formValues) => {

        await this.props.ubahStatusPasien(this.props.pasien.id, formValues)
        window.location.reload();
        // this.setState({
        //     submit: 1
        // })

    }

    // renderRedirect() {
    //     if (this.state.submit === 1) {
    //         return <Redirect to='/admin/pasien' />
    //     }
    // }


    renderInput = ({ input, label, avalue, statusnya }) => {


        if (`${statusnya}` !== avalue) {

            return (
                <div className="form-group">

                    <div class="input-group">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <input type="radio" aria-label={label} id={label}  {...input} value={avalue} />
                            </div>
                        </div>
                        <label type="text" htmlFor={label} disabled class="form-control" aria-label={label}  >{label}</label>
                    </div>

                </div>


            )
        }


        return (
            <div className="form-group">

                <div class="input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text bg-danger">
                            <input type="radio" aria-label={label} id={label}  {...input} value={avalue} />
                        </div>
                    </div>
                    <input type="text" disabled class="form-control" value={label} />
                </div>
            </div>


        )

    }



    render() {
        const { id, status_pasien, nama_status, name } = this.props.pasien
        return (
            <div className="modal-dialog" role="document">

                <form initialvalues={this.props.initialValues} onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <div className="modal-content ">
                        <div className="modal-header bg-danger text-light">
                            <h5 className="modal-title " id="exampleModalLabel">Ubah Status Pasien</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="container">
                            <h5 className="mt-2 text-center">Nama Pasien : {name}</h5>
                            <div className="modal-body">
                                <Field name="status_pasien" statusnya={status_pasien} component={this.renderInput} label="NEGATIF" avalue="6" />
                                <Field name="status_pasien" statusnya={status_pasien} component={this.renderInput} label="SEMBUH" avalue="5" />
                                <Field name="status_pasien" statusnya={status_pasien} component={this.renderInput} label="ORANG DALAM PEMANTAUAN" avalue="4" />
                                <Field name="status_pasien" statusnya={status_pasien} component={this.renderInput} label="PASIEN DALAM PEMANTAUAN" avalue="3" />
                                <Field name="status_pasien" statusnya={status_pasien} component={this.renderInput} label="ORANG TANPA GEJALA" avalue="2" />
                                <Field name="status_pasien" statusnya={status_pasien} component={this.renderInput} label="POSITIF" avalue="1" />
                                <Field name="status_pasien" statusnya={status_pasien} component={this.renderInput} label="MENINGGAL" avalue="0" />


                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Batal</button>
                            <button type="submit" className="btn btn-danger" aria-hidden="true" >Ubah</button>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}



const validate = (formValue) => {
    const errors = {}
    if (!formValue.status_pasien) {
        errors.username = "Pilih Status Pasien Terlebih Dahulu."
    }


    return errors;

}


const stateToProps = (state, myprops) => {

    return {
        initialValues: { 'status_pasien': myprops.pasien.status_pasien }
    }
}


const formWrap = reduxForm({
    form: 'formUbahStatusPasien',


})(ModalUbahPasien)

export default connect(stateToProps, { ubahStatusPasien })(formWrap)


