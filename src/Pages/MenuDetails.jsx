import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const MenuDetails = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetch('/boxes.json')
      .then(response => response.json())
      .then(data => {
        const foundMenu = data.find(item => item.id === parseInt(id));

        if (foundMenu) {
            if (!foundMenu.image.startsWith('http') && !foundMenu.image.startsWith('/')) {
                foundMenu.image = `/${foundMenu.image}`;
            }
            setMenu(foundMenu);
        }
      })
      .catch(err => console.error("Erreur chargement menu", err));
  }, [id]);

  if (!menu) return <div className="text-center mt-5">Chargement du menu...</div>;

  return (
    <div className="container mt-5">
        <Link to="/" className="btn btn-secondary mb-3">Retour à la carte</Link>
        <div className="row">
            <div className="col-md-6">
                 <img src={menu.image} className="img-fluid rounded shadow-sm" alt={menu.nom} style={{ maxHeight: '500px', width: '1000px', objectFit: 'contain' }} />
            </div>
            <div className="col-md-6">
                <h2 className="fw-bold">{menu.nom}</h2>
                <p className="h4 text-primary my-3">{menu.prix.toFixed(2)}€ <small className="text-muted">({menu.pieces} pièces)</small></p>
                <hr />

                <h5>Saveurs :</h5>
                <div className="mb-3">
                    {menu.saveurs.map((saveur, index) => (
                        <span key={index} className="badge bg-info text-dark me-2">
                            {saveur}
                        </span>
                    ))}
                </div>
                
                <h5>Composition :</h5>
                <ul className="list-group">
                    {menu.aliments.map((a, i) => (
                        <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                            {a.nom}
                            <span className="badge bg-secondary rounded-pill">x{a.quantite}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  );
};

export default MenuDetails;