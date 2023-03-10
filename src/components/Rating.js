import React from "react";

const Rating = ({ rating }) => {
  rating = Number(rating);
  let full_star = Math.floor(rating);
  return (
    <>
      {Array(full_star)
        .fill("")
        .map((e, index) => (
          <span key={index} className="fa fa-star text-[#4CAF50] px-1"></span>
        ))}
      {rating - full_star > 0.4 ? (
        <span className="fa fa-star-half text-[#4CAF50] px-1"></span>
      ) : (
        ""
      )}
    </>
  );
};

export default Rating;
