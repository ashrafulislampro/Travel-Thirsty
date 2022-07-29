import { useState, useEffect } from "react";
import UseHooks from "../Components/ashraful.Component/UseHooks/UseHooks";

const useHotel = () => {
  const [hotels, setHotels] = useState([]);
  const { baseURL } = UseHooks();
  useEffect(() => {
    fetch(`${baseURL}/api/v1/hotels/get-all-hotel`)
      .then((res) => res.json())
      .then((data) => {
        setHotels(data.data);
      });
  }, []);

  return [hotels];
};

export default useHotel;
