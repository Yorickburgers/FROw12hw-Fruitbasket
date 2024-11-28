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
        </>
    )
}

export default App
