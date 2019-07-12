import React from 'react';
import Result from '../Results/Result/Result';


const results = (props) => props.list.map( (result, index) => {
      return ( <Result
            title={result.Title}
            year={result.Year}
            poster={result.Poster}
            index={index}
            key={index}
            clicked={() => props.displayResults(index)}
          />
      );
    }

    )


export default results;