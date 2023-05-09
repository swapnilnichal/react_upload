import React, { Component } from 'react';
import Navbarcomponent from './Navbar';
import styles from './styles.css';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

class Home extends Component {
    render() {
        return (
            <div className='home-wrapper'>
                <Navbarcomponent />
               <div className="home">
                <img src='https://png.pngtree.com/thumb_back/fw800/background/20230304/pngtree-future-decadent-city-ruins-car-buildings-background-image_1745128.jpg' />
                </div>
            </div>
        );
    }
}

export default Home;