import { Component } from "react";
import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";
import "../styles/App.css";

class App extends Component {
  state = {
    todos: [],
    todosOriginales: []
    //showButton: true,
  };

  componentDidMount() {
    // aqui se puede hacer fetch para traer algo de la  DB
    console.log('>>> componentDidMount');
    this.setState({
      todos: [
        { title: "tarea 0001", done: false },
        { title: "tarea 2", done: true },
        { title: "tarea 3", done: false },
        { title: "tarea 4", done: false },
        { title: "tarea 5", done: true },
        { title: "tarea 6", done: false },
        { title: "tarea 7", done: false },
      ],
      todosOriginales: [
        { title: "tarea 0001", done: false },
        { title: "tarea 2", done: true },
        { title: "tarea 3", done: false },
        { title: "tarea 4", done: false },
        { title: "tarea 5", done: true },
        { title: "tarea 6", done: false },
        { title: "tarea 7", done: false },
      ],
      // showButton: false,
    });
  }

  handleClickDelete =(event, index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1)
    this.setState({todos})
  }

  handleClickToggleDone = (event, index) => {
    const todos = [...this.state.todos]
    //toggle
    todos[index].done = !todos[index].done
    this.setState({todos})
  }

  handleClickReset = (e) => {
    console.log('>>> handleClickReset');
    this.setState({
      todos: [...this.state.todosOriginales]
    })
  } 

  render() {
    return (
      <div className="wrapper">
        <div className="card-frame">
          <Header counter={this.state.todos.length} />
          <TodoList 
            tasks={this.state.todos}
            toggleFn={this.handleClickToggleDone}
            deleteFn={this.handleClickDelete}
          />
          <Form />

            <button
              onClick={this.handleClickReset}
              className="btn"
            >
              Reestablecer Tareas
            </button>







          {/* {
          this.state.showButton ? (
            <button onClick={this.handleClick}>Inicializar</button>
          ) : null
          } */}
        </div>
      </div>
    );
  }
}

export default App;
