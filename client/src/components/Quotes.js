import React from 'react';
import QuoteLi from './QuoteLi'

const Quotes = ({quotes}) => {
  return (
    <div>
    	<h1>Quotes Page</h1>
        	{quotes.map((quote, index) => {
        		return <div key={index}><QuoteLi key={index} quote={quote} /> - {quote.character.name}</div> })}
        	}
    </div>
  );
};

export default Quotes;
