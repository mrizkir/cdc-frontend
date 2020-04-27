import Api from '../axios/Api'

export const getGugusTugas = () => async dispatch => {

    const token = 'Bearer ' + localStorage.token;

    var data = [];
    if (token) {
        await Api.get('/setting/usersgugustugas', { headers: { Authorization: token } }).then(response => {
            data = response.data;

        })
            .catch((error) => {

            });
    }


    dispatch({
        type: "GET_GUGUS_TUGAS",
        data: data
    })
}


export const tambahGugusTugas = (formValues) => async dispatch => {


    const token = 'Bearer ' + localStorage.token;

    if (token) {
        await Api.post(`/setting/usersgugustugas/store`, { ...formValues }, { headers: { Authorization: token } })
            .then(
                (res) => {

                },
                (error) => {
                    console.log(error)
                }
            );

    }

}

export const hapusGugusTugas = (id) => async dispatch => {


    const token = 'Bearer ' + localStorage.token;

    if (token) {
        await Api.post(`/setting/usersgugustugas/${id}`, { _method: 'DELETE' }, { headers: { Authorization: token } })
            .then(
                (res) => {

                },
                (error) => {
                    console.log(error)
                }
            );

    }

}

export const ubahGugusTugas = (id, formValues) => async dispatch => {


    const token = 'Bearer ' + localStorage.token;

    if (token) {
        await Api.post(`/setting/usersgugustugas/${id}`, { _method: 'PUT', ...formValues }, { headers: { Authorization: token } })
            .then(
                (res) => {

                },
                (error) => {
                    console.log(error)
                }
            );

    }

}
