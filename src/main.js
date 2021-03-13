import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import  styles from './index.scss';
import image1 from './images/1.jpeg';
import image2 from './images/2.jpeg';

class App extends Component {
  render(){
    return (
      <div className={styles.PageCss}>
        <div className="main-page">我是主页</div>
        <img src={image1} alt="" className=""/>
        <img src={image2} alt="" className=""/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

