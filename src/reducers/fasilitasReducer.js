export const getFasilitas = (state = [], action) => {

    if (action.type === "GET_FASILITAS") {
        if (action.data) {
            return action.data.fasilitaskarantina
        }
        return state
    }

    return state
}