import React from 'react'
import { Cart, Favorite, NavBar, SideBar } from '../components/Common';
import '../assets/styles/App.css'
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

function Layout() {
    const { isOpenModalCart, isOpenModalFavorite } = useSelector(state => state.uiReducer)

    return (
        <div id='app'>
            <NavBar />
            <main>
                <SideBar />
                <div className='content'>
                    <Outlet />
                </div>
            </main>
            {
                isOpenModalCart &&
                <Cart />
            }
            {
                isOpenModalFavorite && 
                <Favorite />
            }
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
                theme="dark"
                transition:Slide
            />
        </div>
    )
}


export default Layout;