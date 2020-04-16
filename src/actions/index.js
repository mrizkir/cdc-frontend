import Api from '../axios/Api'
import { Children } from 'react'

export const getKoordinat = () => async dispatch => {
    const data = await Api.get('/koordinat')

    dispatch({
        type: "GET_KOORDINAT",
        data: data
    })
}
export const getUser = () => async dispatch => {

    const token = 'Bearer ' + localStorage.token;

    var data = null;
    if (token) {
        await Api.get('/auth/me', { headers: { Authorization: token } }).then(response => {
            data = response.data;
            localStorage.setItem("user", response.data)
        })
            .catch((error) => {
                console.log('error' + error);
            });
    }


    dispatch({
        type: "GET_USER",
        data: data
    })
}
export const getPasien = () => async dispatch => {

    const token = 'Bearer ' + localStorage.token;

    var data = null;
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

        })
            .catch((error) => {
                console.log('error ini' + error);
            });
    }


    dispatch({
        type: "GET_DETAIL_PASIEN",
        data: data
    })
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
                    dispatch(getUser())
                }



            },
            (error) => {

                localStorage.removeItem("token")
                localStorage.removeItem("statusLogin")
                dispatch({
                    type: "LOGIN",
                    data: "Gagal"
                })

            }
        );



}


export const ubahPasien = (id, formValues) => async dispatch => {
    console.log({ _method: 'PUT', ...formValues })

    const token = 'Bearer ' + localStorage.token;

    if (token) {
        await Api.post(`/setting/userspasien/${id}`, { headers: { Authorization: token }, data: { _method: 'PUT', ...formValues } })
            .then(
                (res) => {
                    console.log("berhasil")
                    console.log(res)
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

export const ceklogin = () => async dispatch => {
    const response = await Api.post('/login.php')

    dispatch({
        type: "LOGIN",
        data: response.data
    })

}

