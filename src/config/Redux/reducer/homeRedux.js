
const initialState = {
    data: [],
    nama: "fahri",
    pages: {
        page: 1,
        toPage: 1
    }
}

const homeRedux = (state = initialState, action) => {
    if (action.type === "getAll") {
        return {
            ...state,
            //! jika inginpraktis
            //? data all ini harus sama dengan const 
            //?   const { dataALL } = useSelector(store => store) 
            getAll: action.payload
        }
    }
    if (action.type === "isName") {
        return {
            ...state,
            nama: "fahriscuaks"
        }
    }
    if (action.type === "pages") {
        return {
            ...state,
            pages: action.payload
        }
    }
    return state
};
export default homeRedux