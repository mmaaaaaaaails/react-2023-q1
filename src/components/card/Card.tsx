import React from 'react';
import styles from './card.module.scss';
import favorite from '../../assets/images/favorite.svg';
import chat from '../../assets/images/chat.svg';
import {CardInfo} from '../../utils/help';

class Card extends React.Component<CardInfo> {

    render() {
        return (
            <div className={styles.container}>
                <img className={styles.img} src={this.props.image} alt="photo" />
                <p className={styles.title}>{this.props.name}</p>
                <p className={styles.desc}>{this.props.description}</p>
                <div className={styles.bottom}>
                    <div className={styles.bottom__item}>
                        <img className={styles.bottom__img} src={favorite} alt="favorite"/>
                        <span className={styles.desc}>{this.props.likes}</span>
                    </div>
                    <div className={styles.bottom__item}>
                        <img className={styles.bottom__img} src={chat} alt="chat"/>
                        <span className={styles.desc}>{this.props.comments}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
