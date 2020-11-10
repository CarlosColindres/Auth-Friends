import { fetchAxios } from "../utils";
import React, { useState } from "react";

const addFriendInitialvalues = {
  name: "",
  age: "",
  email: "",
};

function SignIn({setFriends}) {
  const [addFriendForm, setaddFriendForm] = useState(addFriendInitialvalues);

  const inputChange = (name, value) => {
    setaddFriendForm({
      ...addFriendForm,
      [name]: value,
    });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    inputChange(name, value);
  };

  const formSubmit = () => {
    const newaddFriend = {
      name: addFriendForm.name.trim(),
      age: addFriendForm.age.trim(),
      email: addFriendForm.email.trim(),
    };
    fetchAxios()
      .post("/friends",newaddFriend)
      .then((res) => setFriends(res.data));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    formSubmit();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={addFriendForm.name}
          onChange={onChange}
          placeholder="name"
        />

        <input
          type="text"
          name="age"
          value={addFriendForm.age}
          onChange={onChange}
          placeholder="age"
        />

        <input
          type="email"
          name="email"
          value={addFriendForm.email}
          onChange={onChange}
          placeholder="email"
        />

        <button type="submit">Log In</button>
      </form>
    </>
  );
}

export default SignIn;
