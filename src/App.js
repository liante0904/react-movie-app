import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';



class App extends Component {
// Render : componentWillMount () -> render () -> componentDidMount ()
// Update :componentWillReceiveProps () -> shouldComponentUpdate () -> componentWillUpdate () -> render () -> component

  state = {}

  
  componentDidMount(){
   this._getMovies();

    // setTimeout(() => {
    //   this.setState({
    //     movies: [
    //       {
    //         title: "Matrix",
    //         poster: "http://2korea.hani.co.kr/files/attach/images/64/981/316/001.jpg"
    //       },
    //       {
    //         title:   "Heart Signal",
    //         poster: "http://www.topstarnews.net/news/photo/201802/361128_4488_4912.jpg",
    //       },
    //       {
    //         title:   "Star war",
    //         poster:  "http://steelewars.com/wp-content/uploads/2015/11/12036547_10153344638146799_7716195062476891311_n-1.jpg",
    //       },
    //       {
    //         title:   "Warcraft",
    //         poster: "https://www.ilvideogioco.com/wp-content/uploads/2016/03/Warcraft-poster.png"
    //       },
    //       {
    //         title: "Spider man",
    //         poster: "http://cdn.collider.com/wp-content/uploads/amazing-spider-man-movie-poster-438x600.jpg"
    //       }
    //     ]
        
    //   })
    // }, 3000)
  
  
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      console.log(movie)
      return <Movie
        title={movie.title_english}
        poster={movie.medium_cover_image}
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}
        />
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
   return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
    
  }
  
  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
