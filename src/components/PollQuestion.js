import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header, Button, Form, Radio } from "semantic-ui-react";
import { handleSaveQuestionAnswer } from "../store/actions/users";

const PollQuestion = (props) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.authUser);
  const { question } = props;

  const handleChange = (e, { value }) => setValue(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== "") {
      dispatch(handleSaveQuestionAnswer(authUser, question.id, value));
    }
  };

  const disabled = value === "" ? true : false;

  return (
    <>
      <Header as="h4">Would you rather</Header>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <Radio
            label={question.optionOne.text}
            name="radioGroup"
            value="optionOne"
            checked={value === "optionOne"}
            onChange={handleChange}
          />
          <br />
          <Radio
            label={question.optionTwo.text}
            name="radioGroup"
            value="optionTwo"
            checked={value === "optionTwo"}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Button
            color="yellow"
            size="tiny"
            fluid
            positive
            disabled={disabled}
            content="Submit"
          />
        </Form.Field>
      </Form>
    </>
  );
};

export default PollQuestion;
