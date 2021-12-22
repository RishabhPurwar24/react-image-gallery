import React from "react";
import Card from "./Card";

const CardContainer = (props) => {
  return (
    <div className="container">
      {props.listData.length > 0 &&
        props.listData.map((data) => <Card key={data.id} cardData={data} />)}
    </div>
  );
};

export default CardContainer;
