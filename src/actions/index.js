import Api from '../axios/Api'


export const getKoordinat = () => async dispatch => {
    const token = 'Bearer ' + localStorage.token;

    var data = null;
    if (token) {
        await Api.post('/pasien/lokasiterakhir', { mode: 'all', id: 'all' }, { headers: { Authorization: token } }).then(response => {

            data = response.data;


            dispatch({
                type: "GET_KOORDINAT",
                data: data.lokasiterakhir
            })
        })
            .catch((error) => {

                dispatch({
                    type: "GET_KOORDINAT",
                    data: []
                })
            });
    } else {
        dispatch({
            type: "GET_KOORDINAT",
            data: []
        })
    }
}
export const getKoordinatPublic = () => async dispatch => {


    var data = null;

    await Api.post('/pasien/lokasiterakhirpublik', { mode: 'all', id: 'all' })
        .then(response => {

            data = response.data;


            dispatch({
                type: "GET_KOORDINAT",
                data: data.lokasiterakhir
            })
        })
        .catch((error) => {
            console.log(error)
            dispatch({
                type: "GET_KOORDINAT",
                data: []
            })
        });


}
export const getUser = () => async dispatch => {

    const token = 'Bearer ' + localStorage.token;

    var data = null;
    if (token) {
        await Api.get('/auth/me', { headers: { Authorization: token } }).then(response => {
            data = response.data;
            localStorage.setItem("statusLogin", "Berhasil")
        })
            .catch((error) => {
                localStorage.setItem("statusLogin", "Belum Login")
                dispatch({
                    type: "GET_USER",
                    data: "Belum Login"
                })
            });
    }


    dispatch({
        type: "GET_USER",
        data: data
    })
}
export const getPasien = () => async dispatch => {

    const token = 'Bearer ' + localStorage.token;

    var data = [];
    if (token) {
        await Api.get('/setting/userspasien', { headers: { Authorization: token } }).then(response => {
            data = response.data;

        })
            .catch((error) => {
                console.log('error' + error);
            });
    }


    dispatch({
        type: "GET_PASIEN",
        data: data
    })
}

export const getDetailPasien = (id) => async dispatch => {

    const token = 'Bearer ' + localStorage.token;

    var data = null;
    if (token) {
        await Api.get(`/setting/userspasien/${id}`, { headers: { Authorization: token } }).then(response => {
            data = response.data;
            dispatch({
                type: "GET_DETAIL_PASIEN",
                data: data
            })
        })
            .catch((error) => {
                console.log('error ini' + error);
            });
    }



}

export const getStatusPasien = (id) => async dispatch => {

    const token = 'Bearer ' + localStorage.token;

    var data = null;
    if (token) {
        await Api.get(`/setting/userspasien/${id}`, { headers: { Authorization: token } }).then(response => {
            data = response.data;
            dispatch({
                type: "GET_DETAIL_PASIEN",
                data: data
            })
        })
            .catch((error) => {
                console.log('error ini' + error);
            });
    }



}



export const login = (formValues) => async dispatch => {
    await Api.post('/auth/login', formValues)
        .then(
            (res) => {
                if (res.data.access_token) {

                    localStorage.setItem("token", res.data.access_token)
                    localStorage.setItem("statusLogin", "Berhasil")
                    dispatch({
                        type: "LOGIN",
                        data: "Berhasil"
                    })

                }

            },
            (error) => {

                localStorage.removeItem("token")
                localStorage.removeItem("statusLogin")
                dispatch({
                    type: "LOGIN",
                    data: "Salah"
                })

            }
        );



}


export const ubahPasien = (id, formValues) => async dispatch => {
    console.log({ _method: 'PUT', ...formValues })

    const token = 'Bearer ' + localStorage.token;

    if (token) {
        await Api.post(`/setting/userspasien/${id}`, { _method: 'PUT', ...formValues }, { headers: { Authorization: token } })
            .then(
                (res) => {

                },
                (error) => {
                    console.log('error ini' + error);
                    dispatch({
                        type: "UBAH_PASIEN",
                        data: "Gagal"
                    })

                }
            );

    }

}

export const ubahStatusPasien = (id, formValues) => async dispatch => {


    const token = 'Bearer ' + localStorage.token;

    if (token) {
        await Api.post(`/setting/userspasien/updatestatus/${id}`, { _method: 'PUT', ...formValues }, { headers: { Authorization: token } })
            .then(
                (res) => {

                },
                (error) => {
                    console.log('gagal update status pasien' + error);

                }
            );

    }

}


