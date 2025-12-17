import React from 'react';
import boxesData from '../../public/boxes.json';

const Stats = () => {
    const sortedByPrice = [...boxesData].sort((a, b) => a.prix - b.prix);
    const cheapest = sortedByPrice[0];
    const mostExpensive = sortedByPrice[sortedByPrice.length - 1];
    const smallMenus = boxesData.filter(m => m.pieces < 13);
    const totalPriceSmall = smallMenus.reduce((acc, curr) => acc + curr.prix, 0);
    const withoutCalifornia = boxesData.filter(menu => 
        !menu.aliments.some(alim => alim.nom === "California Saumon Avocat")
    );
};

export default Stats;