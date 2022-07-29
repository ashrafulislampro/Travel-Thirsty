import MultiRangeSlider from "multi-range-slider-react";
import React, { useState } from "react";
import "./RangeSlide.css";
const RangeSlide = ({ handlePrice }) => {
  const [minValue, set_minValue] = useState(111);
  const [maxValue, set_maxValue] = useState(210);
  handlePrice(maxValue - minValue);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  return (
    <div>
      <div className="w-full pt-5 flex price-input">
        <div className="h-10 w-full flex items-center field">
          <input
            type="number"
            className="w-full shadow appearance-none border
             border-gray-300 text-gray-700 focus:outline-none
              focus:ring-1 focus:ring-red-400 focus:border-red-400
              rounded mr-2 input-min"
            value={minValue}
          />
        </div>
        <div className="pt-2 separator"> ~ </div>
        <div className="h-10 w-full flex items-center field">
          <input
            type="number"
            className="w-full py-2 shadow appearance-none border border-gray-300 text-gray-700 focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400 rounded ml-2 input-max"
            value={maxValue}
          />
        </div>
      </div>
      <div className="mt-5">
        <MultiRangeSlider
          min={0}
          max={300}
          step={20}
          preventWheel={true}
          ruler={false}
          minValue={minValue}
          maxValue={maxValue}
          onInput={(e) => {
            handleInput(e);
          }}
        />
      </div>
    </div>
  );
};

export default RangeSlide;
