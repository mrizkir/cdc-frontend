import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { getGugusTugas, getPetugas } from './perugasReducers'
import { dataChart } from './chartReducer'


const getKoordinatReducers = (state = [], action) => {

    if (action.type === "GET_KOORDINAT") {
        return action.data
    }

    return state
}
const getKoordinatAdminReducers = (state = [], action) => {

    if (action.type === "GET_KOORDINAT_ADMIN") {
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
const getRiwayat = (state = null, action) => {
    if (action.type === "GET_RIWAYAT") {
        return action.data.history
    }
    return state
}
const getRiwayatLokasi = (state = null, action) => {
    if (action.type === "GET_RIWAYAT_LOKASI") {
        return action.data.lokasi
    }
    return state
}

const hitung = (state = null, action) => {
    if (action.type === "HITUNG") {

        return action.data
    }


    return state
}


const loginReducer = (state = "Belum Login", action) => {

    if (action.type === "LOGIN") {

        if (action.data) {

            return action.data
        }


        return state
    }

    const status = localStorage.statusLogin

    if (status) {
        return status
    }


    return state
}


export default combineReducers({
    ListKoordinat: getKoordinatReducers,
    ListKoordinatAdmin: getKoordinatAdminReducers,
    form: formReducer,
    statusLogin: loginReducer,
    user: getUser,
    pasien: getPasien,
    detailPasien: getDetailPasien,
    riwayat: getRiwayat,
    riwayatLokasi: getRiwayatLokasi,
    jumlah: hitung,
    dataChart: dataChart,

    listGugusTugas: getGugusTugas,
    listPetugas: getPetugas
})