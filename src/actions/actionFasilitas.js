import Api from '../axios/Api'

export const getFasilitas = () => async dispatch => {

    const token = 'Bearer ' + localStorage.token;

    var data = [];
    if (token) {
        await Api.get('/dmaster/fasilitaskarantina', { headers: { Authorization: token } }).then(response => {
            data = response.data;
            dispatch({
                type: "GET_FASILITAS",
                data: data
            })
        })
            .catch((error) => {

            });
    }



}


export const hapusFasilitas = (id) => async dispatch => {


    const token = 'Bearer ' + localStorage.token;

    if (token) {
        await Api.post(`/dmaster/fasilitaskarantina/${id}`, { _method: 'DELETE' }, { headers: { Authorization: token } })
            .then(
                (res) => {

                },
                (error) => {
                    console.log(error)
                }
            );

    }

}



export const tambahFasilitas = (formValues) => async dispatch => {


    const token = 'Bearer ' + localStorage.token;

    if (token) {
        await Api.post(`/dmaster/fasilitaskarantina/store`, { ...formValues }, { headers: { Authorization: token } })
            .then(
                (res) => {

                },
                (error) => {
                    console.log(error)
                }
            );

    }

}


export const ubahFasilitas = (id, formValues) => async dispatch => {


    const token = 'Bearer ' + localStorage.token;

    if (token) {
        await Api.post(`/dmaster/fasilitaskarantina/${id}`, { _method: 'PUT', ...formValues }, { headers: { Authorization: token } })
            .then(
                (res) => {

                },
                (error) => {
                    console.log(error)
                }
            );

    }

}

