import { useState } from 'react';
import data from './MovieData.json';

const mds = data.MovieData;

function MovieList() {
  const [ListOMovies, setListOMovies] = useState(mds);

  return (
    <>
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <div className="col-6 mx-auto text-center">
        <table className="table bordered table-striped">
          <thead>
            <tr>
              <th className="col-4">Title</th>
              <th className="col-1">Year</th>
              <th className="col-2">Director</th>
              <th className="col-1">Rating</th>
              <th className="col-1">Category</th>
              <th className="col-1">Edited</th>
            </tr>
          </thead>
          <tbody>
            {ListOMovies.map((m) => (
              <tr>
                <td className="col-4">{m.Title}</td>
                <td className="col-1">{m.Year.toString().substring(0, 4)}</td>
                <td className="col-2">{m.Director}</td>
                <td className="col-1">{m.Rating}</td>
                <td className="col-1">{m.Category}</td>
                <td className="col-1">{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default MovieList;
