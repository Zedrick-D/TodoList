import { Component } from "react";
import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";
import "../styles/App.css";

class App extends Component {
  state = {
    todos: [],
    showButton: true,
  };

  handleClick = (e) => {
    this.setState({
      todos: [
        { title: "tarea 1", done: false },
        { title: "tarea 2", done: true },
        { title: "tarea 3", done: false },
        { title: "tarea 4", done: false },
        { title: "tarea 5", done: true },
        { title: "tarea 6", done: false },
        { title: "tarea 7", done: false },
      ],
      showButton: false,
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="card-frame">
          <Header counter={this.state.todos.length} />
          <TodoList tasks={this.state.todos} />
          <Form />
          {this.state.showButton ? (
            <button onClick={this.handleClick}>Inicializar</button>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
