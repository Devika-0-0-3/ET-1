import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';  
import Card from './Card';

const Profile = () => {
  const user = useLoaderData();
  const navigate = useNavigate();

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

export const profileDetailsLoader = async ({ params }) => {
  const { id } = params;
  
  try {
    const response = await axios.get(`https://reqres.in/api/users/${id}`, {
      headers: {
        'x-api-key': 'reqres-free-v1'
      }
    });
    
    return response.data.data;  // Axios wraps response data in .data property
  } catch (error) {
    if (error.response) {
      // Server responded with error status (4xx, 5xx)
      throw new Response('Failed to fetch user data', { 
        status: error.response.status 
      });
    } else {
      // Network error or other issues
      throw new Response('Network error', { status: 500 });
    }
  }
};