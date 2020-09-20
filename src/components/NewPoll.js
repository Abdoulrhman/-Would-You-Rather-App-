import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Segment,
  Header,
  Grid,
  Divider,
  Form,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import { handleSaveQuestion } from "../store/actions/questions";

const NewPoll = () => {
  const authUser = useSelector((state) => state.authUser);
  const dispatch = useDispatch();

  const [options, setOptions] = useState({
    option1: "",
    option2: "",
  });

  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const handleChange = (e) => {
    setOptions({
      ...options,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { option1, option2 } = options;

    new Promise((res, rej) => {
      setLoading(true);
      dispatch(handleSaveQuestion(option1, option2, authUser));
      setTimeout(() => res("success"), 1000);
    }).then(() => {
      setOptions({
        option1: "",
        option2: "",
      });
      setIsValid(true);
    });
  };

  const disabled = options.option1 === "" || options.option2 === "";

  if (isValid === true) {
    return <Redirect to="/" />;
  }
  return (
    <Segment.Group>
      <Header as="h3" textAlign="left" block attached="top">
        Create a New Poll
      </Header>
      <Grid padded>
        <Grid.Column>
          {loading && (
            <Dimmer active inverted>
              <Loader content="Updating" />
            </Dimmer>
          )}
          <p>Complete the question:</p>
          <p>
            <strong>Would you rather...</strong>
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Input
              id="option1"
              placeholder="Enter option one..."
              value={options.option1}
              onChange={handleChange}
              required
            />
            <Divider horizontal>Or</Divider>
            <Form.Input
              id="option2"
              placeholder="Enter option two..."
              value={options.option2}
              onChange={handleChange}
              required
            />
            <Form.Button positive size="tiny" fluid disabled={disabled}>
              Submit
            </Form.Button>
          </Form>
        </Grid.Column>
      </Grid>
    </Segment.Group>
  );
};

export default NewPoll;
