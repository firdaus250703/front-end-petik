import React from "react";
import Movie from "../Movie/Movie.js";
import "./Movies.css";

const Movies = () => {
    const datas = [
        {
            title:"judul film 1",
            year:2021,
            genre:"comedy", 
            poster:"https://picsum.photos/seed/picsum/200/300",
        },
        {
            title:"judul film 2",
            year:2022,
            genre:"comedy", 
            poster:"https://picsum.photos/id/237/200/300",
        },
        {
            title:"judul film 3",
            year:2023,
            genre:"comedy", 
            poster:"https://picsum.photos/200/300?grayscale",
        },
        {
            title:"judul film 4",
            year:2024,
            genre:"comedy", 
            poster:"https://picsum.photos/200/300/?blur",
        },
        {
            title:"judul film 5",
            year:2025,
            genre:"comedy", 
            poster:"https://picsum.photos/id/870/200/300?grayscale&blur=2",
        },
        {
            title:"judul film 6",
            year:2026,
            genre:"comedy", 
            poster:"https://picsum.photos/id/237/200/300",
        },
        {
            title:"judul film 7",
            year:2027,
            genre:"comedy", 
            poster:"https://picsum.photos/seed/picsum/200/300",
        },

    ]
    return (
        <div>
            <h2>Latest Movies</h2>
            <div class="movies-container">
                {
                    datas.map((data) => {
                        return (
                            <Movie 
                             title={data.title}
                             year={data.year} 
                             genre={data.genre}
                             poster={data.poster}/>
                        );
                    })
                }
                
            </div>
        </div>
    );
};

export default Movies;