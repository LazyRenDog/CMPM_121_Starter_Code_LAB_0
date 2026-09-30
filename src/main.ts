/**
 * Main entry point for the CMPM 121 Section Activity
 * Simple starter template - customize to your heart's content!
 */

console.log("🎮 CMPM 121 - Starting...");

// Simple counter for demonstration
let counter: number = 0;

// Create basic HTML structure
document.body.innerHTML = `
  <h1>CMPM 121 Project</h1>
  <p>Counter: <span id="counter">0</span></p>
  <button id="increment">Click Me!</button>
  <button id="decrement">Don't Click Me!</button>
`;

// Add click handler
const incrementbutton = document.getElementById("increment")!;
const decrementbutton = document.getElementById("decrement")!;
const counterElement = document.getElementById("counter")!;

incrementbutton.addEventListener("click", () => {
  counter++;
  counterElement.textContent = counter.toString();
});

decrementbutton.addEventListener("click", () => {
  counter--;
  counterElement.textContent = counter.toString();
});
