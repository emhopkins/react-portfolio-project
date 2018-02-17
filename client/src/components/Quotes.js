import React from 'react';

const Quotes = ({quotes}) => {
  return (
    <div>
    	<h1>Quotes Page</h1>
        	{quotes.map((quote, index) => {
        		return <div key={index}>{quote.text} - {quote.character.name}</div> })}
    </div>
  );
};

export default Quotes;
