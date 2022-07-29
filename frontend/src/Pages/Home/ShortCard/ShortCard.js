import React from "react";
import { Slide } from "react-reveal";
import { ShortAbout } from "../../../Components/Data";
import ShortCardDetails from "./ShortCardDetails";
const ShortCard = () => {
  return (
    <Slide bottom>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 -mt-10 mb-20">
        {ShortAbout.map((data, index) => (
          <ShortCardDetails data={data} key={index} />
        ))}
      </div>
    </Slide>
  );
};

export default ShortCard;
