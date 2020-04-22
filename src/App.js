import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";


const movies=[
  {
    title:'FrozenⅡ',
    poster :'https://www.slashfilm.com/wp/wp-content/images/frozen2-characters-hugging.jpg'
  },
  {
    title:'Aladin',
    poster:'https://lh3.googleusercontent.com/proxy/CdFYuB3EnUhHndPsUCkCbBTk1L9GtKFB0hwS-tsbxjGeW_7uvv-oMwUMSG-NDI-uZQMALJdrBWUY2ATdYA-pTmMN5cUYCs40am7jcWjd07wai1-ixj9htQ'
  },
  {
    title:'Lion King',
    poster:'https://cdn.vox-cdn.com/thumbor/PcGQL0F7Suz8p2cHF8lIjvC02Uc=/0x0:4096x2160/1200x800/filters:focal(1416x380:2070x1034)/cdn.vox-cdn.com/uploads/chorus_image/image/64749197/The_Lion_King_dt1_still_1__1_.0.jpg'
  },
  {
    title:'Mulan',
    poster:'https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2019/07/31/b47721fc-adef-11e9-a61f-bc570b50c4e7_image_hires_154319.jpg?itok=VsX5RxDq&v=1564559004'
  },
  {
    title:'Sleeping Beauty',
    poster:'https://thegeekiary.com/wp-content/uploads/2019/08/sleeping-beauty-blu-ray.png'
  }
]
class App extends Component {
  render() {
    return (
      <div className="App">
      <img id='img' src='https://1000logos.net/wp-content/uploads/2017/05/Walt-Disney-logo.png'/>
       {movies.map(movie =>{    /*movies array 를 매핑해서 movies에있는 엘리먼트 만큼 사이클이 돌면서 컴포넌트를 만든다.
        movies는 저 array 이고 movie는 각 배열의 0번방,1번방... 이다.*/
         // eslint-disable-next-line no-unused-expressions
        return <Movie title={movie.title} poster={movie.poster} />
       })}
      </div>
    );
  }
}

export default App;
