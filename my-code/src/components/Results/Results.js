import React from 'react';
import Result from '../Results/Result/Result';


const results = (props) => props.list.map( (result) => {
    return <Result
      title={result.Title}
      year={result.Year}
      poster={result.Poster}
      key={result.imdbID}/>
  } );

export default results;