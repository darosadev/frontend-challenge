import React, {Component} from 'react';
import styles from './App.module.css';


// Import Components
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Results from '../../components/Results/Results';
import Empty from '../../components/Empty/Empty';


//Import Assets
import logo from '../../assets/logo/logo.svg'
import icon from '../../assets/icons/icon-magnifier-grey.svg'

class App extends Component {

  state = {
    theSearch: null,
    hasDetails: false,
    movies: [],
    movie: []
  }

  resultList = null;
  emptyScreen = null;

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
            hasDetails: true,
            movie:json
          })
          console.log(this.state.movie)
        })

       
        
  }
  

}



export default App;
