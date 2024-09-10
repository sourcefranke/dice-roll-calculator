import { useState } from 'react';

import { interpretFormula } from '../logic/DiceRollCalculator'

export default function DiceRoll() {

    const [result, setResult] = useState(0);

    function handleSubmit(event) {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.target).entries());

        const result = interpretFormula(data.formula);
        setResult(result);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <h1>Calculator</h1>
            <div>
                <label htmlFor="formula">Enter your formula</label>
                <br/>
                <input id="formula" type="text" name="formula" />
            </div>
            <button>Roll it!</button>
        </form>

        <div>
            <p>{result}</p>
        </div>

        <div>
            <h2>Examples</h2>
            <ul>
                <li>d6</li>
                <li>d12</li>
                <li>d20</li>
                <li>2d6</li>
                <li>2d20 + 4</li>
            </ul>
        </div>
        </>
    );
}
