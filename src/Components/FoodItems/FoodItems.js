import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { categoryContext } from '../../App';
import FoodItemDetails from '../FoodItemDetails/FoodItemDetails';
import fakeData from './fakeData';

const FoodItems = () => {
    const [category] = useContext(categoryContext);
    const [selectedFoodItem, setSelectedFoodItem] = useState([]);
   useEffect(() => {
        const matchedFoodItems = fakeData.filter(menuItems => menuItems.category === category);
        setSelectedFoodItem(matchedFoodItems);
    }, [category]);

    return ( 
        <>
            {
                selectedFoodItem.map(foodgroup => <div className="col-md-4"><FoodItemDetails foodgroup={foodgroup}></FoodItemDetails></div>)
            }
        </>    
    );
};

export default FoodItems;