import { Outlet} from "react-router-dom";

import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"

function Layout(){
    return(
        <>
<Navbar></Navbar>
<Outlet></Outlet>
<Footer></Footer>
</>
    )
}

export default Layout