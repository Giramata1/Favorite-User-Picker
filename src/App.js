import React from "react";
import { FavoriteUserProvider}  from "./components/FavoriteUserContext";
import UserPicker from "./components/UserPicker";
import UserDisplay from "./components/UserDisplay";

const App = () => {
  return (
    <FavoriteUserProvider>
      <div style={{ padding: "6rem" }}>
        <h1 style={{fontFamily: "fantasy"}}><u>Favorite User Picker</u></h1>
        <UserPicker />
        <UserDisplay />
      </div>
    </FavoriteUserProvider>
  );
};

export default App;
