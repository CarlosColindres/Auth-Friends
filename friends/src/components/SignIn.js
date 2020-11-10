import Axios from "axios";
import React, { useState} from "react";


const loginInitialvalues = {
  username: "",
  password: "",
};

function SignIn(props) {
  const [loginForm, setloginForm] = useState(loginInitialvalues);

  const inputChange = (name, value) => {
    setloginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    inputChange(name, value);
  };

  const formSubmit = () => {
    const newlogin = {
      username: loginForm.username.trim(),
      password: loginForm.password.trim(),
    };
    Axios.post('http://localhost:5000/api/login',newlogin)
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            props.history.push("/friendslist");
        })

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
          name="username"
          value={loginForm.username}
          onChange={onChange}
          placeholder="Username"
        />

        <input
          type="password"
          name="password"
          value={loginForm.password}
          onChange={onChange}
          placeholder="Password"
        />

        <button type="submit">Log In</button>
      </form>
    </>
  );
}

export default SignIn;
