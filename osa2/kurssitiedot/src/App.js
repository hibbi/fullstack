const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Course = (props) => {
  const { course } = props;
  const countAll = course.parts.map((n) => n.exercises);
  let total = 0;

  for (const value of countAll) {
    total += value;
  }

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total counter={total} />
    </div>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </>
  );
};

const Total = ({ counter }) => {
  return <strong>Number of exercises {counter}</strong>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };
  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;
