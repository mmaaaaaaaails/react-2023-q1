import React from 'react';
import styles from './form.module.scss';
import Header from './Header';

class Form extends React.Component<unknown> {

    render() {
        return (
            <>
                <Header/>
                <div>
                    <h4 className={styles.title}>This is a Form page</h4>
                </div>
            </>
        );
    }
};

export default Form;
