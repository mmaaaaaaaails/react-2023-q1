import React from 'react';
import styles from './notFoundPage.module.scss';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {

    return (
        <div>
            <h3 className={styles.title}>404 error</h3>
            <Link className={styles.btn} to='/'>go home</Link>
        </div>
    );
}

export default NotFoundPage;
