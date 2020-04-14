import Api from '../axios/Api'

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
                console.log('error 3 ' + error);
            });
    }


    dispatch({
        type: "GET_USER",
        data: data
    })
}



export const login = (formValues) => async dispatch => {
    await Api.post('/auth/login', formValues)
        .then(
            (res) => {
                if (res.data.access_token) {

                    localStorage.setItem("token", res.data.access_token)
                    dispatch({
                        type: "LOGIN",
                        data: "Berhasil"
                    })
                    dispatch(getUser())
                }



            },
            (error) => {

                localStorage.removeItem("token")
                dispatch({
                    type: "LOGIN",
                    data: "Gagal"
                })

            }
        );



}

export const ceklogin = () => async dispatch => {
    const response = await Api.post('/login.php')

    dispatch({
        type: "LOGIN",
        data: response.data
    })

}

