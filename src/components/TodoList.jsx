import Todo from "./Todo";
import Proptypes from "prop-types";
import "../styles/TodoList.css";

const TodoList = ({ tasks }) => {
  return (
    <div style={{ padding: "5px 0", backgroundColor: "aquamarine" }}>
      <h1>Todo List: </h1>
      {tasks.map((elem, index) => (
        <Todo key={index} done={elem.done} title={elem.title} />
      ))}
    </div>
  );
};

TodoList.propTypes = {
  tasks: Proptypes.array,
};

TodoList.defaultProps = {
  tasks: [],
};

export default TodoList;
