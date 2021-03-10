import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { categoryContext } from '../../App';
import fakeData from '../FoodItems/fakeData';

const SelectedItem = () => {
    const [category] = useContext(categoryContext);
    const { id } = useParams();
    const result = fakeData.filter((item) => item.id === parseInt(id))

    return (
        <div>
            this is a selected item of {category} {id}

            {
                result.map((item) => <h1>{item.title}</h1>)
            }

        </div>
    );
};
export default SelectedItem;
