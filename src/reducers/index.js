import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const getKoordinatReducers = (state = [], action) => {

    if (action.type === "GET_KOORDINAT") {
        return action.data
    }

    return state
}

export default combineReducers({
    ListKoordinat: getKoordinatReducers,
    form: formReducer
})