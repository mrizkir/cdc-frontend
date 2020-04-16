import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const getKoordinatReducers = (state = [], action) => {

    if (action.type === "GET_KOORDINAT") {
        return action.data
    }

    return state
}

const ubahPasien = (state = "", action) => {

    if (action.type === "UBAH_PASIEN") {
        console.log(action.data)
        return action.data
    }

    return state
}



const getUser = (state = null, action) => {
    if (action.type === "GET_USER") {

        return action.data
    }

    const user = localStorage.user

    if (user) {
        return user
    }

    return state
}

const getPasien = (state = [], action) => {
    if (action.type === "GET_PASIEN") {

        return action.data
    }


    return state
}
const getDetailPasien = (state = null, action) => {
    if (action.type === "GET_DETAIL_PASIEN") {

        return action.data.user
    }


    return state
}


const loginReducer = (state = "Belum Login", action) => {

    if (action.type === "LOGIN") {

        if (action.data) {

            return action.data
        }


        return "Salah"
    }

    const status = localStorage.statusLogin

    if (status) {
        return status
    } else {
        localStorage.setItem("statusLogin", 'false')
    }


    return state
}

export default combineReducers({
    ListKoordinat: getKoordinatReducers,
    form: formReducer,
    statusLogin: loginReducer,
    user: getUser,
    pasien: getPasien,
    detailPasien: getDetailPasien
})