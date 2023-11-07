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
        <div onClick={(e) => this.props.toggleFn(e)}>
          <Checkmark done={this.props.done} />
        </div>

        <p className="list-item">{this.props.title}</p>
        <button className="delete" onClick={(e) => this.props.deleteFn(e)}>
          -Delete
        </button>
      </div>
    );
  }
}

Todo.propTypes = {
  done: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  toggleFn: PropTypes.func.isRequired,
  deleteFn: PropTypes.func.isRequired,
};

Todo.defaultProps = {
  title: "no title",
};

export default Todo;
