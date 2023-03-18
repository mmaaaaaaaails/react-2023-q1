import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './home.module.scss';

class Home extends React.Component<any, any> {
    render() {

        return (
            <>
                <header className={styles.header}>
                    <NavLink
                        className={(e) => (e.isActive ? styles.active : styles.header_link)}
                        to='/'>
                        Home
                    </NavLink>
                    <NavLink className={styles.header_link} to='/about'>About</NavLink>
                </header>
                <div>
                    <h4>This is a Home Page</h4>
                </div>
            </>
        );
    }
}

export default Home;
