import React from 'react';
import styles from './search.module.scss';

class Search extends React.Component<unknown> {

    render() {
        return (
            <div className={styles.content}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Search bar"
                />
            </div>
        );
    }
}

export default Search;
