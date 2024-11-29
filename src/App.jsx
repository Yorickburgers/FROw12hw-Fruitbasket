import './App.css'
import FruitCounter from "./components/FruitCounter/FruitCounter.jsx";
import {useState} from "react";
import Input from "./components/Input/Input.jsx";
import Button from "./components/Button/Button.jsx";

function App() {
    const [counters, setCounters] = useState({
        strawberries: 0,
        bananas: 0,
        apples: 0,
        kiwis: 0
    });

    const resetCounters = () => {
        setCounters({
            strawberries: 0,
            bananas: 0,
            apples: 0,
            kiwis: 0
        });
    };

    const changeCounter = (fruit, change) => {
        setCounters(counters => ({
            ...counters,
            [fruit]: counters[fruit] + change
        }));
    };

    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        age: '0',
        zipCode: '',
        test: '',
        frequency: 'iedere week',
        time: 'night',
        comments: '',
        termsConditions: false
    });

    function handleChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }

    function logResults() {
        console.log(counters);
        console.log(formState);
    }

    return (
        <>
            <header>
                <span>
                    <img src="../src/assets/screenshot-logo.png" alt="Fruitmand bezorgservice logo"/>
                </span>
            </header>
            <main>
                <section className="fruitCounterContainer">
                    <FruitCounter
                        counterName="🍓Aardbeien"
                        counterValue={counters.strawberries}
                        whenPressed={(change) => changeCounter("strawberries", change)}
                    />
                    <FruitCounter
                        counterName="🍌Bananen"
                        counterValue={counters.bananas}
                        whenPressed={(change) => changeCounter("bananas", change)}
                    />
                    <FruitCounter
                        counterName="🍏Appels"
                        counterValue={counters.apples}
                        whenPressed={(change) => changeCounter("apples", change)}
                    />
                    <FruitCounter
                        counterName="🥝Kiwi's"
                        counterValue={counters.kiwis}
                        whenPressed={(change) => changeCounter("kiwis", change)}
                    />
                    <Button
                        buttonType="button"
                        clickEvent={resetCounters}
                        className="bigButton resetButton"
                        buttonText="Reset"
                    />
                </section>
                <form>
                    {/*<Input
                    inputID="test"
                    inputType="text"
                    inputLabel="Test"
                    value={formState.test}
                    updateCounter={handleChange}><p>children hier</p>
                </Input>*/}
                    <Input
                        inputID="firstName"
                        inputType="text"
                        inputLabel="Voornaam"
                        value={formState.firstName}
                        updateCounter={handleChange}
                    />
                    <Input
                        inputID="lastName"
                        inputType="text"
                        inputLabel="Achternaam"
                        value={formState.lastName}
                        updateCounter={handleChange}
                    />
                    <Input
                        inputID="age"
                        inputType="number"
                        inputLabel="Leeftijd"
                        value={formState.age}
                        updateCounter={handleChange}
                    />
                    <Input
                        inputID="zipCode"
                        inputType="text"
                        inputLabel="Postcode"
                        value={formState.zipCode}
                        updateCounter={handleChange}
                    />
                    <label htmlFor="frequency">Bezorgfrequentie
                        <select name="frequency" value={formState.frequency} onChange={handleChange} className="input">
                            <option value="iedere week">Iedere week</option>
                            <option value="om de week">Om de week</option>
                            <option value="iedere maand">Iedere maand</option>
                        </select>
                    </label>
                    <div className="radioWrapper">
                        <label htmlFor="time-day">
                            <input type="radio" id="time-day" value="day" name="time" checked={formState.time === "day"}
                               onChange={handleChange}/>Overdag
                        </label>
                        <label htmlFor="time-night">
                            <input type="radio" id="time-night" value="night" name="time"
                               checked={formState.time === "night"}
                               onChange={handleChange}/>'s avonds
                        </label>
                    </div>
                    <label htmlFor="comments">Opmerkingen
                    <textarea
                        id="comments"
                        name="comments"
                        value={formState.comments}
                        onChange={handleChange}
                        placeholder="Enter your comments here..."
                    />
                </label>

                    <label htmlFor="termsConditions">
                        <input type="checkbox" id="termsConditions" name="termsConditions"
                               value={formState.termsConditions}
                               onChange={handleChange}/>Ik ga akkoord met de voorwaarden</label>
                    <Button
                        buttonType="button"
                        clickEvent={logResults}
                        className="bigButton submitButton"
                        buttonText="Verzend"
                    />{/*<label htmlFor="firstName">Voornaam
                    <input type="text" id="firstName" name="firstName" value={formState.firstName} onChange={handleChange}/></label>
                <label htmlFor="lastName">Achternaam
                    <input type="text" id="lastName" name="lastName" value={formState.lastName} onChange={handleChange}/></label>
                <label htmlFor="age">Leeftijd
                    <input type="number" id="age" name="age" value={formState.age} onChange={handleChange}/></label>
                <label htmlFor="zipCode">Postcode
                    <input type="text" id="zipCode" name="zipCode" value={formState.zipCode} onChange={handleChange}/></label>
                <label htmlFor="frequency">Bezorgfrequentie
                    <select name="frequency" value={formState.frequency} onChange={handleChange}>
                        <option value="iedere week">Iedere week</option>
                        <option value="om de week">Om de week</option>
                        <option value="iedere maand">Iedere maand</option>
                    </select></label>
                <label htmlFor="time-day">
                    <input type="radio" id="time-day" value="day" name="time" checked={formState.time === "day"} onChange={handleChange}/>Overdag</label>
                <label htmlFor="time-night">
                    <input type="radio" id="time-night" value="night" name="time" checked={formState.time === "night"} onChange={handleChange}/>'s avonds</label>
                <label htmlFor="comments">Opmerkingen
                    <input type="textarea" id="comments" name="comments" value={formState.comments} onChange={handleChange}/></label>
                <label htmlFor="termsConditions">
                    <input type="checkbox" id="termsConditions" name="termsConditions" value={formState.termsConditions} onChange={handleChange}/>Ik ga akkoord met de voorwaarden</label>
                */}
                </form>
            </main>
        </>
    );
}

export default App
