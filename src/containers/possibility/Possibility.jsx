import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Free and Reliable for All Users!</h4>
      <h1 className="gradient__text"> Input a Spectrogram Now to Your Physician For a Free Diagnosis!</h1>
      <p>Only .JPG and .PNG Files Are Accepted.</p>
      <button class="button_cost">Buy Our Portable Electromyograms Today! $69.99 CAD</button>
    </div>
  </div>
);

export default Possibility;