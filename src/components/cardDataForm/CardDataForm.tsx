import React from 'react';
import styles from './cardDataForm.module.scss';
import {ICardDataForm} from '../../utils/help';

const CardDataForm: React.FC<ICardDataForm> = ({ name, zipCode, birthday, select, radio,image }) => {

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <p className={styles.title}>Name:
                    <span className={styles.text}>{name}</span>
                </p>
                <p className={styles.title}>ZipCode:
                    <span className={styles.text}>{zipCode}</span>
                </p>
                <p className={styles.title}>Birthday:
                    <span className={styles.text}>{birthday}</span>
                </p>
                <p className={styles.title}>Location:
                    <span className={styles.text}>{select}</span>
                </p>
                <p className={styles.title}>Gender:
                    <span className={styles.text}>{radio}</span>
                </p>
            </div>
            <img className={styles.img} src={image} alt="photo" />
        </div>
    );
}

export default CardDataForm;
