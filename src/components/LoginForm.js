import React, { useState } from "react";
import PropTypes from "prop-types";
import {  useDispatch, useSelector } from "react-redux";

import { Header, Form } from "semantic-ui-react";
import { setAuthUser } from "../store/actions/authUser";
const LoginForm = (props) => {
  const [value, setValue] = useState("");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const onChange = (e, { value }) => {
    setValue(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { onLoading } = props;
    const authUser = value;

    new Promise((res, rej) => {
      onLoading();
      setTimeout(() => res(), 500);
    }).then(() => dispatch(setAuthUser(authUser)));
  };
  const generateDropdownData = () => {
    const allUsers = Object.values(users);
    return allUsers.map((user) => ({
      key: user.id,
      text: user.name,
      value: user.id,
      image: { avatar: true, src: user.avatarURL },
    }));
  };

  const disabled = value === "" ? true : false;

  return (
    <Form onSubmit={handleSubmit}>
      <Header as="h2" color="green">
        Sign In
      </Header>
      <Form.Dropdown
        placeholder="Select a Friend"
        fluid
        selection
        scrolling
        options={generateDropdownData()}
        value={value}
        onChange={onChange}
        required
      />
      <Form.Button content="Login" positive disabled={disabled} fluid />
    </Form>
  );
};

LoginForm.propTypes = {
  onLoading: PropTypes.func.isRequired,
};


export default LoginForm;
