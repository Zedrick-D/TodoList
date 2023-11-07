import { Component } from "react";
import PropTypes from "prop-types";
import Checkmark from "./Checkmark";
import "../styles/Todo.css";
import "../styles/Checkmark.css";

class Todo extends Component {
  // // El estado es la palabra reservada para definir el estado de un componente
  // state = {
  //   done: false,
  // };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     done: false
  //   }
  // }

  // elementoTodo = () => {
  //   return (
  //     <>
  //       <p className="list-item">Tarea por hacer </p>
  //       <button className="delete"> -Save Change </button>
  //     </>
  //   );
  // };

  render() {
    return (
      <div
        className={`todo-container ${this.props.done ? "dim-completed" : ""}`}
      >
        {
          // this.props.done && <Checkmark/>
          //this.props.done ? <Checkmark /> : <div className="image-size"></div>
        }
        <Checkmark done={this.props.done} />
        <p className="list-item">{this.props.title}</p>
        <button className="delete"> -Save Change </button>
        {/* <p className="list-item">Tarea por hacer </p>
        <button className="delete"> -Save Change </button> */}
        {/* Ojito aqui */}
        {/* onClick={() => {this.setState({ done: true })}} */}
        {/* {this.elementoTodo()} */}
      </div>
    );
  }
}

Todo.propTypes = {
  done: PropTypes.bool,
  title: PropTypes.string.isRequired
};

Todo.defaultProps = {
  title: "no title"
}
export default Todo;

// const Todo = () => {
//   return (
//     <div className="todo-container">
//       <p className="list-item">Tarea por hacer  </p>
//       <button className="delete"> - </button>
//     </div>
//   );
// };
