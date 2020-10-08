import React from 'react'
import { NavLink,Link } from 'react-router-dom'

export default function DashBoard() {
    return (
        <div className='navbar navbar-default'>

            <NavLink to='/home'>
                <button className='btn btn-group'>Home</button>
            </NavLink>
            <Link to='/products'>
                <button className='btn btn-group'>Products</button>
            </Link>
            <Link to='/add'>
                <button className='btn btn-group'>Add Product</button>
            </Link>
        </div>
    )
}
