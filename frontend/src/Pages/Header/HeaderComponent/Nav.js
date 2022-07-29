import React, { useEffect, useState } from 'react';
import { Navigation } from '../../../Components/Data';
import {Link} from "react-router-dom";

const Nav = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
      window.addEventListener('scroll', () => {
          return window.scrollY > 50 ? setBg(true) : setBg(false);
      });
  });

    return (
        <nav>
          <ul className='flex space-x-8 capitalize text-[15px]'>
            {Navigation.map((item, idx) => {
              return (
                <li
                  className={`${bg ? 'text-black' : 'text-white'} text-xl font-semibold hover:text-secondary cursor-pointer`}
                  key={idx}
                >
                  <Link
                    to={item.href}
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className='transition-all duration-300'
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      );
};

export default Nav;