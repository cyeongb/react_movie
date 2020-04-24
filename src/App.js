/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  state() {}

  /* 컴포넌트가 did mount 할 때 URL을 FETCH 할 것임.*/
  /* didmount 함수가 크면 좋지않다. 왜냐면 이 함수로 많은 function을 불러오기때문에
   한군데에 몰아있는것 보다는 작은 function들로 흩어져 있는게 좋다.  */
  componentDidMount() {
    this._getMovies(); //did mount 하면 getMovies 를 부른다.
  }

  /* function 에 '_' 언더바 쓰는 이유
  리액트에는 func가 아주 많아서 한마디로 리액트 자체 func와 구별하려고 언더바를 쓴다고 함 */
  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      console.log("movie >>", movie);
      return (
        <Movie
          title={movie.title_english}
          poster={movie.medium_cover_image}
          genres={movie.genres}
          synopsis={movie.synopsis}
          key={
            movie.id
          } /* 컴포넌트에 index를 key로 사용하면 느리다. 그래서 id값을 가져와서 key로 사용.*/
        />
      );
    });
    return movies;
  };

  _getMovies = async () => {
    const movies = await this._callApi(); /*await는 callApi()가  끝나기를 기다리기를 기다린다. 그리고 성공하든 실패하든 작업이 완료되면 그 다음줄로 넘어간다.
    그리고 callApi()가 return하는 value값을 movies라는 변수에 담는다.*/
    /* this._callApi() =  json.data.movies 와 같다.*/

    this.setState({
      movies, //movies : movies
    });
  };

  _callApi = () => {
    return (
      fetch(
        "https://yts.mx/api/v2/list_movies.json?sort_by=download_count"
      ) /* fetch  promise*/
        /* .then() 은 위의(fetch)작업이 완료가 되면  then을 부른다.(call) 그리고 에러가나면 .catch()가 잡는다. */
        /* then 은 하나의 attribute만 보여준다. 그것은 fetch 의 결과물인데 그걸 지금은 response에 담았음*/
        /* 지금 response 는 바이트 코드의 형태로 되어있기 때문에 json으로 파싱 작업이 필요하다.*/
        .then((response) => response.json())
        .then((json) => json.data.movies)
        .catch((err) => console.log("에러>>>", err))
    );
  };

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : " L o a d i n g . . ."}
      </div>
    );
  }
}

export default App;
