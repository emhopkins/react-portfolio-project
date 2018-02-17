import React from 'react';

const All = ({characters}) => {
  return (
    <div>
    	<h1>All Quotes by Character</h1>
        	{characters.map((character, index) => {
        		return <div key={index}>{character.name}
        						<ul>{character.quotes.map((quote, index) => { return <li key={index}>{quote.text}</li>} )}</ul>
        					</div> })}
    </div>
  );
}

export default All
