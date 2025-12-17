import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MenuCard from '../components/MenuCard';

const Home = () => {
  const [menus, setMenus] = useState([]);
  const [boxesData, setBoxesData] = useState([]);
  const { type, filtre } = useParams(); 
  useEffect(() => {
    fetch('/boxes.json')
      .then(response => {
        if (!response.ok) {
           throw new Error("Impossible de charger le fichier JSON");
        }
        return response.json();
      })
      .then(data => {
        const fixedData = data.map(item => {
            if (item.image.startsWith('http') || item.image.startsWith('/')) {
                return item;
            }
            return { ...item, image: `/${item.image}` };
        });

        setBoxesData(fixedData);
      })
      .catch(error => console.error("Erreur de chargement:", error));
  }, []);
  useEffect(() => {

    if (boxesData.length === 0) return;
    let data = boxesData;
    if (type) {
        data = data.filter(box => 
            box.saveurs.includes(type)
        );
    }
    if (filtre === 'sans-california') {
        data = data.filter(box => 
            !box.aliments.some(alim => alim.nom === "California Saumon Avocat")
        );
    }
    setMenus(data);
  }, [type, filtre, boxesData]);
  return (
    <div className="container my-5">
      <h2 className="text-center mb-5 fw-bold">
        {type ? `Avec ${type}` : 
         filtre ? "Sans California" : 
         "Toute la Carte"}
      </h2>
      {menus.length === 0 ? (
          <div className="text-center">
            {boxesData.length === 0 ? "Chargement..." : "Aucun menu ne correspond à ce filtre."}
          </div>
      ) : (
          <div className="row">
            {menus.map((box) => (
              <MenuCard key={box.id} box={box} />
            ))}
          </div>
      )}
    </div>
  );
};

export default Home;