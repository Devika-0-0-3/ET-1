import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Card from './Card';  // Adjust path if needed

const Profile = () => {
  const user = useLoaderData();
  const navigate = useNavigate();

  if (!user) return <p>Loading...</p>;

  return (
    <div className="max-w-md w-full mx-auto mt-4 bg-white text-black rounded-xl p-6 mb-20">
      <Card
        name={`${user.first_name} ${user.last_name}`}
        email={user.email}
        avatar={user.avatar}
        hideViewMore={true}  // to hide the View More button here
      />

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}  // -1 goes back in history
        className="mt-6 bg-sky-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded"
      >
        Back
      </button>
    </div>
  );
};

export default Profile;
