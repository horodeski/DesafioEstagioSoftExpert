import React from 'react'
import { NavBar, SideBar } from '../components/Common';
import '../assets/styles/App.css'
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div id='app'>
            <NavBar />
            <main>
                <SideBar />
                <div className='content'>
                    <Outlet />
                </div>
            </main>
        </div>)
}


export default Layout;