import React from 'react';
import './style.scss'

interface CardProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  title: string,
  location: string
}

export const Card = ({ title, location, ...rest }: CardProps) => {
  return (
    <div className='card' >
      {/* <div id='img-container'> */}
      <img src={rest.src} alt={rest.alt} {...rest} />
      {/* </div> */}

      <div id='car-content'>
        <strong>{title}</strong>

        <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</span>

        <span>{location}</span>
      </div>
    </div>
  );
};