const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Courses = ( {courses} ) => {
  return (
    <div>
      {courses.map((course) => (
        <Course course={course} key={course.id} />
      ))}
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header id={course.id} name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}


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

const Total = ({ parts }) => {
  const countAll = parts.map((n) => n.exercises);

  const total = countAll.reduce((prevValue, value) => {
    return prevValue + value;
  }, 0);

  return <strong>Number of exercises {total} </strong>;
};

const Components = (props) => {
  const { courses } = props;
  return <Courses courses={courses} />;
};

export default Components;
