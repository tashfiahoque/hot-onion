import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { categoryContext } from '../../App';

const FoodItemDetails = (props) => {
    const { title, avatar, subtitle, price, id } = props.foodgroup;



    return (
        <Link to={`fooditem/${id}`}><div className="single-item text-center my-4">
            <div className="card p-2">
                <img className="card-img-top" src={avatar} alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h4 className="card-title">{subtitle}</h4>
                    <h4 className="price">{price}</h4>
                </div>
            </div>
        </div>
        </Link>

    );
};

export default FoodItemDetails;