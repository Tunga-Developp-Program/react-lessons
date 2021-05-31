import React from "react";
const image_url = "http://image.tmdb.org/t/p/w1280/"

const MoviesCards = (props:any) => {
  return (
    <div className="movies row container">

        {
            props.movies.map((movie:any)=>{

                return(
                    <div className="card col-4">
                    <img src={`${image_url}${movie.backdrop_path}`}className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{movie.original_title}</h5>
                      <p className="card-text">
                       {movie.overview}
                      </p>
                      <a href="link" className="btn btn-success">
                       View trailer
                      </a>
                    </div>
                  </div>
                    
                )
            })

        }
 
</div>

  );
};

export default MoviesCards;
