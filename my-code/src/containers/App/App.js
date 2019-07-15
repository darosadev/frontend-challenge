import React, {Component} from 'react';
import styles from './App.module.css';


// Import Components
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Results from '../../components/Results/Results';
import Empty from '../../components/Empty/Empty';
import Details from '../../components/Details/Details';


//Import Assets
import logo from '../../assets/logo/logo.svg'
import icon from '../../assets/icons/icon-magnifier-grey.svg'
import imdbIcon from '../../assets/logo/logo-imdb.svg';
import rtIcon from '../../assets/logo/logo-rotten-tomatoes.svg';
import goBackBtn from '../../assets/icons/icon-arrow-grey.svg';

class App extends Component {

  state = {
    theSearch: null,
    movies: [],
    movie: [],
    detailsDivClass: 'hideDetails'
  }

  resultList = null;
  emptyScreen = null;
  detailsDiv = null;

  render(){

    if ( this.state.movies.Search !== undefined ) {

      this.resultList = (
        <div className={styles.searchResults}>
          <Results
            list={this.state.movies.Search}
            displayResults={this.displayResults}
          />
        </div>
      );
      this.emptyScreen = null;

    }

    else {
      this.emptyScreen = (
        <div>
          <Empty/>
        </div>
      );
      this.resultList = null;
    }

    if (this.state.movie.Title === undefined){
      this.detailsDiv = (
        <div>
          <Details
            detailsDivClass={this.state.detailsDivClass}
          />
        </div>
      )
    }

    else{
      console.log(this.state.movie)

      this.detailsDiv = (
        <div>
          <Details
            duration={this.state.movie.Runtime}
            year={this.state.movie.Year}
            rating={this.state.movie.Rated}
            title={this.state.movie.Title}
            imdbIcon={imdbIcon}
            imdbRating={this.state.movie.Ratings[0].Value}
            rtIcon={rtIcon}
            rtRating={this.state.movie.Ratings[1].Value}
            plot={this.state.movie.Plot}
            cast={this.state.movie.Actors}
            genre={this.state.movie.Genre}
            director={this.state.movie.Director}
            poster={this.state.movie.Poster}
            goBack={goBackBtn}
            goBackAction={this.goBackToSearch}
            detailsDivClass={this.state.detailsDivClass}
          />
        </div>
      );
    }


    return (
      <div className={styles.App}>
          <div className={styles.container}>
            <Header appLogo={logo}/>
            <Search 
              changed={this.searchMovie}
              icon={icon}
            />

           {this.emptyScreen}

           {this.resultList}

           {this.detailsDiv}

          </div>
      </div>

    );
  }
  
  searchMovie = (event) => {
    //this.setState({movies: []});
    let concatSearch = event.target.value.split(' ').join('+');
    let api = 'http://www.omdbapi.com/?apikey=d4dc8e70&s=';
    let url = api + concatSearch;
    let lastChar = url[url.length-1];


    this.setState({theSearch: concatSearch});

    if (lastChar === '+'){
      url = url.slice(0, -1);
    }

    //console.log(url);
  
    fetch(url)
    .then(res => res.json())
    .then(json => {
      this.setState({
        movies:json
      })
    })

    //console.log(this.state.movies)
  }

  
  displayResults = (index) => {

    
    const theMovie = this.state.movies.Search[index];
    const imdbID = theMovie.imdbID;

        let api = 'http://www.omdbapi.com/?apikey=d4dc8e70&i=';
        let url = api + imdbID;
      
        fetch(url)
        .then(res => res.json())
        .then(json => {
          this.setState({
            movie:json,
            detailsDivClass:'showDetails'
          })
          //console.log(this.state.movie)
        })            
  }


/*  componentDidUpdate(){
    this.goBackToSearch();
  }*/

  goBackToSearch = () => {
    this.setState({
      detailsDivClass:'hideDetails'
    })
    console.log('hey');
  }
  

}



export default App;
