import React from 'react';
import styles from './home.module.scss';
import Card, {ICard}  from './Card';
import axios from 'axios';
import Search from './Search';
import Header from './Header';

class Home extends React.Component<unknown> {

    state = {
        card: []
    }

    async componentDidMount() {
        try {
            const response = await axios.get('card.json');
            const data = response.data;
            this.setState({
                card: data
            });
        } catch {
            throw new Error('error');
        }
    }

    render() {

        return (
            <>
                <Header
                    pageJump={'/About'}
                    nameJump={'About'}
                    pageCurrent={'/'}
                    nameCurrent={'Home'}
                />
                <div>
                    <h4 className={styles.title}>This is a Home Page</h4>
                    <Search/>
                    <div className={styles.wrapper}>
                        {
                            this.state.card.map((obj: ICard) => {
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
                            })
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default Home;
