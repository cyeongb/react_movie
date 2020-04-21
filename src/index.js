import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


/*   reactDom 은 리액트를 웹사이트에 출력(render) 하는걸 도와주는 모델이다.
     Document Object Model
     리액트를 사용해서 웹사이트에 올리고 싶을때 ReactDom을 사용한다.
     아니면 모바일에서 사용하고 싶을때는 ReactNative를 사용하면 된다.
     리액트는 1개의 컴포넌트를 출력(render)  하고 
     렌더링을 하면 'root'라는 아이디의 엘리먼트 안에 컴포넌트들이 출력이 된다.*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
