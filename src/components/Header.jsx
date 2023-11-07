import PropTypes from "prop-types";
import "../styles/Header.css";

const Header = ({ counter = 0 }) => {
  return (
    <div className="encabezado">
      <br />
      <h1 className="carde-header-title header">
        {`Hay ${counter} tareas por hacer`}
      </h1>
      <br />
      <br />
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
