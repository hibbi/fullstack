import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Header = ({ title }) => {
  return <h1>{title}</h1>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
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
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.all} />
          <StatisticLine
            text="positive"
            value={(props.good / props.all) * 100 + "%"}
          />
          <StatisticLine text="average" value={props.average} />
        </tbody>
      </table>
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
      <Header title="give feedback" />
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
