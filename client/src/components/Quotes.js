import React from 'react';

const Quotes = () => {
  return (
    <div>
    	<h1>Quotes Page</h1>
        	{quotes.map((quote, index) => {
        		return <div key={index}>{quote.text}</div> })}
    </div>
  );
};

export default Quotes;
