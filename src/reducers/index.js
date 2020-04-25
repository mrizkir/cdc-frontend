import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'


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

const dataChart = () => {
    return {
        all: {
            positifAktif: 2,
            positifSembuh: 1,
            positifMeninggal: 1,
            pdpAktif: 3,
            pdpSembuh: 4,
            pdpMeninggal: 2,
            odpAktif: 6,
            odpSembuh: 4,
            odpMeninggal: 3,
        },
        jk: {
            lkpositifAktif: 2,
            lkpositifSembuh: 5,
            lkpositifMeninggal: 1,
            lkpdpAktif: 3,
            lkpdpSembuh: 4,
            lkpdpMeninggal: 2,
            lkodpAktif: 6,
            lkodpSembuh: 3,
            lkodpMeninggal: 3,
            prpositifAktif: 2,
            prpositifSembuh: 4,
            prpositifMeninggal: 1,
            prpdpAktif: 5,
            prpdpSembuh: 4,
            prpdpMeninggal: 2,
            prodpAktif: 6,
            prodpSembuh: 6,
            prodpMeninggal: 2,
        },
        gd: {
            ApositifAktif: 2,
            ApositifSembuh: 5,
            ApositifMeninggal: 1,
            ApdpAktif: 6,
            ApdpSembuh: 4,
            ApdpMeninggal: 3,
            AodpAktif: 6,
            AodpSembuh: 3,
            AodpMeninggal: 5,

            BpositifAktif: 2,
            BpositifSembuh: 5,
            BpositifMeninggal: 1,
            BpdpAktif: 3,
            BpdpSembuh: 4,
            BpdpMeninggal: 4,
            BodpAktif: 6,
            BodpSembuh: 7,
            BodpMeninggal: 3,

            OpositifAktif: 2,
            OpositifSembuh: 1,
            OpositifMeninggal: 1,
            OpdpAktif: 3,
            OpdpSembuh: 1,
            OpdpMeninggal: 2,
            OodpAktif: 6,
            OodpSembuh: 3,
            OodpMeninggal: 3,

            ABpositifAktif: 2,
            ABpositifSembuh: 1,
            ABpositifMeninggal: 1,
            ABpdpAktif: 3,
            ABpdpSembuh: 4,
            ABpdpMeninggal: 2,
            ABodpAktif: 2,
            ABodpSembuh: 6,
            ABodpMeninggal: 1,

        },
    }

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
    dataChart: dataChart
})