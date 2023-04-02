import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import styles from './search.module.scss';

const Search = () => {

    const [value, setValue] = useState('');

    const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const valueLocal = localStorage.getItem('value') || '';
        setValue(valueLocal)
    };

    useEffect(() => {
        localStorage.setItem('value', value);
    }, [value])

    return (
        <form
            onSubmit={handleFormSubmit}
            className={styles.content}
        >
            <label htmlFor="search"/>
            <input
                ref={inputRef}
                value={value}
                onChange={handleChange}
                className={styles.input}
                type="text"
                placeholder="Search bar"
            />
        </form>
    );
}

export default Search;
