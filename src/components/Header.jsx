import PropTypes from "prop-types";
import "../styles/Header.css";

const Header = ({ counter = 0 }) => {
  return (
    <div className="encabezado">
      <h1 className="carde-header-title header">
        {/* {`Hay ${cantidad} tareas por hacer`} */}
        {`Hay ${counter} tareas por hacer`}
        {/* {props.counter} tareas por hacer */}
      </h1>
    </div>
  );
};

Header.propTypes = {
  counter: PropTypes.number,
};

// Header.defaultProps = {
//   counter: 0
// }

export default Header;
