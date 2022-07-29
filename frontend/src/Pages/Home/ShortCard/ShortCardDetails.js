import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Bounce, Fade, Zoom } from "react-reveal";

const ShortCardDetails = ({ data }) => {
  const { icon, title, description } = data;
  return (
    <div className="card bg-base-300 shadow-xl p-3 hover:bg-primary hover:text-white group hover:-translate-y-2 hover:duration-300">
      <Zoom>
      <figure className="px-10 pt-10">
        <FontAwesomeIcon
          className="text-5xl text-primary group-hover:text-white"
          icon={icon}
        />
      </figure>
      </Zoom>
      <div className="card-body items-center text-center">
        <Bounce><h2 className="card-title">{title}</h2></Bounce>
        <Fade bottom><p>{description}</p></Fade>
      </div>
    </div>
  );
};

export default ShortCardDetails;
