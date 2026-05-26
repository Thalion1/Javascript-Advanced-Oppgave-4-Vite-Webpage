import { randInt } from "pretty-random"

export function roleDice(inputElement, displayElement) {
    inputElement.addEventListener('click', () => {
        displayElement.textContent = randInt(1, 6)
    })
}