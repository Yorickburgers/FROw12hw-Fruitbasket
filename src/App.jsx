
import './App.css'
import FruitCounter from "./components/FruitCounter/FruitCounter.jsx";

function App() {
    function resetCounter() {

    }
  return (
    <>
        <h1>Fruitmand bezorgservice</h1>
        <section className="fruitCounterContainer">
            <FruitCounter
            counterName="🍓Aardbeien"/>
            <FruitCounter
                counterName="🍌Bananen"/>
            <FruitCounter
                counterName="🍏Appels"/>
            <FruitCounter
                counterName="🥝Kiwi's"/>
            <button
                type="button"
                onClick={resetCounter}
            >Reset
            </button>
        </section>
    </>
  )
}

export default App
