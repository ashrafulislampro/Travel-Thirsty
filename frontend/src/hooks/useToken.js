import { useEffect, useState } from "react";
import UseHooks from "../Components/ashraful.Component/UseHooks/UseHooks";

const useToken = (email) => {
  const { baseURL } = UseHooks();
  const [token, setToken] = useState("");
  const url = `${baseURL}/api/v1/authentication/get-token?email=${email}`;
  useEffect(() => {
    if (email) {
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const accessToken = data.accessToken;
          localStorage.setItem("accessToken", accessToken);
          console.log(accessToken);
          setToken(accessToken);
        });
    }
  }, [url, email]);
  return token;
};

export default useToken;
