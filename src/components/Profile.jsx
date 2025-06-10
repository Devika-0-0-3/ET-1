import React from 'react'; 
import Card from './Card';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux'

const Profile = () => {
  const navigate = useNavigate();
  const {data:user,loading,error}=useSelector((state)=>state.user);

  if(loading) return <p>Loading....</p>
  if(error) return <p>Error:{error}</p>
  if (!user) return <p>User not found or failed to load</p>;

  return (
    <div className="max-w-md w-full mx-auto mt-4 bg-white text-black rounded-xl p-6 mb-20">
      <Card
        name={`${user.first_name} ${user.last_name}`}
        email={user.email}
        avatar={user.avatar}
        hideViewMore={true} 
      />

      <button
        onClick={() => navigate(-1)}
        className="mt-6 bg-sky-300 hover:bg-gray-400 text-black font-semibold py-2 px-4 rounded"
      >
        Back
      </button>
    </div>
  );
};

export default Profile;
