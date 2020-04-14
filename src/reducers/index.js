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

    return state
}


// const loginReducer = (state = false, action) => {
//     if (action.type === "LOGIN") {
//         if (action.data.access_token) {
//             return true
//         }

//     }

//     return state
// }

export default combineReducers({
    ListKoordinat: getKoordinatReducers,
    form: formReducer,
    // statusLogin: loginReducer,
    user: getUser
})