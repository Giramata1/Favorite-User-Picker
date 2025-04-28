import React, { useEffect, useState } from 'react';
import { useFavoriteUser } from './FavoriteUserContext';

const UserPicker = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { setFavoriteUser } = useFavoriteUser();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const answer = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!answer.ok) {
          throw new Error(`HTTP error!: ${answer.status}`);
        }
        const data = await answer.json();
        setUsers(data);
      } catch (err) {
        setError('Error to load users Name and Email. Please try again later.');
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading user's Data...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>👆Pick a user's Name To Display it on Favorite List:</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridGap: '16px',
          marginTop: '20px',
        }}
      >
        {users.map(user => (
          <div
            key={user.id}
            style={{
              padding: '10px',
              border: '1px solid black',
              borderRadius: '6px',
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <strong style={{ display: 'block' }}>{user.name}</strong>
              <span style={{ color: 'black', fontSize: '0.9em' }}>{user.email}</span>
            </div>
            <button
              style={{
                marginTop: '10px',
                padding: '6px',
                cursor: 'pointer',
                backgroundColor: 'gray',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontFamily: 'mono'
              }}
              onClick={() => setFavoriteUser({ name: user.name, email: user.email })}
            >
              Pick
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPicker;
