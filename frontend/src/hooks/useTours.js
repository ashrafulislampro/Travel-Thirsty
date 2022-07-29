import { useEffect } from "react";
import { useState } from "react";
import UseHooks from "../Components/ashraful.Component/UseHooks/UseHooks";

const useTours = () => {
  const [tours, setTours] = useState([]);
  const { baseURL } = UseHooks();
  useEffect(() => {
    fetch(`${baseURL}/api/v1/tour/all-tour-plan`)
      .then((res) => res.json())
      .then((data) => setTours(data.data));
  }, []);
  return [tours];
};
export default useTours;
