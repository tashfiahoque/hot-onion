import React from 'react';
import './Header.css';
import logo2 from './logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { categoryContext } from '../../App';
import FoodItems from '../FoodItems/FoodItems';


const Header = () => {
    const [category, setCategory] = useContext(categoryContext);

    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand logo" href="#"><img src={logo2} alt="" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse menu" id="navbarNav">
                        <ul className="navbar-nav justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link" href="#"><span className="icon">0</span> <FontAwesomeIcon className="icon2" icon={faShoppingCart} /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Log in</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Sign Up<span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <section className="banner">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center">Best Food Waiting For Your Belly</h1>
                    </div>
                </div>
            </section>
            <section className="menu-2">
                <ul class="nav justify-content-center">
                    <li class="nav-item" onClick={() => setCategory('breakfast')}>Breakfast</li>
                    <li class="nav-item" onClick={() => setCategory('lunch')}>Lunch</li>
                    <li class="nav-item" onClick={() => setCategory('dinner')}>Dinner</li>
                </ul>
            </section>
            <div className="container px-2">
                <div className="row">
                    <div className="col-md-12 row">
                        <FoodItems />
                    </div>
                </div>
                <button className="btn btn-sm btn-primary text-center">Proceed Check Out</button>
            </div>
        </>
    );
};

export default Header;