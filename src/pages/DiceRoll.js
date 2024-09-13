import { useState } from 'react';
import { KolForm, KolInputText, KolButton } from "@public-ui/react";

import './DiceRoll.css';
import { interpret } from '../logic/DiceRollCalculator';

export default function DiceRoll() {

    const [result, setResult] = useState(0);

    const formSubmit = {
        onSubmit: (e) => {
            alert(JSON.stringify(e));
            const result = interpret(e).calculate();
            setResult(result);
        }
      };

    return (
        <div className="Center">
        <div>
            <KolForm _on={formSubmit}>
                <h1>Calculator</h1>
                <div className="d-grid gap-4">
                    <KolInputText _id="formulaInput" _name="formulaInput" _label="formula" _placeholder='Insert Formula here, e.g. "d6"'></KolInputText>
                </div>
                <KolButton _label="Roll!" _type="submit"></KolButton>
            </KolForm>

            <div>
                <p>{result}</p>
            </div>

  <div className="d-grid gap-4">
            <KolInputText
            	_type="text"
            	_label="Mit Button"
            	_smart-button='{"_hideLabel": true, "_label": "Roll!"}'
            ></KolInputText>
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
        </div>
        </div>
    );
}
