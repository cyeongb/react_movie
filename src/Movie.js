import React from "react";
import PropTypes from "prop-types"; /* 원래 React안에 있었는데 분리됨. 그래서 따로 import해야한다.*/
import "./Movie.css";

function Movie({ title, poster }) {
  return (
    <div>
      <MoviePoster
        poster={
          poster
        } /* 원래 this.props.poster 이었음. class를 사용하지 않기 때문에 this.props가 필요가 없어졌다.
        클래스는 안에 this 라는 키워드가 있는데 , function은 이미 props를 사용하기 때문에 따로 선언이 필요가 없다.*/
      />
      <h1>{title}</h1 /* JSX의 명령을 실행시키려면 {} 괄호가 있어야함!*/>
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

Movie.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
};

export default Movie;
