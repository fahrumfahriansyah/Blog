import axios from 'axios'
export const formData = (formType, formValue) => {
    return { type: "formData", formType, formValue }
}
export const formInfo = (formType, formValue) => {
    return { type: "information", formType, formValue }
}
export const imgPreview = (payload) => {
    return { type: "imagePreview", payload }
}
//! jika sesuatu hal yang di buat tidak menyangkut setingan reducer sebainya mengunakn function biasa sajadari pada dispatch
export const postToApi = (form, setError, setSuccess, setIsLoading) => {
    setIsLoading(true)
    setError(null)
    setSuccess(null)
    const data = new FormData()
    data.append("title", form.title)
    data.append("body", form.body)
    data.append("image", form.image)
    axios.post("http://localhost:4000/v1/Blog/CreateBlog", data, {
        headers: {
            "content-type": "multipart/form-data"
        }
    }
    ).then(res => {
        setIsLoading(false)
        setSuccess("Blog berhasil dibuat!")
        console.log(res)
    })
        .catch(err => {
            setIsLoading(false)
            const error = err.response.data.data
            setError(error)
        })
}

export const updateToApi = (form, id) => {
    const data = new FormData()
    data.append("title", form.title)
    data.append("body", form.body)
    data.append("image", form.image)
    axios.put(`http://localhost:4000/v1/Blog/post/${id}`, data, {
        headers: {
            "content-type": "multipart/form-data"
        }
    }
    ).then(res => {

        console.log(res)
    })
        .catch(err => {
            console.log(err)
        })
}