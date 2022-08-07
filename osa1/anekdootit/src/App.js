import { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const DisplayVote = ({ vote }) => {
  return <p>has {vote} votes</p>;
};

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const DisplayAnecdote = ({ anecdote }) => {
  return <p>{anecdote}</p>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const numberOfAnecdotes = anecdotes.length;
  const [votes, setVotes] = useState(Array(numberOfAnecdotes).fill(0));

  const highestVoteCount = Math.max(...votes);
  const idxOfHighestVote = votes.indexOf(highestVoteCount);

  const handleSelected = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const handleVotes = () => {
    const copyOfVotes = [...votes];
    copyOfVotes[selected] += 1;
    setVotes(copyOfVotes);
  };

  return (
    <>
      <div>
        <Header text="Anecdote of the day" />
        <DisplayAnecdote anecdote={anecdotes[selected]} />
        <DisplayVote vote={votes[selected]} />
        <Button handleClick={handleVotes} text={"vote"} />
        <Button handleClick={handleSelected} text={"randomize anecdote"} />
      </div>
      <div>
        <Header text="Anecdote with most votes" />
        <DisplayAnecdote anecdote={anecdotes[idxOfHighestVote]} />
        <DisplayVote vote={highestVoteCount} />
      </div>
    </>
  );
};

export default App;
