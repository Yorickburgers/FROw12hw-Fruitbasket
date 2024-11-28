import './FruitCounter.css';

function FruitCounter({counterName, counterValue, whenPressed}) {
    return (
        <>
            <article className="fruitCounterContent">
                <h2>{counterName}</h2>
                <button
                    type="button"
                    onClick={() => {counterValue !== 0 ? whenPressed(-1) : 0}}
                >-
                </button>
                <p>{counterValue}</p>
                <button
                    type="button"
                    onClick={() => whenPressed(+1)}
                >+
                </button>

            </article>
        </>
    );
}

export default FruitCounter;