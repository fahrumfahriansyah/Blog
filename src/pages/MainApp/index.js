import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer, Gap, Header } from '../../components'
import { Home, CreateBlog, DetailBlog } from "../Main"
const MainApp = () => {
    return (
        <div className='test'>
            <Header />
            <Gap height={100} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/CreateBlog/:id' element={<CreateBlog />} />
                <Route path='/CreateBlog' element={<CreateBlog />} />
                <Route path='/DetailBlog/:id' element={<DetailBlog />} />
            </Routes>
            <Gap height={100} />
            <Footer />
        </div>
    )
}

export default MainApp
