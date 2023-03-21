import Course from "./components/Course";

const App = () => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      {Course.map((courses) => (
        <div key={courses.id}>
          <h2>{courses.name}</h2>
          {courses.parts.map((parts) => (
            <p key={parts.id}>
              {parts.name} {parts.exercises}
            </p>
          ))}
          <p>
            <b>
              total of{" "}
              {courses.parts.reduce((sum, parts) => sum + parts.exercises, 0)}{" "}
              exercises
            </b>
          </p>
        </div>
      ))}
    </div>
  );
};

export default App;
