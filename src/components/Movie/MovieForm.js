import React, { useState } from 'react';

const MovieForm = ({ addMovie }) => {
    const [movie, setMovie] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setMovie({ ...movie, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const isValid = validate();
        if (isValid) {
            addMovie(movie);
        }
    }

    const validate = () => {
        const allErrors = {};
        let isValid = true;
        if (!movie.title || movie.title === "") {
            allErrors.title = "Please enter title";
            isValid = false;
        }
        if (!movie.subtitle || movie.subtitle === "") {
            allErrors.subtitle = "Please enter subtitle";
            isValid = false;
        }
        if (!movie.description || movie.description === "") {
            allErrors.description = "Please enter description";
            isValid = false;
        }
        if (!movie.imageUrl || movie.imageUrl === "") {
            allErrors.imageUrl = "Please enter image url";
            isValid = false;
        }

        setErrors(allErrors);
        return isValid;
    }

    return <div className="movie-form">Add new movie
        <form onSubmit={handleSubmit}>
            <label>Title: <input name="title" type="text" value={movie.title} onChange={handleChange} /></label>
            {errors.title && <div>{errors.title}</div>}
            <label>Subtitle: <input name="subtitle" type="text" value={movie.subtitle} onChange={handleChange} /></label>
            {errors.subtitle && <div>{errors.subtitle}</div>}
            <label>Description: <input name="description" type="text" value={movie.description} onChange={handleChange} /></label>
            {errors.description && <div>{errors.description}</div>}
            <label>Image url: <input name="imageUrl" type="text" value={movie.imageUrl} onChange={handleChange} /></label>
            {errors.imageUrl && <div>{errors.imageUrl}</div>}
            <button>Save</button>
        </form>
    </div>
}

export default MovieForm;