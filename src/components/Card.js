import React from "react";

const Card = (props) => {
  const tags = props.cardData.tags.split(",");

  return (
    <div className="card-container">
      <img className="card-image" src={props.cardData.userImageURL} alt="" />
      <div className="card-inner-container">
        <h1 className="card-heading">Photo By {props.cardData.user}</h1>
        <ul>
          <li>
            <strong>Views: </strong>
            {props.cardData.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {props.cardData.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {props.cardData.likes}
          </li>
        </ul>

        <div className="card-tag-container">
          {tags.map((tag) => (
            <span className="card-tag" key={tag}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
