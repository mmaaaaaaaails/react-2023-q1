import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './about.module.scss';

class About extends React.Component<any> {

    render() {
        return (
            <>
                <header className={styles.header}>
                    <NavLink className={styles.header_link} to='/'>Home</NavLink>
                    <NavLink
                        className={(e) => (e.isActive ? styles.active : styles.header_link)}
                        to='/about'>
                        About
                    </NavLink>
                </header>
                <div>
                    <h4>This is a About us Page</h4>
                </div>
            </>
        );
    }
};

export default About;
