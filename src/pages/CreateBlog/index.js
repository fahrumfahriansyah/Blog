
import "./style.scss"
import { Button, Inputt, TextArea, Upload, Gap, Anchor } from "../../components/Atom"
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { formData, imgPreview, postToApi, updateToApi } from '../../config/Redux/action/createBlogRedux'
import Axios from 'axios'

import { useState } from "react"
const CreateBlog = () => {
    const { form, imagePreview } = useSelector(state => state.createBlogRedux)
    const { title, body } = form
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const dispacth = useDispatch()
    const history = useNavigate()
    let BtnUpdate;

    const { id } = useParams();
    if (id) {
        BtnUpdate = "Update"
        Axios.get(`http://localhost:4000/v1/Blog/post/${id}`)
            .then((res) => {
                const data = res.data.data
                dispacth(formData("title", data.title))
                dispacth(formData("body", data.body))
                dispacth(formData("image", data.image))
                dispacth(imgPreview(`http://localhost:4000/${data.image}`))

            })
            .catch((err) => { console.log(err) })

    } else {
        BtnUpdate = "Upload"

    }
    const Submit = () => {
        if (!id) {
            postToApi(form, setError, setSuccess, setIsLoading)
        } else {
            console.log(form)
            updateToApi(form, id, setError, setSuccess, setIsLoading)
        }
    }



    const ImageValue = (e) => {
        let file = e.target.files[0]
        dispacth(formData("image", file))
        //! untuk mendapatkan data
        dispacth(imgPreview(URL.createObjectURL(file)))
    }


    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (error) {
        console.log(error)
        return (<div className='error_Create' >
            <p>Error!</p>
            {error.map(err => <li key={err.value}>{err.param}:{err.value}<br></br> {err.msg}</li>)}
        </div>)
    }
    if (success) {
        console.log(success)
        return <p>Blog berhasil dibuat!</p>;
    }

    return (
        <div className='Create_Blog'>
            <div className='Create_Header'>
                <h1>{BtnUpdate} Blog</h1>
            </div>
            <Gap height={10} />
            <div className='Create_Upload'>
                <Anchor title=">>>Kembali<<<" onClick={() => { history("/") }} />
                <Inputt Title={BtnUpdate} width={60 + "%"} placeholder="masukan text " defaultValue={title} onChange={(e) => dispacth(formData("title", e.target.value))} />

                <Gap height={10} />
                <Upload width={300} onChange={(e) => ImageValue(e)} img={imagePreview} />
                <TextArea width={100 + "%"} height={150 + "px"} defaultValue={body}
                    onChange={(e) => dispacth(formData("body", e.target.value))} />
            </div>
            <Gap height={10} />
            <Button width={150 + "px"} Btn={BtnUpdate} onClick={Submit} />
            <Gap height={20} />

        </div>
    )
}

export default CreateBlog
