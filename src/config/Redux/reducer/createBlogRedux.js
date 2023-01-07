
const initialState = {
    form: {
        title: "",
        body: "",
        image: ""
    },
    imagePreview: null
}


const createBlogRedux = (state = initialState, action) => {

    if (action.type === "formData") {
        return {
            ...state,
            form: {
                ...state.form,
                [action.formType]: action.formValue
            }
        }
    }
    if (action.type === "imagePreview") {
        return {
            ...state,
            imagePreview: action.payload
        }
    }
    return state
}

export default createBlogRedux