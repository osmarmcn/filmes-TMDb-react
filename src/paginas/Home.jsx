
import { useEffect, useState } from "react"
import MovieCard from "../componentes/MovieCard"

import "../layout/moviesGrid.css"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY


const Home = () =>{
    //console.log(moviesURL,apiKey)
    const [topMovies,setTopMovies] = useState([])

    const getTopRatedMovies = async (url) =>{
        const resp = await fetch(url)
        const data = await resp.json()

        //console.log(data)

        setTopMovies(data.results)
    }

    useEffect(() =>{
            const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
            console.log(topRatedUrl)
            getTopRatedMovies(topRatedUrl)

    },[])

    return(
         <div className="container">
            <h2 className="title">Melhores Filmes:</h2>
            <div className="movies-container">
                {topMovies.length === 0 && <p>carregando....</p>}
                {topMovies.length > 0 && topMovies.map((movie) =>
                    <MovieCard key={movie.id} movie={movie}/>
                )}
            </div>
            
        </div>
    )
   
}

export default Home