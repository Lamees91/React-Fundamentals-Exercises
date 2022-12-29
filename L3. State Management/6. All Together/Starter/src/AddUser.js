import PropTypes from "prop-types";
import { useState } from "react";

const AddUser =({users, onAddUser}) => {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        username: ""
    })


    const handleSubmit = (event) =>{
        event.preventDefault();
        onAddUser(user);    
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const isDisabled = () =>{
        const { firstName, lastName, username } = user;
        return firstName === "" || lastName === "" || username === "";
    }


    return (
        <div>
          <h1>New User</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                value={user.firstName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                value={user.lastName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="username"
                placeholder="Enter username"
                value={user.username}
                onChange={handleInputChange}
              />
            </div>
            <button disabled={isDisabled()}>Add</button>
          </form>
          {/* {userExists ? (
            <p className="error">You cannot add a user that already exists.</p>
          ) : (
            ""
          )} */}
        </div>
      );


};

AddUser.propTypes = {
    onAddUser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
};

export default AddUser;