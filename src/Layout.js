import { Outlet,Link, BrowserRouter, Routes, Route } from "react-router-dom";

const Layout = () => {
    return (
        <div style={{width:"100%",height:"75px",background:"skyblue",zIndex:"9"}}>
            <div>
                <span>
                    <Link to="/">home</Link>
                </span>
                <span>
                    <Link to="/category">category</Link>
                </span>
                {/* <span>
                    <Link to="/Product">Product</Link>
                </span> */}
                <span>
                    <Link to="/nopage">nopage</Link>
                </span>
                <span>
                    <Link to="/cart">cart</Link>
                </span>
            </div>
            <Outlet/>
        </div>
    )
}

export default Layout