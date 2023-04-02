import React, {useEffect, useState} from 'react';
import styles from './home.module.scss';
import Card from '../card/Card';
import axios from 'axios';
import Search from '../search/Search';
import Header from '../header/Header';
import {CardInfo, GetCardInfoResponse} from '../../utils/help';

const Home = () => {

    const [card, setCard] = useState<CardInfo[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getData = async () => {
        try {
            const response = await axios.get<GetCardInfoResponse>('card.json');
            const data = response.data;
            setCard(data);
        } catch {
            throw new Error('error');
        }
    }

    useEffect(() => {
        setIsLoading(true)
        getData();
        setIsLoading(false)
    }, [])

    return (
        <>
            <Header/>
            <div>
                <h4 className={styles.title}>This is a Home Page</h4>
                <Search/>
                <div className={styles.wrapper}>
                    { isLoading ?
                        (<h3 className={styles.title}> Идет загрузка ... </h3>)
                        :
                        (card.map((obj: CardInfo) => {
                            return (
                                <Card
                                    key={obj.id}
                                    name = {obj.name}
                                    description={obj.description}
                                    likes={obj.likes}
                                    comments={obj.comments}
                                    image = {obj.image}
                                    id={obj.id}
                                />)
                        }))
                    }
                </div>
            </div>
        </>
    );
}

export default Home;
