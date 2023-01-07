import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login, Register, MainApp } from '../../pages/index'
const Index = () => {
    return (
        <Router>
            <Routes>
                {/* untuk * menysusaikan parent childrenya */}
                <Route path='*' element={<MainApp />} />
                <Route path='/Register' element={<Register />} />
                <Route path='/Login' element={<Login />} />
            </Routes>
        </Router>
    )
}

export default Index
