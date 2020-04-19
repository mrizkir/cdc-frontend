import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'



import { uploadFoto } from '../../actions'
import FieldFileInput from '../FieldFileInput'

export class ModalUploadFoto extends Component {

    state = {
        proses: 0
    }

    handleChange() {

    }

    onSubmit = async (formValues) => {
        console.log(formValues)
        this.setState({
            proses: 1
        })
        await this.props.uploadFoto(this.props.pasien.id, formValues)
        window.location.reload();


    }



    // renderInput = ({ input, meta, va }) => {
    //     return (
    //         <FieldFileInput  {...input} />
    //     )
    // }

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <small className="text-danger">{error}</small>

            )
        }
    }

    render() {

        if (this.state.proses === 1) {
            return (
                <div className="modal-dialog" role="document">


                    <div className="modal-content bg-info">

                        <h5 className=" text-light p-3 text-center">Upload Foto Pasien</h5>
                        <div className="text-center">
                            <div className="spinner-border text-light" style={{ 'width': '3rem', 'height': '3rem' }} role="status">
                                <span className="sr-only">Loading...</span>
                            </div>

                            <br></br>
                            <br></br>
                        </div>

                    </div>


                </div>
            )

        }

        return (
            <div className="modal-dialog" role="document">

                <form onSubmit={this.props.handleSubmit(this.onSubmit)} encType="multipart/form-data">
                    <div className="modal-content ">
                        <div className="modal-header bg-info text-light">
                            <h5 className="modal-title " id="exampleModalLabel">Upload Foto Pasien</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="container">

                            <div className="modal-body">
                                <Field name="foto" label="Upload Foto" type="file" component={FieldFileInput} onChange={this.handleChange} />



                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Batal</button>
                            <button type="submit" className="btn btn-info" aria-hidden="true" >Upload</button>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}



const validate = (formValue) => {
    const errors = {}
    if (formValue.foto) {
        errors.username = "Pilih Status Pasien Terlebih Dahulu."
    }


    return errors;

}



const formWrap = reduxForm({
    form: 'formUploadFoto',
    validate

})(ModalUploadFoto)

export default connect(null, { uploadFoto })(formWrap)


