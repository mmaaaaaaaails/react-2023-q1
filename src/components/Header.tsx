import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './header.module.scss';

interface INavLink {
    pageJump: string;
    nameJump: string;
    pageCurrent: string;
    nameCurrent: string;
}

class Header extends React.Component<INavLink> {

    render() {
        return (
            <>
                <header className={styles.header}>
                    <NavLink className={styles.header_link} to={this.props.pageJump}>
                        {this.props.nameJump}
                    </NavLink>
                    <NavLink
                        className={(e) => (e.isActive ? styles.active : styles.header_link)}
                        to={this.props.pageCurrent}>
                        {this.props.nameCurrent}
                    </NavLink>
                </header>
            </>
        );
    }
};

export default Header;
