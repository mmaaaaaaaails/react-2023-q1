import React from 'react';
import styles from './form.module.scss';
import Header from './Header';
import CardDataForm, {ICardDataForm} from './CardDataForm';

const cities:string[] = ['Minsk', 'London', 'Paris']

class Form extends React.Component<unknown> {

    state = {
        cards: []
    }

    inputName = React.createRef<HTMLInputElement>();
    inputZip = React.createRef<HTMLInputElement>();
    inputDate = React.createRef<HTMLInputElement>();
    selectRef = React.createRef<HTMLSelectElement>();
    inputFile= React.createRef<HTMLInputElement>();
    inputCheckbox= React.createRef<HTMLInputElement>();
    inputRadioMale= React.createRef<HTMLInputElement>();
    inputRadioFeMale= React.createRef<HTMLInputElement>();

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const card = {
            name: this.inputName.current?.value,
            zipCode: this.inputZip.current?.value,
            birthday: this.inputDate.current?.value,
            select: this.selectRef.current?.value,
            radioMale: this.inputRadioMale.current?.value,
            radioFeMale: this.inputRadioFeMale.current?.value,
            image: URL.createObjectURL(this.inputFile.current?.files?.[0] as Blob)
        }

        if (this.inputRadioMale.current?.checked) {
            console.log('male')
        } else if (this.inputRadioFeMale.current?.checked) {
            console.log('female')
        }

        if (this.inputCheckbox.current?.checked) {
            console.log('check')
        }

        this.setState((prevState:any) => ({
            cards: [...prevState.cards, card]
        }));
    }

    render() {
        return (
            <>
                <Header/>
                <div className={styles.wrapper}>
                    <div>
                        <h4 className={styles.title}>This is a Form page</h4>
                    </div>
                    <div className={styles.box}>
                        <form
                            className={styles.container}
                            onSubmit={this.handleSubmit.bind(this)}
                        >
                            <label className={styles.label}>
                                Name:
                                <input
                                    className={styles.input}
                                    type="text"
                                    placeholder="Enter your name"
                                    ref={this.inputName}
                                />
                            </label>
                            <label className={styles.label}>
                                Zip code:
                                <input
                                    className={styles.input}
                                    type="text"
                                    placeholder="Enter your index"
                                    ref={this.inputZip}
                                />
                            </label>
                            <label className={styles.label}>
                                Birthday:
                                <input
                                    className={styles.input}
                                    type="date"
                                    ref={this.inputDate}
                                />
                            </label>
                            <label className={styles.label}>
                                Location:
                                <select
                                    name="select"
                                    className={styles.input}
                                    ref={this.selectRef}
                                >
                                    {cities.map(function(city:string, index:number) {
                                        return (
                                            <option
                                                key={index}
                                                value={city}
                                            >
                                                {city}
                                            </option>);
                                    })}
                                </select>
                            </label>
                            <div className={styles.radio}>
                                <label className={styles.radio_label}> Male
                                    <input
                                        type="radio"
                                        value="male"
                                        name="gender"
                                        ref={this.inputRadioMale}
                                        className={styles.radio_circle}
                                    />
                                </label>
                                <label className={styles.radio_label}> Female
                                    <input
                                        type="radio"
                                        value="female"
                                        name="gender"
                                        ref={this.inputRadioFeMale}
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
                                />
                            </label>
                            <label className={styles.checkbox}>I consent to my personal data
                                <input
                                    className={styles.checkbox_input}
                                    type="checkbox"
                                    ref={this.inputCheckbox}
                                />
                            </label>
                            <button
                                className={styles.button}
                            >
                                Send
                            </button>
                        </form>
                        <div className={styles.data}>
                            {
                                this.state.cards.map((obj:ICardDataForm, index) => {
                                    return (
                                        <CardDataForm
                                            key={index}
                                            name = {obj.name}
                                            zipCode = {obj.zipCode}
                                            birthday = {obj.birthday}
                                            select = {obj.select}
                                            image={obj.image}
                                            radioMale={obj.radioMale}
                                            radioFeMale={obj.radioFeMale}
                                        />)
                                })
                            }
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Form;
