import React, { useEffect, useState } from 'react'
import '../MainApp/style.scss'
import "./style.scss"
import { Blog } from '../../components/Molekul/index'
import { Button, Gap } from "../../components/Atom//index"
// untuk berpindah halaman
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { homeActionRedux } from '../../config/Redux/action'
const Home = () => {
    const history = useNavigate()
    const { pages } = useSelector(store => store.homeRedux)
    return (
        <div className="Main_Home" >
            <div className='Main_Button'>
                {/* lihat history di pangiilan  */}
                <Button Btn="CreateBlog" width={200} onClick={() => { history("/CreateBlog") }} />
            </div>
            <Gap />
            <p>{pages.page}/{pages.toPage}</p>
            <GetData />

        </div>
    )
}

const GetData = () => {

    const { getAll, pages } = useSelector(store => store.homeRedux)
    const dispacth = useDispatch()
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [num, setNum] = useState(1)
    // !di dapat dari nama setUp redux
    const next = () => {
        setNum(num === pages.toPage ? pages.toPage : num + 1)
    }
    const previous = () => {
        setNum(num <= 1 ? 1 : num - 1)
    }
    useEffect(() => {
        dispacth(homeActionRedux(setLoading, setError, num))
        //!deklrasi num sangat penting
    }, [dispacth, num]);  // Only run the effect once

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div>
            <div className='Main_Blog'>
                {getAll.map((res) => {
                    return (
                        <div key={res._id} className="Main_">
                            <Blog
                                width={200}
                                key={res._id}
                                image={`http://localhost:4000/${res.image}`}
                                title={res.title}
                                create={res.updatedAt}
                                body={res.body}
                                _id={res._id}
                            />
                        </div>
                    );
                })}
            </div>

            <div className='Button_list'>
                <Button Btn="Next" width={200} onClick={next} />
                <Button Btn="Previous   " width={200} onClick={previous} />
            </div>
            <Gap height={5} />
            <p>{pages.page}/{pages.toPage}</p>

        </div>
    )

};

export default Home
