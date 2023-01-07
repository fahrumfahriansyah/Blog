
const initialState = {
    data: [],
    nama: "fahri"
}

const globalRedux = (state = initialState, action) => {
    if (action.type === "isName") {
        return {
            ...state,
            nama: "fahriGlobalRedux"
        }
    }
    return state
};
export default globalRedux