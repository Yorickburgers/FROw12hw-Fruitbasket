import './FruitCounter.css';
import React from "react";
 
function FruitCounter({counterName, }) {
const [counter, setCounter] = React.useState(0);

return (
<>
    <article className="fruitCounterContent">
        <h2>{counterName}</h2>
        <button
            type="button"
            onClick={() => setCounter(counter !== 0 ? counter-1 : 0)}
        >-
        </button>
        <p>{counter}</p>
        <button
            type="button"
            onClick={() => setCounter(counter+1)}
        >+
        </button>

    </article>
</>
);
}

export default FruitCounter;