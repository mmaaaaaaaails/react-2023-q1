import React from 'react';
import styles from './form.module.scss';
import Header from '../header/Header';
import CardDataForm from '../cardDataForm/CardDataForm';
import {CardsState, ICardDataForm} from '../../utils/interface';

const cities:string[] = ['Minsk', 'London', 'Paris'];

class Form extends React.Component<unknown> {

    state = {
        cards: []
    }

    inputName = React.createRef<HTMLInputElement>();
    inputZip = React.createRef<HTMLInputElement>();
    inputDate = React.createRef<HTMLInputElement>();
    selectRef = React.createRef<HTMLSelectElement>();
    inputCheckbox = React.createRef<HTMLInputElement>();
    inputRadioMale = React.createRef<HTMLInputElement>();
    inputRadioFeMale = React.createRef<HTMLInputElement>();
    inputFile = React.createRef<HTMLInputElement>();

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const name = this.inputName.current?.value;
        const zipCode = this.inputZip.current?.value;
        const male = this.inputRadioMale.current?.value;
        const female = this.inputRadioFeMale.current?.value;
        const birthday = this.inputDate.current?.value;
        const select = this.selectRef.current?.value;
        const file = this.inputFile.current?.files?.[0];

        const card = {
            name:'',
            zipCode: '',
            birthday,
            select,
            radio: '',
            image: ''
        }

        if (name != undefined) {
            if (/[A-Z, А-Я]/.test(name.charAt(0))) {
                card.name = name;
            }
        }

        if (zipCode != undefined) {
            if (zipCode.length >= 6) {
                card.zipCode = zipCode;
            }
        }

        if (male != undefined) {
            if (this.inputRadioMale.current?.checked) {
                card.radio = male
            }
        }

        if (female != undefined) {
            if (this.inputRadioFeMale.current?.checked) {
                card.radio = female
            }
        }

        if (file) {
            card.image = URL.createObjectURL(file);
        }

        if (this.inputCheckbox.current?.checked && name && zipCode && birthday && select && file) {

            this.setState((prevState: CardsState) => ({
                cards: [...prevState.cards, card]
            }));

            this.clearForm();
        }
    }

    clearForm() {
        if (
            this.inputName.current?.value &&
            this.inputZip.current?.value &&
            this.inputDate.current?.value &&
            this.selectRef.current?.value &&
            this.inputCheckbox.current?.value &&
            this.inputRadioFeMale.current?.value &&
            this.inputRadioMale.current?.value &&
            this.inputFile.current?.value != undefined)
        {
            this.inputName.current.value = '';
            this.inputZip.current.value = '';
            this.inputDate.current.value = '';
            this.selectRef.current.value = '';
            this.inputCheckbox.current.checked = false;
            this.inputRadioFeMale.current.checked = false;
            this.inputRadioMale.current.checked = false;
            this.inputFile.current.value = '';
        }
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
                                    required
                                />
                            </label>
                            <label className={styles.label}>
                                Zip code:
                                <input
                                    className={styles.input}
                                    type="number"
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
                                        value="Male"
                                        name="gender"
                                        ref={this.inputRadioMale}
                                        className={styles.radio_circle}
                                        required
                                    />
                                </label>
                                <label className={styles.radio_label}> Female
                                    <input
                                        type="radio"
                                        value="Female"
                                        name="gender"
                                        ref={this.inputRadioFeMale}
                                        className={styles.radio_circle}
                                        required
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
                                            radio={obj.radio}
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
