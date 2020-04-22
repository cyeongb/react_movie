import React, { Component } from "react";
import PropTypes from "prop-types"; /* 원래 React안에 있었는데 분리됨. 그래서 따로 import해야한다.*/
import "./Movie.css";

class Movie extends Component {
  static propTypes = {
    /* 타입 설정*/

    title:
      PropTypes.string
        .isRequired /* isRequired를 하면 필수요건 이기때문에 null일경우 에러가 보여진다.*/,
    poster: PropTypes.string.isRequired,
  };

  render() {
    /* component need to show something*/

    console.log("props>>", this.props);
    return (
      <div>
        <MoviePoster poster={this.props.poster} />
        <h1>
          {this.props.title}
        </h1 /* JSX의 명령을 실행시키려면 {} 괄호가 있어야함!*/>
      </div>
    );
  }
}

class MoviePoster extends Component {
  static propTypes = {
    poster: PropTypes.string.isRequired,
  };

  render() {
    console.log("movie poster>>", this.props);
    return (
      <img
        src={this.props.poster}
        alt="Movie Poster" /* 부모에서 받은 props를 이용해서 출력함*/
      />
    );
  }
}

export default Movie;
