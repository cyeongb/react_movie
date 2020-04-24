import React from "react";
import PropTypes from "prop-types"; /* 원래 React안에 있었는데 분리됨. 그래서 따로 import해야한다.*/
import "./Movie.css";

function Movie({ title, poster, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie_Columns">
        <MoviePoster
          poster={
            poster
          } /* 원래 this.props.poster 이었음. class를 사용하지 않기 때문에 this.props가 필요가 없어졌다.
        클래스는 안에 this 라는 키워드가 있는데 , function은 이미 props를 사용하기 때문에 따로 선언이 필요가 없다.*/
        />
      </div>
      <div className="Movie_Columns">
        <h2>{title}</h2>
        <div className="Movie_Genres">
          {genres.map((genre, index) => (
            <MovieGenre genre={genre} index={index} />
          ))}
        </div>
        <p className="Movie_Synopsis">{synopsis}</p>
      </div>
    </div>
  );
}

function MoviePoster({ poster }) {
  //   console.log("movie poster>>", this.props);
  return (
    <img
      src={poster}
      alt="Movie Poster" /* 부모에서 받은 props를 이용해서 출력함*/
    />
  );
}

function MovieGenre({ genre }) {
  return <span className="Movie_Genre">{genre}</span>;
}

Movie.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
};

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
};

MovieGenre.protoTypes = {
  genre: PropTypes.isRequired,
};

export default Movie;
