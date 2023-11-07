import { Component } from "react";
import PropTypes from "prop-types";
import Checkmark from "./Checkmark";
import "../styles/Todo.css";
import "../styles/Checkmark.css";

class Todo extends Component {
  render() {
    return (
      <div
        className={`todo-container ${this.props.done ? "dim-completed" : ""}`}
      >
        <Checkmark done={this.props.done} />
        <p className="list-item">{this.props.title}</p>
        <button className="delete"> -Save Change </button>
      </div>
    );
  }
}

Todo.propTypes = {
  done: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

Todo.defaultProps = {
  title: "no title",
};

export default Todo;
