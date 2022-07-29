import React from "react";
import Fade from "react-reveal/Fade";

const Subscribe = () => {
  return (
    <div className="py-20 w-full relative bg-cover bg-no-repeat bg-center bg-gradient-to-r from-[#2ebdc4] to-[#68e5b2]">
      <div className="container mx-auto px-5 h-full flex justify-center items-center">
        <div>
          <Fade top>
            <div className="text-center">
              <h2 className="text-6xl text-white mb-6">
                Subscribe to our Newsletter
              </h2>
              <p className="text-white">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, <br /> there live the blind texts.
                Separated they live in
              </p>
            </div>
          </Fade>
          <Fade bottom>
            <div className="mt-10 flex justify-center">
              <form className="flex divide-x">
                <input
                  className="shadow appearance-none border-none rounded-l-lg w-96 py-4 px-3 text-gray-700 leading-tight focus:outline-none focus-0 focus:shadow-outline"
                  id="username"
                  type="email"
                  placeholder="Enter email address"
                />
                <button className="py-2 px-3 font-semibold rounded-r-lg bg-white">
                  Subscribe
                </button>
              </form>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
