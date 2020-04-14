import Api from '../axios/Api'

export const getKoordinat = () => async dispatch => {
    const data = await Api.get('/koordinat.json')

    dispatch({
        type: "GET_KOORDINAT",
        data: data
    })
}
export const getUser = () => async dispatch => {

    const token = localStorage.token;
    const data = null;
    if (token) {
        data = await Api.get('/auth/me', {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
        })
    }


    dispatch({
        type: "GET_USER",
        data: data
    })
}

export const login = (formValues) => async dispatch => {
    const response = await Api.post('/auth/login', formValues)

    if (response.data.access_token) {
        localStorage.setItem("token", response.data.access_token)
    } else {
        localStorage.removeItem("token")
    }

    // dispatch({
    //     type: "LOGIN",
    //     data: response.data
    // })

}

export const ceklogin = () => async dispatch => {
    const response = await Api.post('/login.php')

    dispatch({
        type: "LOGIN",
        data: response.data
    })

}

