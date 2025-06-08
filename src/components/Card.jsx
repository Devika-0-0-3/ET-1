import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ id, name, email, avatar, hideViewMore = false }) => {
  const navigate = useNavigate();

  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20 bg-white shadow-2xl h-[450px] text-black rounded-xl">
        
        <div className="h-56 rounded-t-xl bg-sky-300 flex justify-center items-center">
          <div className="w-36 h-36 flex rounded-full justify-center items-center bg-white">
            <div className="rounded-full h-32 w-32 flex justify-center items-center bg-sky-300">
              <img
                src={avatar}
                alt="PP"
                className="h-28 w-28 rounded-full bg-white object-cover"
              />
            </div>
          </div>
        </div>

     
        <div className="flex flex-col justify-center items-center gap-4 p-4">
          <p className="text-xl font-semibold">{name}</p>
          <p>{email}</p>

        
          {!hideViewMore && (
            <button
              onClick={() => navigate(`/${id}`)}
              className="cursor-pointer bg-sky-600 text-white text-lg px-6 py-1 rounded-xl"
            >
              View More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
