import React from 'react';
import Result from '../Results/Result/Result';


const results = (props) => props.list.map( ( result) => {
    return <Result
      title={result.Title}
      key={result.id}/>
  } );

export default results;