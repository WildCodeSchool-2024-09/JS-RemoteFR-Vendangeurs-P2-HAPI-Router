import type React from "react";
import { NavLink } from "react-router-dom";

interface CardProps {
  house: string;
  imageSrc: string;
  description: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({
  house,
  imageSrc,
  description,
  onClick,
}) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className={`card ${house.toLowerCase()}`}>
      <img src={imageSrc} alt={house} />
      <p>{description}</p>
      <NavLink to="/home" className="button" onClick={handleClick}>
        {house}
      </NavLink>
    </div>
  );
};

export default Card;
