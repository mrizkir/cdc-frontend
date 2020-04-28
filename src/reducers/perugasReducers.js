export const getGugusTugas = (state = [], action) => {

    if (action.type === "GET_GUGUS_TUGAS") {
        if (action.data) {
            return action.data.usersgugustugas
        }
        return state
    }

    return state
}
export const getPetugas = (state = [], action) => {

    if (action.type === "GET_PETUGAS") {
        return action.data.userspetugas
    }

    return state
}