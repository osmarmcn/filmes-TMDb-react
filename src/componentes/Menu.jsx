import { Link } from "react-router-dom"
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi"

import "../layout/menu.css"

const Menu = () =>{
    return(
        <div id="menu">
            <h2>
                <Link to="/">
                    <BiCameraMovie/> Filmes TMDb
                </Link>
            </h2>
           
            
            <form action="">
                <input type="text" placeholder="Procure um filme"/>
                <button type="submit" > <BiSearchAlt2/></button>
            </form>
        </div>
    )
}

export default Menu