import './styles.css';
import { NavLink } from 'react-router-dom';

const ButtonIcon = () => {
  return (
    <NavLink to="/products">
      <div className="btn-container">
        <div className="btn-container button">
          <button className="btn btn-property">
            <h6>VER CATÁLOGO</h6>
          </button>
        </div>
      </div>
    </NavLink>
  );
};

export default ButtonIcon;
