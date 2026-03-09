import React from "react";
import Card from "./Card";

const CardList = ({ members }) => {
  const cardComponent = members.map((member, i) => {
    return (
      <Card
        key={i}
        id={members[i].id}
        name={members[i].name}
        role={members[i].role}
      />
    );
  });

  return <div>{cardComponent}</div>;
};
export default CardList;
