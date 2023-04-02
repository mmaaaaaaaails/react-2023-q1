import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './header.module.scss';

const Header = () => {

    return (
        <>
            <header className={styles.header}>
                <NavLink
                    className={({ isActive }) => isActive ? styles.active : styles.header_link}
                    to="/">
                    Home
                </NavLink>
                <NavLink
                    className={({ isActive }) => isActive ? styles.active : styles.header_link}
                    to="/about">
                    About
                </NavLink>
                <NavLink
                    className={({ isActive }) => isActive ? styles.active : styles.header_link}
                    to="/form">
                    Form
                </NavLink>
            </header>
        </>
    );
}

export default Header;
