import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';  // Adjust path if needed

const Profile = () => {
 
  const user = useLoaderData();

  if (!user) return <p>Loading...</p>;

  return (
    <div className="max-w-md w-full mx-auto mt-20 bg-white shadow-2xl text-black rounded-xl p-6 mb-30">
      <Card
        name={`${user.first_name} ${user.last_name}`}
        email={user.email}
        avatar={user.avatar}
      />
    </div>
  );
};

export default Profile;


export const profileDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://reqres.in/api/users/${id}`, {
    headers: {
      'x-api-key': 'reqres-free-v1'
    }
  });
  if (!res.ok) {
    throw new Response('Failed to fetch user data', { status: res.status });
  }

  const data = await res.json();
  return data;  // this has { data: {...user} }
};
