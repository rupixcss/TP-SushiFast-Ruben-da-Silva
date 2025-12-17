import React from 'react';
import { Link } from 'react-router-dom';
const MenuCard = ({ box }) => {
  return (
    <div className="col-md-4 col-lg-3 mb-4">
      <div className="sushi-card">
        <img src={box.image || "https://placehold.co/200x150?text=Sushi"} alt={box.nom} />
        <h5 className="mt-2">{box.nom}</h5> 
        <p className="price-tag">
          {box.pieces} pièces, {box.prix.toFixed(2)}€
        </p>
        <ul className="ingredient-list">
          {box.aliments.map((aliment, index) => (
            <li key={index}>
              {aliment.nom} : {aliment.quantite}
            </li>
          ))}
        </ul>
        <Link to={`/menu/${box.id}`} className="btn btn-sm btn-outline-dark mt-2">
            Voir détails
        </Link>
      </div>
    </div>
  );
};

export default MenuCard;