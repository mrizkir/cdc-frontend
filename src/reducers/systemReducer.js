export const getKecamatan = (state = [], action) => {

    if (action.type === "GET_KECAMATAN") {

        return action.data
    }

    return state
}
export const getDesa = (state = [], action) => {

    if (action.type === "GET_DESA") {

        return action.data
    }

    return state
}