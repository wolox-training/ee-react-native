import React, { Fragment } from 'react';
import shortid from 'shortid';

import Topbar from '../../components/Topbar';
import './styles.css';
import logo from '../../assets/tictactoe.jpg';

const Profile = function Profile() {
  const numbers = [1, 2, 3, 4];
  let matchNumber = 359;
  const imageMatchListItems = numbers.map(number => <li key={shortid.generate()} className={`match-img-${number}`} />);
  const matchListItems = numbers.map(number => <li key={shortid.generate()} className={`match-${number}`}>{`Match #${matchNumber--}`}</li>);

  return (
    <Fragment>
      <Topbar />
      <div className="container">
        <div className="container-left">
          <img src={logo} className="profile-photo" alt="Profile" />
          <div className="profile-name">Mr. Giuseppe Tictac</div>
          <div>Playing since Dec 17, 2018</div>
          <div>Matches played: 7459</div>
          <div>Friends: 58</div>
        </div>
        <div className="container-right">
          <div className="container-personal-info">
            <h1 className="personal-info-title">Personal information</h1>
            <ul className="personal-list">
              <li className="birthday">Birthday: Feb 29</li>
              <li className="country">Country: Greenland</li>
              <li className="email">Email: giuseppe-gamer@classicmusic.com</li>
            </ul>
          </div>
          <div className="container-matches">
            <h1 className="last-matches-title">Last matches</h1>
            <ul className="matches-images">
              {imageMatchListItems}
            </ul>
            <ul className="matches-list">
              {matchListItems}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
