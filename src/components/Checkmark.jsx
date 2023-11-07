import check from "../assets/checkmark.svg";
import PropTypes from 'prop-types';
import '../styles/Checkmark.css'

const Checkmark = ({ done }) => {
  return (
    <div>
        { done ?
            <img className="image-size" src={check} alt="Checkmark" />
            : <div className="image-size"></div> }
    </div>
    );
}

Checkmark.proptype = {
    done: PropTypes.bool,
}

export default Checkmark;