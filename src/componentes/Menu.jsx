import { useState } from "react"

import { Link, useNavigate} from "react-router-dom"
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi"

import "../layout/menu.css"

const Menu = () =>{

    const[search,setSearch] = useState("")
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        //console.log(search)

        if(!search)return
        navigate(`/search?q=${search}`)
        setSearch("")

        
    }

    return(
        <div id="menu">
            <h2>
                <Link to="/">
                    <BiCameraMovie/> Filmes TMDb
                </Link>
            </h2>
           
            
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Procure um filme"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <button type="submit" > <BiSearchAlt2/></button>
            </form>
        </div>
    )
}

export default Menu