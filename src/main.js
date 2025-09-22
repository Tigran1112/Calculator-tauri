// ? Init vars for all buttons
let input = document.getElementById('input');
let numbers = [];

let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let multiply = document.getElementById('multiply');
let division = document.getElementById('division');
let start = document.getElementById('count');

// * Init number buttons
for (let i = 0; i <= 9; i++) {
    numbers.push(document.getElementById(i));
    numbers[i].addEventListener('click', () => write_symbol(i));
}

// * Init operation buttons
plus.addEventListener('click', () => write_symbol('+'));
minus.addEventListener('click', () => write_symbol('-'));
multiply.addEventListener('click', () => write_symbol('*'));
division.addEventListener('click', () => write_symbol('/'));
start.addEventListener('click', () => sums());

// ? Shortcuts
document.addEventListener('keydown', (event) => { if(event.key === 'Enter') sums() });

// ! Write symbols in input field
function write_symbol(symbol) {
    input.value += symbol;
}

// ! Evaluator
function sums() {
    try {
        input.value = math.evaluate(input.value);
    } catch (e) {
        input.value = 'Ошибка';
    }
}