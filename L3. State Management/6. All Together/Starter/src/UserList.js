import PropTypes from"prop-types";
import { useState } from "react";
import User from "../../Starter/src/User";

const UserList = ({users})=>{

    return (
        <div>
          <h1>Users</h1>
          <ol>
            {users.map((user) => (
              <User
                key={user.username}
                user={user}
              />
            ))}
          </ol>
        </div>
      );    
};

UserList.propTypes = {
    users: PropTypes.array.isRequired,
  };
  
export default UserList;