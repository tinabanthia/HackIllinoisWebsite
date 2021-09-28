import React from 'react';
import { Link } from 'react-router-dom';
import mentors from './mentorData';

function CardItem(mentor) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={mentor.path}>
          <figure className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt='Mentor Image'
              src={mentor.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{mentor.description}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;