import React from "react";
import { useSelector } from "react-redux";
import { Tab } from "semantic-ui-react";
import UserCard from "../components/UserCard";

const Home = () => {
  const users = useSelector((state) => state.users);
  const authUser = useSelector((state) => state.authUser);
  const questions = useSelector((state) => state.questions);
  const answeredIds = Object.keys(users[authUser].answers);
  const answered = Object.values(questions)
    .filter((question) => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const unanswered = Object.values(questions)
    .filter((question) => answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  const userQuestionData = { answered, unanswered };

  const panes = () => {
    return [
      {
        menuItem: "Unanswered",
        render: () => (
          <Tab.Pane>
            {userQuestionData.answered.map((question) => (
              <UserCard
                key={question.id}
                question_id={question.id}
                unanswered={true}
              />
            ))}
          </Tab.Pane>
        ),
      },
      {
        menuItem: "Answered",
        render: () => (
          <Tab.Pane>
            {userQuestionData.unanswered.map((question) => (
              <UserCard
                key={question.id}
                question_id={question.id}
                unanswered={false}
              />
            ))}
          </Tab.Pane>
        ),
      },
    ];
  };

  return <Tab panes={panes({ userQuestionData })} className="tab" />;
};



export default Home;
