import React, { Fragment } from 'react';

import Topbar from '../../components/Topbar';
import './styles.css';
import logo from '../../assets/tictactoe.jpg';

const Profile = function Profile() {
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
              <li className="match-img-1" />
              <li className="match-img-2" />
              <li className="match-img-3" />
              <li className="match-img-4" />
            </ul>
            <ul className="matches-list">
              <li className="match-1">Match #359</li>
              <li className="match-2">Match #358</li>
              <li className="match-3">Match #357</li>
              <li className="match-4">Match #356</li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
