import React from 'react'
import UserDashBoard from '../DashBoard/UserDashBoard'
import Orders from './Orders'
import Menu from '../components/Menu'
import Read from '../components/Read'
export default function Park() {
    return (
        <div>
            <UserDashBoard />
            <Menu />
            <Orders />
            <Read />

        </div>
    )
}

