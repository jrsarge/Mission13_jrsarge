import {Movie} from "../types/movie"
import { useState } from "react";

function MovieList ()
{

    const[movieData, setMovieData] = useState<Movie[]>([]);

    const fetchMovie = async () => {
        const rsp = await fetch('https://localhost:4000/movie');
        const temp = await rsp.json();
        setMovieData(temp);
    };

    fetchMovie();

    return (

        <>
        <div className="row">
            <h4>Movie List</h4>
        </div>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Director</th>
                    <th>Rating</th>
                    <th>Edited</th>
                </tr>
            </thead>
            <tbody>
                {movieData.map((f) => (
                    <tr key = {f.MovieID}>
                        <td>{f.Category}</td>
                        <td>{f.Title}</td>
                        <td>{f.Year}</td>
                        <td>{f.Director}</td>
                        <td>{f.Rating}</td>
                        <td>{f.Edited}</td>
                    </tr>

                ))};
            </tbody>
        </table>
        </>
        
    )
}

export default MovieList;