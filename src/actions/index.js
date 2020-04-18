import Api from '../axios/Api'


export const getKoordinat = () => async dispatch => {
    const token = 'Bearer ' + localStorage.token;

    var data = null;
    if (token) {
        await Api.post('/pasien/lokasiterakhir', { mode: 'all', id: 'all' }, { headers: { Authorization: token } }).then(async response => {

            data = response.data;


            await dispatch({
                type: "GET_KOORDINAT",
                data: data.lokasiterakhir
            })

            dispatch(hitungJumlah(data.lokasiterakhir))
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
        .then(async response => {

            data = response.data;


            await dispatch({
                type: "GET_KOORDINAT",
                data: data.lokasiterakhir
            })

            dispatch(hitungJumlah(data.lokasiterakhir))

        })
        .catch((error) => {

            dispatch({
                type: "GET_KOORDINAT",
                data: []
            })
        });


}

export const hitungJumlah = (data) => async dispatch => {

    var jumlah = {
        total: 0,
        meninggal: 0,
        positif: 0,
        otg: 0,
        pdp: 0,
        odp: 0,
        sembuh: 0,
        negatif: 0,
        kecamatan: {
            total: [],
            meninggal: [],
            positif: [],
            otg: [],
            pdp: [],
            odp: [],
            sembuh: [],
            negatif: []
        }
    }



    for (var i = 0; i < data.length; i++) {
        if (data[i].status_pasien === 0) {
            jumlah.meninggal++
            jumlah.kecamatan.meninggal.push(data[i].Nm_Kecamatan)
        } else if (data[i].status_pasien === 1) {
            jumlah.positif++
            jumlah.kecamatan.positif.push(data[i].Nm_Kecamatan)

        } else if (data[i].status_pasien === 2) {
            jumlah.otg++
            jumlah.kecamatan.otg.push(data[i].Nm_Kecamatan)

        } else if (data[i].status_pasien === 3) {
            jumlah.pdp++
            jumlah.kecamatan.pdp.push(data[i].Nm_Kecamatan)

        } else if (data[i].status_pasien === 4) {
            jumlah.odp++
            jumlah.kecamatan.odp.push(data[i].Nm_Kecamatan)

        } else if (data[i].status_pasien === 5) {
            jumlah.sembuh++
            jumlah.kecamatan.sembuh.push(data[i].Nm_Kecamatan)

        } else if (data[i].status_pasien === 6) {
            jumlah.negatif++
            jumlah.kecamatan.negatif.push(data[i].Nm_Kecamatan)
        }

        jumlah.total++
    }


    dispatch({
        type: "HITUNG",
        data: jumlah
    })
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


    const token = 'Bearer ' + localStorage.token;

    if (token) {
        await Api.post(`/setting/userspasien/${id}`, { _method: 'PUT', ...formValues }, { headers: { Authorization: token } })
            .then(
                (res) => {

                },
                (error) => {

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

                }
            );

    }

}


