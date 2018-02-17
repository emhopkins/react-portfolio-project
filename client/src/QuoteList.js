
import React from 'react';

const QuoteList = ({ quoteText }) => {
  let quotes = quoteText.map(quote => <div>{`${quote.text}`} </div>);

  return (
    <div>
      {quotes}
    </div>
  )
}

export default QuoteList;

// import React from 'react';
// import { Link } from 'react-router-dom';
 
// const MoviesList = ({ movies }) => {
//   const renderMovies = movies.map(movie => 
//     <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
//   );
 
//   return (
//     <div>
//       {renderMovies}
//     </div>
//   );
// };
 
// export default MoviesList;