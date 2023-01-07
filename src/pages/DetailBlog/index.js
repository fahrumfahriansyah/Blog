import React, { useEffect, useState } from 'react'
import "./style.scss"
import { Anchor, Gap } from '../../components/Atom'
import { useLocation, useNavigate } from 'react-router-dom'
import Axios from 'axios'

const DetailBlog = () => {
    const history = useNavigate()
    const location = useLocation()
    const path = location.pathname
    const lastPath = path.split('/').pop();
    console.log(lastPath)
    const [byId, setById] = useState()
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        Axios.get(`http://localhost:4000/v1/Blog/post/${lastPath}`)
            .then(res => {
                const data = res.data.data
                setById(data)
                setIsLoading(false);

            }).catch((err) => {
                setError(err)
                console.log("ini error" + err)
            })

    })
    if (error) {
        return (
            <div>
                There was an error loading the data: {error.message}
            </div>
        );
    }

    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        );
    }
    if (byId) {
        return (
            <div>
                <div className='Detail_Blog'>
                    <img src={"http://localhost:4000/" + byId.image} alt="computer"></img>
                    <div className='List_Blog'>
                        <h1>{byId.title}</h1>
                        <h3>{byId.createdAt}</h3>
                        <p>{byId.body}</p>
                    </div>
                </div>
                <Gap height={30} />
                <Anchor title="<<<Kembali>>>" onClick={() => { history("/") }} />
            </div>
        )
    }
}

export default DetailBlog
