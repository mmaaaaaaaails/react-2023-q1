import React from 'react';
import styles from './notFoundPage.module.scss';
import { Link } from 'react-router-dom';

type Error = {
    value: string
}

class NotFoundPage extends React.Component<Error> {
    render() {

        const { value } = this.props

        return (
            <div>
                <h3 className={styles.title}>{value}</h3>
                <Link className={styles.btn} to='/'>go home</Link>
            </div>
        );
    }
};

export default NotFoundPage;
