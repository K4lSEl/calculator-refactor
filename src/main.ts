import { DomDisplay } from "./DomDisplay";

const display = new DomDisplay(document.getElementById("screen")!);
const calculator = new Calculator(display);
const mapper = new KeyMapper();

document.querySelectorAll(".keys > button").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const token = mapper.resolve(e.target as HTMLElement);
    if (token) {
      calculator.handle(token);
    }
  });
});
