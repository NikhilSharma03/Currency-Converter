import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import rupee from './../../assets/rupee.png';
import euro from './../../assets/euro.png';
import yen from './../../assets/yen.png';
import dollor from './../../assets/dollor.png';

const Home = () => (
  <section className="home">
    {/* Animated Boxes */}
    <figcaption className="home__animated--box home__animated--box--1">
      <img className="home__animated--box__img" src={rupee} alt="rupee" />
      <label className="home__animated--box__label">&#8377;74.5&#8593;</label>
    </figcaption>

    <figcaption className="home__animated--box home__animated--box--2">
      <img className="home__animated--box__img" src={yen} alt="yen" />
      <label className="home__animated--box__label">&yen;82.5&#8593;</label>
    </figcaption>

    <figcaption className="home__animated--box home__animated--box--3">
      <img className="home__animated--box__img" src={euro} alt="euro" />
      <label className="home__animated--box__label"> &euro;45.5&#8593;</label>
    </figcaption>

    <figcaption className="home__animated--box home__animated--box--4">
      <img className="home__animated--box__img" src={dollor} alt="dollor" />
      <label className="home__animated--box__label">$22.5&#8593;</label>
    </figcaption>
    {/*  */}
    <div className="home__container">
      <h1 className="home__container--h1">
        Your own currency converter to compare money
      </h1>
      <p className="home__container--p">
        We got everything you need to compare money <span>👌</span>
      </p>
      <label className="home__btn">
        <Link to="/convert">
          <label className="home__btn--label">Compare</label>
          <div className="home__btn--circle">&nbsp;</div>
        </Link>
      </label>
    </div>
  </section>
);

export default Home;
