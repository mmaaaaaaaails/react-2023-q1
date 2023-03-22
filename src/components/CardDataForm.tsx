import React from 'react';
import styles from './cardDataForm.module.scss';

export interface ICardDataForm {
    name: string;
    zipCode: string;
    birthday: string;
    select: string;
    image: string;
    radioMale: string;
    radioFeMale: string;
}

class CardDataForm extends React.Component<ICardDataForm> {

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.info}>
                    <p className={styles.title}>Name: {this.props.name}</p>
                    <p className={styles.title}>ZipCode: {this.props.zipCode}</p>
                    <p className={styles.title}>Birthday: {this.props.birthday}</p>
                    <p className={styles.title}>Location: {this.props.select}</p>
                    <p className={styles.title}> {this.props.radioMale}</p>
                    <p className={styles.title}> {this.props.radioFeMale}</p>
                </div>
                <img className={styles.img} src={this.props.image} alt="photo" />
            </div>
        );
    }
}

export default CardDataForm;
