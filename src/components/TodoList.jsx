import Todo from "./Todo";
import Proptypes from "prop-types";
import "../styles/TodoList.css";

const TodoList = ({ tasks, toggleFn, deleteFn }) => {
  return (
    <div style={{ padding: "5px 0" }}>
      <h1>Todo List: </h1>
      {
      tasks.map((elem, index) => 
        <Todo 
        key={index} 
        done={elem.done} 
        title={elem.title} 
        deleteFn={(e) => deleteFn(e, index)}
        toggleFn={(e) => toggleFn(e, index)}
        />
      )
      }
    </div>
  );
};

TodoList.propTypes = {
  tasks: Proptypes.array,
  toggleFn: Proptypes.func.isRequired,
  deleteFn: Proptypes.func.isRequired,
};

TodoList.defaultProps = {
  tasks: [],
};

export default TodoList;
