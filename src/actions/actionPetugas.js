import Api from '../axios/Api'

export const getPetugas = () => async dispatch => {

    const token = 'Bearer ' + localStorage.token;

    var data = [];
    if (token) {
        await Api.get('/setting/userspetugas', { headers: { Authorization: token } }).then(response => {
            data = response.data;

        })
            .catch((error) => {

            });
    }


    dispatch({
        type: "GET_PETUGAS",
        data: data
    })
}


export const tambahPetugas = (formValues) => async dispatch => {


    const token = 'Bearer ' + localStorage.token;

    if (token) {
        await Api.post(`/setting/userspetugas/store`, { ...formValues }, { headers: { Authorization: token } })
            .then(
                (res) => {

                },
                (error) => {
                    console.log(error)
                }
            );

    }

}

export const hapusPetugas = (id) => async dispatch => {


    const token = 'Bearer ' + localStorage.token;

    if (token) {
        await Api.post(`/setting/userspetugas/${id}`, { _method: 'DELETE' }, { headers: { Authorization: token } })
            .then(
                (res) => {

                },
                (error) => {
                    console.log(error)
                }
            );

    }

}

export const ubahPetugas = (id, formValues) => async dispatch => {


    const token = 'Bearer ' + localStorage.token;

    if (token) {
        await Api.post(`/setting/userspetugas/${id}`, { _method: 'PUT', ...formValues }, { headers: { Authorization: token } })
            .then(
                (res) => {

                },
                (error) => {
                    console.log(error)
                }
            );

    }

}
