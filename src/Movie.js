import React from "react";
import PropTypes from "prop-types"; /* 원래 React안에 있었는데 분리됨. 그래서 따로 import해야한다.*/
import "./Movie.css";
import LinesEllipsis from "react-lines-ellipsis";

function Movie({ title, poster, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie_Column">
        <MoviePoster
          poster={
            poster
          } /* 원래 this.props.poster 이었음. class를 사용하지 않기 때문에 this.props가 필요가 없어졌다.
        클래스는 안에 this 라는 키워드가 있는데 , function은 이미 props를 사용하기 때문에 따로 선언이 필요가 없다.*/
          alt={title}
        />
      </div>
      <div className="Movie_Column">
        <h1>{title}</h1>
        <div className="Movie_Genres">
          {genres.map((genre, index) => (
            <span className="Movie_Genre" key={index}>
              {genre}
            </span>
          ))}
        </div>
        <div className="Movie_Synopsis">
          <LinesEllipsis
            text={synopsis}
            maxLine="6"
            ellipsis="..."
            trimRight
            baseOn="letters"
          />
        </div>
        <br />
      </div>
    </div>
  );
}

function MoviePoster({ poster, alt }) {
  //마우스 오버하면 이미지 위에 title이 뜬다.
  //   console.log("movie poster>>", this.props);
  return (
    <img
      src={poster}
      alt={alt} /* 부모에서 받은 props를 이용해서 출력함*/
      title={alt}
      className="Movie_Poster"
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
  alt: PropTypes.string.isRequired,
};

MovieGenre.protoTypes = {
  genre: PropTypes.isRequired,
};

export default Movie;
