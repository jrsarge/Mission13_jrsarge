//This is my navbar that uses handleButtonClick to set dest value to the value of the button clicked, which then changes the Body component

import Body from './Body';
import { useState } from 'react';

function Navbar() {
  const [dest, setDest] = useState('');

  const handleButtonClick = (value: string) => {
    setDest(value);
  };

  return (
    <>
      <div className="col-4 align-self-center">
        <button
          className={
            dest === 'Home'
              ? 'btn btn-secondary margin-left mx-2'
              : 'btn btn-primary margin-left mx-2'
          }
          onClick={() => handleButtonClick('Home')}
        >
          Home
        </button>
        <button
          className={
            dest === 'Podcasts'
              ? 'btn btn-secondary margin-left mx-2'
              : 'btn btn-primary margin-left mx-2'
          }
          onClick={() => handleButtonClick('Podcasts')}
        >
          Podcasts
        </button>
        <button
          className={
            dest === 'Movies'
              ? 'btn btn-secondary margin-left mx-2'
              : 'btn btn-primary margin-left mx-2'
          }
          onClick={() => handleButtonClick('Movies')}
        >
          Movies
        </button>
      </div>
      <Body dest={dest} />
    </>
  );
}
export default Navbar;
