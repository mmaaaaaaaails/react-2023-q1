import React from 'react';
import styles from './search.module.scss';

class Search extends React.Component<unknown> {

    state = {
        value: ''
    }

    handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({value: e.currentTarget.value })
    }

    handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        localStorage.setItem('value', this.state.value);
    };

    componentWillUnmount() {
        const value = localStorage.getItem('value');
        this.setState({ value });
    }

    render() {
        return (
            <form
                onSubmit={this.handleFormSubmit}
                className={styles.content}
            >
                <label htmlFor="search"/>
                <input
                    value={this.state.value}
                    onChange={this.handleChange}
                    className={styles.input}
                    type="text"
                    placeholder="Search bar"
                />
            </form>
        );
    }
}

export default Search;
