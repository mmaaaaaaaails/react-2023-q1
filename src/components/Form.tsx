import React from 'react';
import styles from './form.module.scss';
import Header from './Header';

const cities:string[] = ['Minsk', 'London', 'Paris']

class Form extends React.Component<unknown> {

    inputName = React.createRef<HTMLInputElement>();
    inputZip = React.createRef<HTMLInputElement>();
    inputDate = React.createRef<HTMLInputElement>();
    selectRef = React.createRef<HTMLSelectElement>();
    inputFile = React.createRef<HTMLInputElement>();

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        console.log('submit')
        event.preventDefault();
    }

    render() {
        return (
            <>
                <Header/>
                <div className={styles.wrapper}>
                    <div>
                        <h4 className={styles.title}>This is a Form page</h4>
                    </div>
                    <form
                        className={styles.container}
                        onSubmit={this.handleSubmit}
                    >
                        <label className={styles.label}>
                            Name:
                            <input
                                className={styles.input}
                                type="text"
                                placeholder="Enter your name"
                                ref={this.inputName}
                                required
                            />
                        </label>
                        <label className={styles.label}>
                            Zip code:
                            <input
                                className={styles.input}
                                type="text"
                                placeholder="Enter your index"
                                ref={this.inputZip}
                                required
                            />
                        </label>
                        <label className={styles.label}>
                            Birthday:
                            <input
                                className={styles.input}
                                type="date"
                                ref={this.inputDate}
                                required
                            />
                        </label>
                        <label className={styles.label}>
                            Location:
                            <select
                                name="select"
                                className={styles.input}
                                ref={this.selectRef}
                                required
                            >
                                {cities.map(function(city:string, index:number) {
                                    return (<option key={index} value={city}>{city}</option>);
                                })}
                            </select>
                        </label>
                        <div className={styles.radio}>
                            <label className={styles.radio_label}> Male
                                <input
                                    type="radio"
                                    value="MALE"
                                    name="gender"
                                    defaultChecked
                                    className={styles.radio_circle}
                                />
                            </label>
                            <label className={styles.radio_label}> Female
                                <input
                                    type="radio"
                                    value="FEMALE"
                                    name="gender"
                                    className={styles.radio_circle}
                                />
                            </label>
                        </div>
                        <label className={styles.label}>
                            Load file:
                            <input
                                className={styles.input}
                                type="file"
                                ref={this.inputFile}
                                required
                            />
                        </label>
                        <label className={styles.checkbox}>I consent to my personal data
                            <input className={styles.checkbox_input} type="checkbox"/>
                        </label>
                        <button
                            className={styles.button}
                            type='submit'
                        >
                            Send
                        </button>
                    </form>
                </div>
            </>
        );
    }
}

export default Form;
