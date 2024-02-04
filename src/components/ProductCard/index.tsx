import './styles.css';
import ProdutctImg from 'assets/images/product.png';

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="card-top-container">
        <img src={ProdutctImg} alt="Nome do produto" />
      </div>
      <div className="card-bottom-container">
        <div>
          <h6>Audi Supra TT</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
        </div>
        <div>
          <div className="btn-container">
            <div className="btn-container button">
              <button className="btn btn-property">
                <h6>COMPRAR</h6>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
