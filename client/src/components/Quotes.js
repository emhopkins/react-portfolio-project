import React from 'react';

const Quotes = (props) => {
  return (
    <div>
    	<h1>Quotes Page</h1>
        	{props.quotes.map((quote, index) => {
        		return <div key={index}>{quote.text} - {quote.character.name}</div> })}
    </div>
  );
};

export default Quotes;
