import React, { useState } from 'react'
import "./style.scss"
import { Button } from '../../Atom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Blog = ({ image, title, body, create, width, height, _id, ...rest }) => {
    const history = useNavigate()
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const deleteFunc = () => {
        setError(false)
        setIsLoading(true)
        axios.delete(`http://localhost:4000/v1/Blog/post/${_id}`)
            .then(response => {
                setIsLoading(false)
                console.log(response.data);
                window.location.reload();
            })
            .catch(error => {
                setIsLoading(false)
                setError(true)
                console.log(error);
            });
    }
    if (error) {
        return (<div>
            <p>errorrr</p>
        </div>)
    }

    if (isLoading) {
        return (<div>
            <p>.....Loading</p>
        </div>)
    }

    return (
        <div className='Blog'>
            <img src={image} alt="computer" style={{ width, height }}></img>
            <div className='Blog_text' id='Blog_text'>
                <h1>{title}</h1>
                <h4>{create}</h4>
                <p>{body}</p>
                <div className='Edit_Delete'>
                    <Button id="edit" Btn="Edit" onClick={() => { history(`/CreateBlog/${_id}`) }} {...rest} />
                    <Button id="delete" Btn="delete" onClick={() => { deleteFunc() }} {...rest} />
                </div>
                <Button Btn="Detail Blog" onClick={() => { history(`/DetailBlog/${_id}`) }} {...rest} />
            </div>
        </div>
    )
}

export default Blog
