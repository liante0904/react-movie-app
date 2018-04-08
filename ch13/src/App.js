import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';



class App extends Component {
// Render : componentWillMount () -> render () -> componentDidMount ()
// Update :componentWillReceiveProps () -> shouldComponentUpdate () -> componentWillUpdate () -> render () -> component

  state = {


  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster: "http://2korea.hani.co.kr/files/attach/images/64/981/316/001.jpg"
          },
          {
            title:   "Heart Signal",
            poster: "http://www.topstarnews.net/news/photo/201802/361128_4488_4912.jpg",
          },
          {
            title:   "Star war",
            poster:  "http://steelewars.com/wp-content/uploads/2015/11/12036547_10153344638146799_7716195062476891311_n-1.jpg",
          },
          {
            title:   "Warcraft",
            poster: "https://www.ilvideogioco.com/wp-content/uploads/2016/03/Warcraft-poster.png"
          },
          {
            title: "Spider man",
            poster: "http://cdn.collider.com/wp-content/uploads/amazing-spider-man-movie-poster-438x600.jpg"
          }
        ]
        
      })
    }, 3000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    return movies
  }
  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
