import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const getKoordinatReducers = (state = [], action) => {

    if (action.type === "GET_KOORDINAT") {
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


const loginReducer = (state = "Belum Login", action) => {

    if (action.type === "LOGIN") {

        if (action.data) {

            return action.data
        }
        return "Salah"
    }

    return state
}

export default combineReducers({
    ListKoordinat: getKoordinatReducers,
    form: formReducer,
    statusLogin: loginReducer,
    user: getUser
})