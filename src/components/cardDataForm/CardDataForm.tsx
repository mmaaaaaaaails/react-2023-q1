import React from 'react';
import styles from './cardDataForm.module.scss';
import {ICardDataForm} from '../../utils/interface';

class CardDataForm extends React.Component<ICardDataForm> {

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.info}>
                    <p className={styles.title}>Name:
                        <span className={styles.text}>{this.props.name}</span>
                    </p>
                    <p className={styles.title}>ZipCode:
                        <span className={styles.text}>{this.props.zipCode}</span>
                    </p>
                    <p className={styles.title}>Birthday:
                        <span className={styles.text}>{this.props.birthday}</span>
                    </p>
                    <p className={styles.title}>Location:
                        <span className={styles.text}>{this.props.select}</span>
                    </p>
                    <p className={styles.title}>Gender:
                        <span className={styles.text}>{this.props.radio}</span>
                    </p>
                </div>
                <img className={styles.img} src={this.props.image} alt="photo" />
            </div>
        );
    }
}

export default CardDataForm;
