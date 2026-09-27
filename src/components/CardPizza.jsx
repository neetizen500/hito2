import { formatCurrency } from "../utils/formatCurrency";

const CardPizza = ({ name, description, price, image }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={image} className="card-img-top pizza-thumb" alt={name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{name}</h5>
        <p className="card-text text-muted flex-grow-1">{description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="h5 text-danger fw-bold mb-0">
            ${formatCurrency(price)}
          </span>
          <button className="btn btn-danger btn-sm">Agregar</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
