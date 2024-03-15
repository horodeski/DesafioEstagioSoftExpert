import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Cart, NavBar, SideBar } from "../components/Common";
import "../assets/styles/App.css";

function Layout() {
    const { isOpenModalCart} = useSelector((state) => state.uiReducer);

    return (
        <div id="app">
            <NavBar />
            <main>
                <SideBar />
                <div className="content">
                    <Outlet />
                </div>
            </main>
            {isOpenModalCart && <Cart />}
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
    );
}

export default Layout;