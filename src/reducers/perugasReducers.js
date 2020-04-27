export const getGugusTugas = (state = [], action) => {

    if (action.type === "GET_GUGUS_TUGAS") {
        return action.data.users
    }

    return state
}
export const getPetugas = (state = [], action) => {

    if (action.type === "GET_PETUGAS") {
        return action.data.userspetugas
    }

    return state
}