import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import mentors from './mentorData';

const Cards = () => {
  return (
    <div className='cards'>
      <h1>Check out our mentors!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            {mentors.map((mentor) =>
            <CardItem
              src={mentor.src}
              text={mentor.description}
              path={mentor.path}
            /> 
            )}
            </ul>
        </div>
      </div>
      </div>
  );
}

export default Cards;