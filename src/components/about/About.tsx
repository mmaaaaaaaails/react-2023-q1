import React from 'react';
import styles from './about.module.scss';
import Header from '../header/Header';

const About = () => {

    return (
        <>
            <Header/>
            <div>
                <h4 className={styles.title}>This is a About us Page</h4>
            </div>
        </>
    );
}

export default About;
