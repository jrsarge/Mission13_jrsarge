//This file is the page header, it calls the Navbar component as well

import styles from './Blah.module.css';
import Navbar from './Nav';
function TopBanner(props: any) {
  return (
    <>
      <div className="row">
        <div className="col-2">
          <img className={styles.img} src="./movie.png" alt="logo" />
        </div> 
        <div className="col-6 align-self-center text-start">
          <h1 className={styles.h1}>Joel Hilton's Movie Collection</h1>
        </div>
        <Navbar />
      </div>
    </>
  );
}

export default TopBanner;