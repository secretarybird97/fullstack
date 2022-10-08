const App = () => {
  const Header = (props) => {
    return (
      <h1> {props.course_name} </h1>
    )
  }

  const Content = (props) => {
    return (
      <div>
        <Part part={props.part1} exercises={props.excersises1}/>
        <Part part={props.part2} exercises={props.excersises2}/>
        <Part part={props.part3} exercises={props.excersises3}/>
      </div>
    )
  }

  const Total = (props) => {
    return (
      <div>
        <p>Number of exercises {props.total}</p>
      </div>
    )
  }

  const Part = (props) => {
    return (
      <div>
        <p>
          {props.part} {props.exercises}
        </p>
      </div>
    )
  }

  return (
    <div>
      <Header course_name={'Half Stack application development'} />
      <Content part1={'Fundamentals of React'} excersises1={10} 
        part2={'Using props to pass data'} exercises2={7} 
        part3={'State of a component'} exercises3={14} />
      <Total total={10+7+14}/>
    </div>
  )
}

export default App