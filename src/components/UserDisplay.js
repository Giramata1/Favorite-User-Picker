import React from 'react';
import { useFavoriteUser } from './FavoriteUserContext';

const UserDisplay = () => {
  const { favoriteUser, setFavoriteUser } = useFavoriteUser();

  if (!favoriteUser) return <p style={{ paddingLeft: '30rem'}}> <strong>favorite User Not Selected Yet.</strong></p>;

  return (
    <div style={{ paddingLeft: '30rem',
        padding: '10px',
        border: '1px solid black',
        borderRadius: '6px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
     }}>
      <h2><strong><u>Your Favorite User:</u></strong></h2>
      <p>
        <strong>{favoriteUser.name}</strong> ({favoriteUser.email})
      </p>
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
      onClick={() => setFavoriteUser(null)}> Remove Favorite</button>
    </div>
  );
};

export default UserDisplay;