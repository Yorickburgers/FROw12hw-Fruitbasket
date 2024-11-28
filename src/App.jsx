import './App.css'
import FruitCounter from "./components/FruitCounter/FruitCounter.jsx";
import {useState} from "react";

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
        firstname: '',
        lastname: '',
        age: '0',
        zipCode: '',

    });

    function handleChange(e) {
        const changedFieldName = e.target.name;

        setFormState({
            ...formState,
            [changedFieldName]: e.target.value,
        });
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
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
                <button
                    type="button"
                    onClick={resetCounters}
                    className="resetButton"
                >Reset
                </button>
            </section>
            <form>
                <label htmlFor="firstName">Voornaam
                    <input type="text" id="firstName" name="firstName"/></label>
                <label htmlFor="lastName">Achternaam
                    <input type="text" id="lastName" name="lastName"/></label>
                <label htmlFor="age">Leeftijd
                    <input type="number" id="age" name="age"/></label>
                <label htmlFor="zipCode">Postcode
                    <input type="text" id="zipCode" name="zipCode"/></label>
                <label>Bezorgfrequentie
                    <select name="frequency">
                        <option value="iedere week">Iedere week</option>
                        <option value="om de week">Om de week</option>
                        <option value="iedere maand">Iedere maand</option>
                    </select></label>
                <label>
                    <input type="radio" name="time"/>Overdag</label>
                <label>
                    <input type="radio" name="time"/>'s avonds</label>
                <label htmlFor="comments">Opmerking
                    <input type="field" id="comments" name="lastName"/></label>
                <label>
                    <input type="checkbox" name="lastName"/>Ik ga akkoord met de voorwaarden</label>
                <button type="submit">Verzend</button>
            </form>
        </>
    )
}

export default App
