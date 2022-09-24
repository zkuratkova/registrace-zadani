import React, { useState } from 'react';
import equals from 'fast-deep-equal';

const Registration = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      equals({ user: user.username }, { user: '' }) &&
      user.email.includes('@')
    ) {
      const copy = { ...user };
      const index = copy.email.indexOf('@');
      const makeUsername = copy.email.slice(0, index);
      copy.username = makeUsername;
      console.log(copy);
    } else {
      console.log(user);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Registration</h3>
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            name="username"
            placeholder="UserName"
            value={user.username}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="text"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="passwordConfirm"
            placeholder="Confirm Password"
            value={user.passwordConfirm}
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="submit" name="submit" placeholder="Register" />
        </div>
      </form>
    </>
  );
};

export default Registration;
