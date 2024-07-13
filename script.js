let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll('button');

console.log(buttons);
let string = "";

let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
        string = string.substring(0, string.length - 1);
        input.value = string; // Update input field here
        e.preventDefault(); // Prevent default backspace behavior
    } else if (e.key === 'Enter') {
        string = eval(string);
        input.value = string;
        e.preventDefault(); // Prevent default enter behavior
    }
});


