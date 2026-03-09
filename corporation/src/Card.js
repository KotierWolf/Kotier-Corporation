import React from "react";

const Card = ({ name, role }) => {

  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        src="https://avatars.githubusercontent.com/u/105644583?v=4"
        alt="Kotier Antires"
      />
      <div>
        <h2>{name}</h2>
        <p>{role}</p>
      </div>
    </div>
  );
};
export default Card;