import "./card.css";
import Flag from "../../assets/germany.png";

const Card = () => {
  return (
    <li className="card__item mb-5 mx-auto mx-xl-0">
      <img src={Flag} alt="germany flag" />
      <div className="p-4">
        <h3 className="title">Germany</h3>
        <p className="text mb-2">
          Population: <span>81,770,900</span>
        </p>
        <p className="text mb-2">
          Region: <span>Europe</span>
        </p>
        <p className="text mb-0">
          Capital: <span>Berlin</span>
        </p>
      </div>
    </li>
  );
};

export default Card;
