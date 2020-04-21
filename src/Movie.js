import React, { Component } from "react";
import "./Movie.css";

class Movie extends Component {
  render() {  /* component need to show something*/
    return (
        <div>
            <h1>this is movie</h1>
        </div>
        );
  }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src='https://images-na.ssl-images-amazon.com/images/I/81EBp0vOZZL._AC_SY879_.jpg' />
        )
    }
}

export default Movie;
