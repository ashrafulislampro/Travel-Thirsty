import { useEffect, useState } from "react";

const UseToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(
        `http://localhost:5500/api/v1/authentication/get-token?email=${email}`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.accessToken;
          localStorage.setItem("accessToken", accessToken);
          setToken(accessToken);
        });
    }
  }, [email]);
  return [token];
};

export default UseToken;
