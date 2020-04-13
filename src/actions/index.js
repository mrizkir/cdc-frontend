import Api from '../axios/Api'

export const getKoordinat = () => async dispatch => {
    const data = await Api.get('/koordinat.json')

    dispatch({
        type: "GET_KOORDINAT",
        data: data
    })
}

export const login = (formValues) => async dispatch => {
    Api.post('/auth/login/', formValues)


}

