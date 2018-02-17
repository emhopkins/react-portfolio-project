import React from 'react';

const Characters = (props) => {
  return (
    <div>
    	<h1>Characters Page</h1>
        	{props.characters.map((character, index) => {
        		return <div key={index}>{character.name}
        						<ul>{character.quotes.map((quote, index) => { return <li key={index}>{quote.text}</li>} )}</ul>
        					</div> })}
    </div>
  );
}

export default Characters
