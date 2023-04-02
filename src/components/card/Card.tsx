import React from 'react';
import styles from './card.module.scss';
import favorite from '../../assets/images/favorite.svg';
import chat from '../../assets/images/chat.svg';
import {CardInfo} from '../../utils/help';

const Card: React.FC<CardInfo> = ({ image, name, description, likes, comments }) => {

    return (
        <div className={styles.container}>
            <img className={styles.img} src={image} alt="photo" />
            <p className={styles.title}>{name}</p>
            <p className={styles.desc}>{description}</p>
            <div className={styles.bottom}>
                <div className={styles.bottom__item}>
                    <img className={styles.bottom__img} src={favorite} alt="favorite"/>
                    <span className={styles.desc}>{likes}</span>
                </div>
                <div className={styles.bottom__item}>
                    <img className={styles.bottom__img} src={chat} alt="chat"/>
                    <span className={styles.desc}>{comments}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;
