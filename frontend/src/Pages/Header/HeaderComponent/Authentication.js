import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import HeaderAvater from './HeaderAvater';

const Authentication = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            {
                user ? <HeaderAvater /> :
                <button className="text-xl font-bold text-white bg-rose-600 hover:bg-accent focus:bg-gray-800 px-5 py-2 rounded-2xl cursor-pointer">
                    <Link to="/signin">SignIn</Link>
                </button>
            }
        </div>
    );
};

export default Authentication;