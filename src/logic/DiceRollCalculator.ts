
const dieExp = new RegExp('^d[0-9]*$');
const multiDiceExp = new RegExp('^[0-9]*d[0-9]*$');

export function interpret(formula: string): Element {
    formula = formula.trim();

    if(formula.includes("+")) {
        const parts = formula.split('+').map((i) => interpret(i));
        return new Addition(parts);
    }
    else if(dieExp.test(formula)) {
        const num = +(formula.substring(1));
        return new Die(num);
    }
    else if(multiDiceExp.test(formula)) {
        const parts = formula.split('d');

        let dice = [];
        for (let i = 0; i < +parts[0]; i++) {
           dice.push(new Die(+parts[1]));
        }

        return new Addition(dice);
    }

    return new SingleNumber(+formula);
}


interface Element {
    calculate(): number;
}

class Addition implements Element {
    private parts: Element[];

    public constructor(parts: Element[]) {
        this.parts = parts;
    }

    public calculate() {
        let result = 0;
        this.parts.forEach((i) => result = result + i.calculate());
        return result;
    }
}

class SingleNumber implements Element {
    private n: number;

    public constructor(n: number) {
        this.n = n;
    }

    public calculate() {
        return this.n;
    }
}

class Die implements Element {
    private size: number;

    public constructor(size: number) {
        this.size = size;
    }

    public calculate() {
        return Math.floor(Math.random() * this.size) + 1;
    }
}
