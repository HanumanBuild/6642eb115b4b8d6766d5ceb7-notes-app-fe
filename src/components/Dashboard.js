import React, { useEffect } from 'react';
import API from '../api'; // Import the Axios instance

function Dashboard() {
  // Example of fetching notes
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await API.get('/notes');
        console.log('Fetched notes:', response.data);
      } catch (error) {
        console.error('Error fetching notes:', error.response.data);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold'>Dashboard</h1>
      {/* Additional dashboard content will go here */}
    </div>
  );
}

export default Dashboard;