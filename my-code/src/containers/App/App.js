import React, {Component} from 'react';
import styles from './App.module.css';


// Import Components
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Results from '../../components/Results/Results';


//Import Assets
import logo from '../../assets/logo/logo.svg'
import icon from '../../assets/icons/icon-magnifier-grey.svg'



class App extends Component {

  state = {
    theSearch: null,
    isLoaded: false,
    empty: true,
    movies: []
  }

  resultList = null;

  render(){

    if ( this.state.movies.Search !== undefined ) {

      this.resultList = (
        <div>
          <Results
            list={this.state.movies.Search}
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
              clicked={this.performSearch}
              icon={icon}
            />

           {this.resultList}

          </div>
      </div>

    );
  }
  
  searchMovie = (event) => {
    this.setState({movies: []});
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
        isLoaded: true,
        movies:json
      })
    })
  }

}



export default App;
