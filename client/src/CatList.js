
import React from 'react';

const CatList = ({ catPics }) => {
  let cats = catPics.map(cat => <img alt='cat' src={`${cat.url}`} />);

  return (
    <div>
      {cats}
    </div>
  )
}

export default CatList;

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