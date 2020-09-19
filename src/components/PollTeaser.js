import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Header, Button } from "semantic-ui-react";
import { colors } from "../utils/helpers";

const PollTeaser = (props) => {
  const [viewPoll, setViewPoll] = useState(false);

  const handleClick = (e) => {
    setViewPoll(!viewPoll);
  };

  const { question, unanswered } = props;
  const buttonColor = unanswered === true ? colors.yellow : colors.pink;
  const buttonContent = unanswered === true ? "Answer Poll" : "Results";

  if (viewPoll === true) {
    return <Redirect push to={`/questions/${question.id}`} />;
  }
  return (
    <>
      <Header as="h5" textAlign="left">
        Would you rather
      </Header>
      <p style={{ textAlign: "center" }}>
        {question.optionOne.text}
        <br />
        or...
      </p>
      <Button
        color={buttonColor.name}
        size="tiny"
        fluid
        onClick={handleClick}
        content={buttonContent}
      />
    </>
  );
};

export default PollTeaser;
