import React, { Component } from "react";
import "./Movie.css";

class Movie extends Component {
  render() {  /* component need to show something*/

    console.log('props>>',this.props)
    return (
        <div>
            <MoviePoster poster = {this.props.poster} />
            <h1>{this.props.title}</h1 /* JSX의 명령을 실행시키려면 {} 괄호가 있어야함!*/>
        </div>
        );
  }
}

class MoviePoster extends Component{
    render(){
        console.log('movie poster>>',this.props)
        return(
            <img src={this.props.poster} /* 부모에서 받은 props를 이용해서 출력함*//>
        )
    }
}

export default Movie;
