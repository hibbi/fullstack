import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

const Stat = ({ stat, text }) => {
  return (
    <p>
      {text} {stat}
    </p>
  );
};

const Statistics = (props) => {
  const isAnythingClicked = props.good + props.neutral + props.bad;

  if (isAnythingClicked === 0) {
    return (
      <div>
        <Header title={props.title} />
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <Header title={props.title} />
      <Stat text="good" stat={props.good} />
      <Stat text="neutral" stat={props.neutral} />
      <Stat text="bad" stat={props.bad} />
      <Stat text="all" stat={props.all} />
      <Stat text="positive" stat={(props.good / props.all) * 100 + "%"} />
      <Stat text="average" stat={props.average} />
    </div>
  );
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text={"good"} />
      <Button handleClick={handleNeutralClick} text={"neutral"} />
      <Button handleClick={handleBadClick} text={"bad"} />
      <Statistics
        title="statistics"
        good={good}
        neutral={neutral}
        bad={bad}
        all={good + neutral + bad}
        average={(good - bad) / (good + neutral + bad)}
      />
    </div>
  );
};

export default App;
