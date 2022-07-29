import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import data from "../../../Services/TestimonyData.json";
import TestimonySlider from "../AllCarouselSlider/TestimonySlider";
const Testimony = () => {
  const [moreText, setMoreText] = useState(false);
  return (
    <div className="bg-[#F8FAFF] py-16">
      <div className="container px-8 mx-auto">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-center items-center">
          <Fade left>
            <div>
              <h2 className="text-gray-400 text-lg">Best Directory Website</h2>
              <h2 className="py-2 text-4xl">
                <span className="font-bold">Why</span> Choose Us?
              </h2>
              <div className="max-h-[12rem] overflow-y-auto">
                <p className="text-gray-400">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                  <br />
                  <br />
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic life.
                  {moreText ? "" : <span>.....</span>}
                </p>
                <br />
                {moreText ? (
                  <p className="text-gray-400">
                    In a Decentralized E-Commerce, people can buy and sell
                    products in peer to peer form. Users can register and list
                    their products and become a seller or act as a seller. The
                    buyer will be able to see the rates and track their
                    purchases. It is the cost-effective way of trading for both
                    parties as the trade is happening directly between the buyer
                    and the seller. Here the platforms like PoorToRich would
                    ensure the genuinity and smooth transaction of the process
                    by making sure that both the parties trade fairly.
                  </p>
                ) : (
                  ""
                )}
              </div>
              <br />
              {moreText ? (
                <button
                  onClick={() => setMoreText(!moreText)}
                  className="border border-red-600 rounded-full py-3 px-5 text-lg font-semibold text-red-600 hover:text-white hover:bg-red-600"
                >
                  Read less
                </button>
              ) : (
                <button
                  onClick={() => setMoreText(!moreText)}
                  className="border border-red-600 rounded-full py-3 px-5 text-lg font-semibold text-red-600 hover:text-white hover:bg-red-600"
                >
                  Read more
                </button>
              )}
            </div>
          </Fade>
          <Fade right>
            <div>
              <h2 className="text-gray-400">Testimony</h2>
              <h2 className="text-4xl mb-4 mt-2">
                <span className="font-bold">Our</span> Guests Says
              </h2>
              <div>
                <TestimonySlider Data={data} />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
