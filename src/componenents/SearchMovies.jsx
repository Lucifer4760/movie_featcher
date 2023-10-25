import { useState } from "react";

import ActionAreaCard from "./MaterialCard";
import { Grid } from "@mui/material";
import "./styles.css";
import Button from "./Button";

export default function SearchMovies(){

    const [movieName, setMovieName] = useState("");
    const [movies, setMovies] = useState([]);
    const key = "87d4b2a3008e4db585a5ebc1b8975625";

    function fetchMovies(event){
        event.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=${key}&include_adult=false&language=en-US&page=1`;
        
        fetch(url)
        .then(res => res.json())
        .then(data => setMovies(data.results));
        
    }
    function handleInput(event){
        console.log(event.target.value);
        setMovieName(event.target.value);
    }

    //https://www.themoviedb.org/t/p/w220_and_h330_face/

    return(
        <div>

            <div>
                <Button text = "Login" size = "large"/>
                <Button text = "Signup" size = "small"/>
            </div>

            <h3>Enter the movie name</h3>
            <form classname = "form" onSubmit={fetchMovies}>
                <input className="input" type = "text" name = "query" placeholder="Search" value = {movieName} onChange={handleInput} />
                <button classname = "button" type="submit">Search</button>
            </form>

            <br/>
            <Grid container columnGap={4} rowGap={2}>
                {movies.map(movie =>
                    <ActionAreaCard data = {movie} key = {movie.id}></ActionAreaCard>
                    // <MovieCard data = {movie} key = {movie.id}/>
                )}
            </Grid>

        </div>
    )
}