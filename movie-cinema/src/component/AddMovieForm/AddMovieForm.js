import React, { useState } from "react";
import "./AddMovieForm.css";

const AddMovieForm = ({onAddMovie}) => {
    const [formData, setFormData] = useState ({
        title: "",
        year: "",
        image: "",
        genre: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddMovie(formData);
    };

    return (
        <div className="container">
            <section className="form">
                <div className="form-left">
                    <img 
                    src="https://picsum.photos/seed/picsum/200/300" 
                    alt="img-form" 
                    className="form-image"/>
                </div>
                <div className="form-right">
                    <h1 className="form-title">Add Movie</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-inputgroup">
                            <label htmlFor="title" className="form-label">title</label>
                            <input 
                            type="text"
                            name="title"
                            id="title"
                            className="form-input"
                            onChange={handleChange} />
                        </div>
                        <div className="form-inputgroup">
                            <label htmlFor="genre" className="form-label" >genre</label>
                            <select name="genre" id="genre" onChange={handleChange}>
                                <option value="action">Action</option>
                                <option value="horor">horor</option>
                                <option value="comedy">comedy</option>
                                <option value="freak">freak</option>
                                <option value="absurd">absurd</option>
                                <option value="gaje">gaje</option>
                            </select>
                        </div>
                        <div className="form-inputgroup">
                            <label htmlFor="year" className="form-label">Year</label>
                            <input 
                            type="number"
                            name="year"
                            id="year"
                            className="form-input"
                            onChange={handleChange} />
                        </div>
                        <div className="form-inputgroup">
                            <label htmlFor="poster" className="form-label">image</label>
                            <input type="text"
                            name="poster"
                            id="poster"
                            className="form-input"
                            onChange={handleChange} />
                        </div>
                        <button className="form-button">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AddMovieForm;