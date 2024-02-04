import { ReactComponent as MainImage } from 'assets/images/car-header 1.svg';
import './styles.css';
import ButtonIcon from 'components/ButtonIcon';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card-container">
        <div className="home-content-container">
          <div className="home-image-container">
            <MainImage />
          </div>
          <div className="home-txt-container">
            <h3>O carro perfeito para você</h3>
            <h4>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </h4>
          </div>
        </div>
      </div>
      <div className="base-card-container2">
        <div className="home-content-container2">
          <div>
            <ButtonIcon />
          </div>
          <div>
            <h4>Comece agora a navegar</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
