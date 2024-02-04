import ProductCard from 'components/ProductCard';
import './styles.css';

const Catalog = () => {
  return (
    <div className="container">
      <div className="search-container">
        <div className="search-content">
          <input
            className="inputbar-container"
            type="text"
            placeholder="Digite sua busca"
          />
          <div className="btn-container">
            <div className="btn-container button">
              <button className="btn btn-property">
                <h6>BUSCAR</h6>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-4">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
