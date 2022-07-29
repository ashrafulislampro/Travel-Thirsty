import React from 'react';
import { Fade } from 'react-reveal';
import Swing from 'react-reveal/Swing';
import Wobble from 'react-reveal/Wobble';
import HeadShake from 'react-reveal/HeadShake';


const OurTeam = () => {
    return (
        <>
            <div className="xl:mx-auto xl:container 2xl:px-20 px-6 py-20">
               <Fade bottom><h1 className="text-3xl md:text-5xl font-semibold leading-10 text-gray-800 text-center">Meet Our Developer Team</h1></Fade>
                <div className="flex flex-wrap items-stretch xl:justify-between justify-center mt-16 xl:gap-6 gap-4">
                    <div className="lg:w-96 w-80">
                        <Wobble><img src="https://i.ibb.co/g3N0tn4/273000758-475261434228117-5832663628739063727-n.jpg" className="h-52 w-52 object-cover object-center rounded-full mx-auto" alt="woman smiling" /></Wobble>
                        <div className="bg-white shadow-md rounded-md py-4 text-center">
                            <Swing><p className="text-base font-medium leading-6 text-gray-600">Ashraful Islam</p></Swing>
                            <HeadShake><p className="text-base leading-6 mt-2 text-gray-800">Senior Developer</p></HeadShake>
                        </div>
                    </div>
                    <div className="lg:w-96 w-80">
                        <Wobble><img src="https://i.ibb.co/pPkX4Bs/1627408954787.jpg" className="h-52 w-52 object-cover object-center rounded-full mx-auto" alt="woman in black dress" /></Wobble>
                        <div className="bg-white shadow-md rounded-md py-4 text-center">
                            <Swing><p className="text-base font-medium leading-6 text-gray-600">Munna Aziz</p></Swing>
                            <HeadShake><p className="text-base leading-6 mt-2 text-gray-800">Junior Deeveloper</p></HeadShake>
                        </div>
                    </div>
                    <div className="lg:w-96 w-80">
                        <Wobble><img src="https://i.ibb.co/qdd4R9T/nahid.jpg" className="h-52 w-52 object-cover object-center rounded-full mx-auto" alt="woman smiling" /></Wobble>
                        <div className="bg-white shadow-md rounded-md py-4 text-center">
                            <Swing><p className="text-base font-medium leading-6 text-gray-600">MD.Nahid</p></Swing>
                            <HeadShake><p className="text-base leading-6 mt-2 text-gray-800">Junior Deeveloper</p></HeadShake>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurTeam;