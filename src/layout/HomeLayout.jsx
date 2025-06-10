import React from 'react'
import axios from 'axios';  // First install axios
import Card from '../components/Card'
import {useState, useEffect} from 'react'

const HomeLayout = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users?page=2', {
          headers: {
            'x-api-key': 'reqres-free-v1'
          }
        });
        
        console.log("API Response:", response.data);
        console.log("Users Array:", response.data.data);
        setRecords(response.data.data || []);
      } catch (err) {
        console.error("Axios error:", err);
        setRecords([]);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 mb-40">
      {Array.isArray(records) && records.map(user => (
        <Card
          key={user.id}
          id={user.id}
          name={`${user.first_name} ${user.last_name}`}
          email={user.email}
          avatar={user.avatar}
        />
      ))}
    </div>
  )
}

export default HomeLayout