class Dice {
    shape: HTMLElement;
    value: number
    constructor(element: HTMLElement) {
        this.shape = element;
        this.rollDice();
    }

    rollDice(): void {
        this.shape.textContent = Math.floor(Math.random() * 7).toString();
    }

    reRoll(): void {
        this.value = Math.floor(Math.random() * 7);
        this.shape.textContent = this.value.toString();
    }

}

let diceContainer: Dice[] = [];

const sumButton = document.getElementById('sumButton');
const rerollButton = document.getElementById('rerollButton');
const newDiceButton = document.getElementById('newDiceButton');

newDiceButton!.addEventListener('click', createDice)
rerollButton!.addEventListener('click', reRoll);
sumButton!.addEventListener('click', sumDie);


function createDice(): void {
    let el = document.createElement('div');
    let newDice = new Dice(el);
    diceContainer.push(newDice);
    let whatever = document.getElementById('diceBody');
    whatever?.appendChild(newDice.shape);
}

function reRoll(): void {
    diceContainer.forEach(die => die.reRoll());
}

function sumDie(): void {
    let sum = 0;
    diceContainer.forEach(die => sum += die.value);
    let sumAmount = document.getElementById('sumAmount');
    sumAmount!.textContent = sum.toString();
}