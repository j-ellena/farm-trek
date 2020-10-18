import React from 'react'
import { Link } from 'react-router-dom'
import logo from 'src/logo.png'

const Home = () => {

    return (
        <div className='home'>
            <Link to='/lots'>Lots</Link>
            <code>Farm Trek</code>
            <img src={logo} className='logo' alt='logo' />
        </div>
    )
}

export default Home
