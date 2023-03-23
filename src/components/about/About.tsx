import React from 'react';
import styles from './about.module.scss';
import Header from '../header/Header';

class About extends React.Component<unknown> {

    render() {
        return (
            <>
                <Header/>
                <div>
                    <h4 className={styles.title}>This is a About us Page</h4>
                </div>
            </>
        );
    }
};

export default About;
